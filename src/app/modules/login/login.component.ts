import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nal-jal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {};
  loading: boolean = false;
  constructor() { }

  ngOnInit() {
    
  }

  loginFormSubmitted(){
    this.loading = true;
    console.log("loginFormSubmitted called");
  }

  resetButtonClicked(){
    this.loading = false;
    console.log("resetButtonClicked called");
  }

}
