
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { GlobalConfiguration } from '../../config/global.config';


@Injectable()
export class LogoutService{
    //Context path for redirection to Backend resources
    // The URL in this variable ends with a front slash. !!!!!!!!! Don't append in your respective methods !!!!!!!!!!!
    private contextPath : string;
    private logoutControllerUrl : string;
    constructor(private http: Http,private globalConfiguration : GlobalConfiguration){
        this.contextPath = this.globalConfiguration.getBackendURLPrefix();
        this.logoutControllerUrl = this.globalConfiguration.getLogoutURLPrefix();
    }

    public logoutSession(sessionId : number,token : string){
        console.log("logoutSession called for sessionId " + sessionId);
        let headers = new Headers();
        this.createAuthorizationTokenHeader(headers,token);
        return this.http.put(this.contextPath + this.logoutControllerUrl + '/' + 'session/id/' + sessionId,{},{
          headers: headers
        }).pipe(map((response : Response) => {
          return response;
        }))
    }

    public createAuthorizationTokenHeader(headers: Headers,token : string) : void {
        headers.append('Authorization', 'Bearer ' + token);
    }
}
