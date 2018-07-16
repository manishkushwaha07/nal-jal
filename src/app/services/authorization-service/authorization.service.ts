import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Response} from '@angular/http';
import { GlobalConfiguration } from '../../config/global.config';
import { User } from '../../models/user.model';
import { Router } from "@angular/router";
import { LoginService } from 'app/services/login/login.service';
import { LogoutService } from 'app/services/logout/logout.service';
// import { LogoutService } from 'app/services/logout/logout.service';

@Injectable()
export class AuthorizationService {

  private readonly SESSION_END_TIME_KEY = "session_horcrux";
  private readonly TOKEN_KEY = "ngb_horcrux";
  private AUTHENTICATION_URL;
  private AUTHORIZATION_HEADER_TEXT = "Authorization";
  private jwtHelper: JwtHelperService;
  private sessionEndTime;

  constructor (private router: Router, private globalConfiguration : GlobalConfiguration,
    private loginService : LoginService,private logoutService : LogoutService) {
    this.jwtHelper = new JwtHelperService();
    this.AUTHENTICATION_URL = this.globalConfiguration.getAuthenticationURL();
  }

  public authenticate(user : User){
    //clearing sessionEndTime so that new sessionEndTime can be calculated
    //after login
    this.setSessionEndTime(null);
    return this.loginService.authenticate(user);
  }

  public getLoggedInUserRole() : string {
    let token : string = this.getToken();
    let decodedToken = this.jwtHelper.decodeToken(token);
    if(decodedToken){
      //return decodedToken.role;
      return decodedToken.user.role;
    }else{
      return null;
    }
  }

  public getToken() : string{
    let currentToken = sessionStorage.getItem(this.TOKEN_KEY);
    return currentToken ? currentToken : "";
  }

  public isLogedIn() : boolean {
    let token : string = this.getToken();
    return token && token.length > 0 ;
  }

  public getLoggedInUser() : User {
    let token : string = this.getToken();
    let decodedToken = this.jwtHelper.decodeToken(token);
    if(decodedToken){
      let user : User = new User(null);
      /*user.setUsername(decodedToken.sub);
      user.setRole(decodedToken.role);
      user.setName(decodedToken.name);
      user.setDesignation(decodedToken.designation);
      user.setLocationCode(decodedToken.locationCode);
      user.setSessionId(decodedToken.sessionId);*/
      user.setId(decodedToken.user.id);
      user.setUsername(decodedToken.user.username);
      user.setRole(decodedToken.user.role);
      user.setName(decodedToken.user.name);
      user.setDesignation(decodedToken.user.designation);
      user.setLocationCode(decodedToken.user.locationCode);
      user.setMobileNo(decodedToken.user.mobileNo);
      user.setStatus(decodedToken.user.status);
      user.setSessionId(decodedToken.sessionId);
      user.setZone(decodedToken.user.zone);
      return user;
    }else{
      console.log("decoded token is null");
      return null;
    }
  }

  public logout(){
    console.log("Logout called in Authorization Service");
    let loggedInUser : User = this.getLoggedInUser();
    console.log("Logging out user with sessionId " + loggedInUser.getSessionId());
    this.logoutService.logoutSession(loggedInUser.getSessionId(),this.getToken()).subscribe(success => {
      console.log("Logout successfull. Redirecting to login page");
    },error => {
      console.log("Error while logging out");
      console.log(error);
    });
    this.clearStorage(this.TOKEN_KEY);
    this.clearStorage(this.SESSION_END_TIME_KEY);
    this.router.navigate(['home']);
  }

  public setSessionEndTime(sessionEndTime){
    console.log("setSessionEndTime called");
    this.sessionEndTime = sessionEndTime;
    if(sessionEndTime === null || sessionEndTime === undefined){
      this.clearStorage(this.SESSION_END_TIME_KEY);
    }
  }

  public getSessionEndTime(){
    if(this.sessionEndTime) return this.sessionEndTime;
    
    let sessionEndTime = sessionStorage.getItem(this.SESSION_END_TIME_KEY);
    this.sessionEndTime = sessionEndTime ? sessionEndTime : undefined;
    return this.sessionEndTime;
  }

  private clearStorage(key){
    sessionStorage.removeItem(key);
  }
}
