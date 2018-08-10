import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';
import { User } from '../../models/user.model';
import { GlobalResources } from 'app/utility/global.resources';
import { GlobalConfiguration } from 'app/config/global.config';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nal-jal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  readonly INVALID_LOGIN_MESSAGE = "Invalid Username/Password. Try Again !";
  readonly UNABLE_LOGIN_MESSAGE = "Unable to Login. Try Again !";
  CLASS_NAME: string = "LoginComponent";
  login : any = {};
  loading: boolean = false;
  loginError: boolean = false;
  loginErrorText: string;
  @Input() isModal: boolean;
  constructor(private authorizationService : AuthorizationService,private router: Router,
     private globalResources: GlobalResources, private activeModal : NgbActiveModal) { }

  ngOnInit() {
  }

  loginFormSubmitted(){
    let methodName = "loginFormSubmitted";
    this.loading = true;
    // this.loginErrorText = null;
    let user = new User(this.login);
    this.authorizationService.authenticate(user).subscribe(success => {
      if(success.status === 200){
        console.log("Login Successfull. Logged in User is: " + this.authorizationService.getLoggedInUserRole());
        if(this.authorizationService.isLogedIn()){
          // if(this.authorizationService.getLoggedInUserRole() === GlobalConfiguration.ROLE_OAG){
          //   console.log("Authenticated user is oag. Navigating to oag homepage");
          //   this.router.navigate(['/oag']);
          // }
          console.log("redirect to dashboard");
          this.router.navigate(['/dashboard']);
          this.loading = false;
          this.activeModal.close();
        }
      }else{
        this.loading = false;
        this.loginError = true;
        this.loginErrorText = this.UNABLE_LOGIN_MESSAGE;
      }
    }, error => {
      this.loading = false;
      this.loginError = true;
      console.log("Error While login");
      if(error.status == 403 || error.status == 401){
        this.loginErrorText = this.INVALID_LOGIN_MESSAGE;
      }else{
        this.loginErrorText = this.UNABLE_LOGIN_MESSAGE;
      }
      let errorMessage = this.globalResources.handleError(error, this.CLASS_NAME, methodName );
    });
  }

  resetButtonClicked(){
    this.loading = false;
    this.loginErrorText = null;
    console.log("resetButtonClicked called");
  }

  cancelClicked(){
    this.activeModal.dismiss();
  }

}
