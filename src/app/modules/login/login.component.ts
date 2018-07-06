import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nal-jal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {};
  constructor() { }

  ngOnInit() {
    
  }

  loginFormSubmitted(){
    console.log("loginFormSubmitted called");
  }

}
