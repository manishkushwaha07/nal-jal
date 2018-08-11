
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { GlobalConfiguration } from '../../config/global.config';
import { User } from '../../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

/**
 * VERY IMPORTANT DO NOT CHANGE ANY CODE IN THIS CLASS !!!!!!
 * Using Angular's old Http API so that Interceptor for login URL Does not gets called.
 * For all other BACKEND API Request we will use Angular's 4.3 HttpClient API for HTTP Requests
 * since HttpClient API has support for Interceptors. If in future Angular's latest version does not
 * have old Http API then replace this class's Http from @angular/http to HttpClient from @angular/common/http
 */
@Injectable()
export class LoginService {

  private readonly SESSION_DURATION_MINUTES : number = 10;

  private readonly SESSION_END_TIME_KEY = "session_horcrux";
  private readonly TOKEN_KEY = "ngb_horcrux";
  private AUTHENTICATION_URL;
  private AUTHORIZATION_HEADER_TEXT = "Authorization";
  private jwtHelper: JwtHelperService;
  constructor (private http: Http, private globalConfiguration : GlobalConfiguration) {
    this.AUTHENTICATION_URL = this.globalConfiguration.getAuthenticationURL();
    this.jwtHelper = new JwtHelperService();
  }

  public authenticate(user : User){
    //console.log("using new  authentication url as: " + this.AUTHENTICATION_URL);
    //console.log("creating authorization headers ");
    let headers = new Headers();
    this.createAuthorizationHeader(headers,user);
    return this.http.post(this.AUTHENTICATION_URL,user,{
      headers: headers
    }).pipe(map((response : Response) => {
      let fullToken = response.headers.get(this.AUTHORIZATION_HEADER_TEXT);
      if(fullToken){
        //console.log("Full Token");
        //console.log(fullToken);
        let token = fullToken.split(" ")[1];
        //console.log("Token after split");
        //console.log(token);
        sessionStorage.setItem(this.TOKEN_KEY,token);
        let sessionEndTimestamp = new Date(new Date().getTime() + this.SESSION_DURATION_MINUTES * 60 * 1000).getTime();
        sessionStorage.setItem(this.SESSION_END_TIME_KEY,sessionEndTimestamp.toString());
      }
      return response;
    }));
  }

  public createAuthorizationHeader(headers: Headers, user : User) : void {
    headers.append('Credentials', 'Basic ' + btoa(user.getUsername() + ':' + user.getPassword()));
  }
}
