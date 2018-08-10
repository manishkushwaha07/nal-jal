import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { LoginModalComponent } from 'app/modals/login-modal/login-modal.component';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';
import { SessionTimerService } from 'app/services/session-timer/session-timer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from 'app/modals/login-modal/login-modal.component';

@Component({
  selector: 'nal-jal-session-timer',
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.css']
})
export class SessionTimerComponent implements OnInit,OnDestroy {

  private readonly CLASS_NAME = "SessionTimerComponent ";

  //variable to hold minutes
  minutes;
  //variable to hold seconds
  seconds;

  dialogShownOnce = false;

  //variable to hold session timer subscription
  sessionTimerSubscription : any;

  constructor(private authorizationService : AuthorizationService, private ngbModal: NgbModal,
    private sessionTimerService : SessionTimerService) { }

  ngOnInit() {
    this.startSessionTimer();
  }
  
  ngOnDestroy(): void {
    console.log(this.CLASS_NAME + "ngOnDestroy called.Unsubscribing sessiontimer");
    if(this.sessionTimerSubscription){
      this.sessionTimerSubscription.unsubscribe();
    }
  }

  public startSessionTimer() {
    console.log(this.CLASS_NAME + "startSessionTimer called");
    this.sessionTimerSubscription = this.sessionTimerService.getSessionTimer().subscribe(sessionTime => {
      //console.log(this.CLASS_NAME + "sessionTime recieved in startSessionTimer is ");
      //console.log(sessionTime);
      //console.log("In next " + sessionTime);
      this.setSessionTime(sessionTime);
    },complete => {
      //console.log("In complete " + complete);
      this.setSessionTime(null);
    },error => {
      //console.log("In error " + error);
      this.setSessionTime(null);
    });
  }

  private setSessionTime(sessionTime : any){
    //console.log("setSessionTime called");
    if(sessionTime){
      this.minutes = sessionTime.minutes;
      this.seconds = sessionTime.seconds;
    }else{
      if(!this.dialogShownOnce){
        console.log(this.CLASS_NAME + "Showing Login Dialog");
        this.showLoginDialog();
        console.log(this.CLASS_NAME + "After Showing Login Dialog");
      }
    }
  }

  private showLoginDialog(){
    console.log(this.CLASS_NAME + "showLoginDialog called");
    const modalRef = this.ngbModal.open(LoginModalComponent, {backdrop: "static", keyboard:false, centered: true});
    console.log(modalRef);
    modalRef.componentInstance.modalInstance = modalRef;
    this.dialogShownOnce = true;
    modalRef.result.then(close =>{
      console.log(this.CLASS_NAME + "Modal closed because " + close);
      this.dialogShownOnce = false;
    },rejected =>{
      console.log(this.CLASS_NAME + "Modal rejected because " + rejected);
      this.dialogShownOnce = false;
      if(rejected === 'logout'){
        this.authorizationService.logout();
      }
    });
  }
}
