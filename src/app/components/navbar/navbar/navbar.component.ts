import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';

@Component({
  selector: 'nal-jal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private componentName: string = "NavbarComponent : ";

  public loggedInUser: User;
  
  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    console.log("Initialising Navbar");
    this.loggedInUser = this.authorizationService.getLoggedInUser();
  }
  
  logoutClicked() {
    console.log("logout clicked from dashboard");
    this.authorizationService.logout();
  }

}
