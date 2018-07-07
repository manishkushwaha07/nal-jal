import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'nal-jal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {};
  loading: boolean = false;
  constructor(private authorizationService : AuthorizationService,private router: Router) { }

  ngOnInit() {
  }

  loginFormSubmitted(){
    this.loading = true;
    let user = new User(this.login);
    this.authorizationService.authenticate(user).subscribe(data => {
      //console.log(data);
      let status = data.status;
      if(status === 200){
        console.log("logged in successfully");
      }
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log("Error While login");
      console.log(error);
    });
  }

  resetButtonClicked(){
    this.loading = false;
    console.log("resetButtonClicked called");
  }

}
