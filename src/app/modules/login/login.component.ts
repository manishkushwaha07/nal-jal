import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { User } from '../../models/user.model';
import { GlobalResources } from 'src/app/utility/global.resources';

@Component({
  selector: 'nal-jal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  CLASS_NAME: string = "LoginComponent";
  login : any = {};
  loading: boolean = false;
  constructor(private authorizationService : AuthorizationService,private router: Router, private globalResources: GlobalResources) { }

  ngOnInit() {
  }

  loginFormSubmitted(){
    let methodName = "loginFormSubmitted";
    this.loading = true;
    let user = new User(this.login);
    this.authorizationService.authenticate(user).subscribe(data => {
      //console.log(data);
      let status = data.status;
      if(status === 200){
        console.log("logged in successfully");
        this.router.navigate(['dashboard']);
      }
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log("Error While login");
      this.globalResources.handleError(error, this.CLASS_NAME, methodName );
    });
  }

  resetButtonClicked(){
    this.loading = false;
    console.log("resetButtonClicked called");
  }

}
