import { Component, OnInit, Input } from '@angular/core';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';
import { User } from 'app/models/user.model';

@Component({
  selector: 'nal-jal-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  private readonly CLASS_NAME = "LoginModalComponent ";

  modalInstance: any;
  login : any= {};

  readonly INVALID_LOGIN_MESSAGE = "Invalid Username/Password. Try Again !";
  readonly UNABLE_LOGIN_MESSAGE = "Unable to Login. Try Again !";

  loading = false;
  authenticated = false;
  loginError = false;
  loginErrorText;
  
  constructor(private authorizationService : AuthorizationService) { }

  ngOnInit() {
    let loggedInUser = this.authorizationService.getLoggedInUser();
    if(loggedInUser !== null && loggedInUser !== undefined){
      this.login.username = loggedInUser.getUsername();
    }
  }

  /**
   * Function which will be called by Angular 
   * when setting modalInstance attribute on this components
   * selector
   */
  @Input("modalInstance")
  set setModalInstance(modalInstance : any){
    this.modalInstance = modalInstance;
    console.log(this.modalInstance);
  }

  processLoginForm() {
    console.log(this.CLASS_NAME + "Process Login Form started");
    //console.log(this.user.value);
    this.loading = true;
    //console.log('Authentication started for user ');
    let user = new User(this.login);
    // user.setUsername(this.login.username);
    console.log(this.CLASS_NAME + "Authenticated user made from form control as: ");
    console.log(user);
    this.authorizationService.authenticate(user).subscribe(data => {
        let status = data.status;
        if(status === 200){
          console.log(this.CLASS_NAME + "Re Login Successfull. Logged in User is: ");
          if(this.authorizationService.isLogedIn()){
            this.modalInstance.close("Logged In successfully");
          }else {
            console.log(this.CLASS_NAME + "Unable to login user");
            this.loginError = true;
            this.loginErrorText = this.UNABLE_LOGIN_MESSAGE;
          }
        }
        this.loading = false;
     }, error => {
       this.loading = false;
       this.loginError = true;
       console.log(this.CLASS_NAME + "Error While login");
       console.log(error);
       let status = error.status;
       if(status == 403 || status == 401){
         this.loginErrorText = this.INVALID_LOGIN_MESSAGE;
       }else{
         this.loginErrorText = this.UNABLE_LOGIN_MESSAGE;
       }
     });
  }

  public logoutClicked(){
    console.log(this.CLASS_NAME + "logoutClicked called");
    if(this.modalInstance){
      this.modalInstance.dismiss("logout");
    }
  }
}
