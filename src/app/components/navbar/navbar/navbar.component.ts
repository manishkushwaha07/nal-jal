import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'app/models/user.model';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'app/components/login/login.component';

@Component({
  selector: 'nal-jal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

  private componentName: string = "NavbarComponent : ";

  public loggedInUser: User;
  public isLogedIn: boolean = false;
  
  constructor(private authorizationService: AuthorizationService, private ngbModal: NgbModal,
     private router: Router) {
  }

  ngOnInit() {
    console.log("Initialising Navbar");
    this.isLogedIn = this.authorizationService.isLogedIn();
    if(this.isLogedIn){
      this.loggedInUser = this.authorizationService.getLoggedInUser();
    }
  }

  loginClicked(){
    const modalRef = this.ngbModal.open(LoginComponent, {keyboard: true, backdrop: true, centered: true, windowClass:"modal-xl" });
    modalRef.componentInstance.isModal = true;
  }
  
  logoutClicked() {
    console.log("logout clicked from dashboard");
    this.authorizationService.logout();
    this.isLogedIn = this.authorizationService.isLogedIn();
  }

  settingClicked(){
    console.log("setting clicked from ngb-navbar");
    this.router.navigate(['setting'],{ queryParams: { source: this.router.url }, queryParamsHandling: "merge" });
  }

}
