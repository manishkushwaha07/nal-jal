import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class GlobalConfiguration {
  
  private readonly BACKEND_PREFIX : string = '/mppkvvcl/nextgenbilling/backend/api/v1/';
  private readonly REPORT_PREFIX : string = '/mppkvvcl/ngb/report/backend/api/v1/';
  private readonly AUTHENTICATION_URL : string = 'authentication/login';
  private readonly LOGOUT_URL : string = 'authentication/logout';
  private readonly TRANSLATE_BACKEND_PREFIX : string = '/translate/';

  private readonly componentName : string = "GlobalConfiguration : ";
  
  public static readonly ROLE_OPERATOR : string = "operator";

  public static readonly ROLE_OAG : string = "oag";
  
  public static readonly ROLE_OIC : string = "oic";

  public static readonly ROLE_EE : string = "ee";

  public static readonly ROLE_SE : string = "se";

  public static readonly ROLE_CE : string = "ce";

  public static readonly ROLE_MD : string = "md";

  public static readonly OAG_HOME_URL : string = "oag";

  public static readonly OIC_HOME_URL : string = "oic";

  public static readonly EE_HOME_URL : string = "ee";

  constructor () {}

  getAuthenticationURL() : string {
      let url = this.BACKEND_PREFIX + this.AUTHENTICATION_URL;
      return url;
  }

  getBackendURLPrefix() : string {
    return this.BACKEND_PREFIX;
  }

  getReportURLPrefix() : string {
    return this.REPORT_PREFIX;
  }

  getLogoutURLPrefix() : string {
    return this.LOGOUT_URL;
  }

  getTranslateBackendURLPrefix() : string {
    return this.TRANSLATE_BACKEND_PREFIX;
  }
  
  getLogPrefix(componentName : string, methodName : string){
    let logPrefix : string = this.componentName + "getLogPrefix() : ";
    return componentName + methodName;
  }

  public createTokenAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this.getToken());
    //console.log("Sending headers as");
    //console.log(headers);
  }

  private getToken() : string{
    //console.log("Getting saved token");
    let currentToken = sessionStorage.getItem("currentToken");
    return currentToken ? currentToken : "";
  }
}
