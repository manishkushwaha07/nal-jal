import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { GlobalConfiguration } from "app/config/global.config";
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';
import { User } from 'app/models/user.model';
import { GlobalConstants } from 'app/utility/global.constants';
import { map } from 'rxjs/operators';

@Injectable()
export class UtilityService {

  public readonly CLASS_NAME: string = "UtilityService : ";

  //Context path for redirection to Backend resources
  // The URL in this variable ends with a front slash. !!!!!!!!! Don't append in your respective methods !!!!!!!!!!!
  private contextPath: string;

  private CONSUMER_MASTER_RESOURCE_PATH: string;

  //private loggedInUser: User;
  
  constructor(private authorizationService: AuthorizationService, private http: HttpClient, private globalConfiguration: GlobalConfiguration) {
    this.contextPath = this.globalConfiguration.getBackendURLPrefix();
    this.CONSUMER_MASTER_RESOURCE_PATH = 'consumer/master/';
    //this.loggedInUser = this.authorizationService.getLoggedInUser();
    //console.log(this.loggedInUser);
  }

  async isValidConsumer(consumerNo: string): Promise<boolean> {
    let valid: boolean = false;
    try {
      const response = await this.getConsumerMasterByConsumerNo(consumerNo);
      let loggedInUser = this.authorizationService.getLoggedInUser();
      if (response && loggedInUser) {
        let locationCode = (<any>response).locationCode;
        let loggedInUserLocationCode = loggedInUser.getLocationCode();
        console.log("LocationCode " + locationCode + " loggedInLocation " + loggedInUserLocationCode);
        let role = loggedInUser.getRole();
        if (locationCode && loggedInUserLocationCode && role) {
          if (role === GlobalConfiguration.ROLE_OAG || role === GlobalConfiguration.ROLE_OIC || role === GlobalConfiguration.ROLE_OPERATOR) {
            valid = locationCode === loggedInUserLocationCode;
          } else if (role === GlobalConfiguration.ROLE_EE) {
            valid = locationCode.substring(0, 5) === loggedInUserLocationCode.substring(0, 5);
          } else if (role === GlobalConfiguration.ROLE_SE) {
            valid = locationCode.substring(0, 3) === loggedInUserLocationCode.substring(0, 3);
          } else if (role === GlobalConfiguration.ROLE_CE || role === GlobalConfiguration.ROLE_MD) {
            valid = locationCode.substring(0, 1) === loggedInUserLocationCode.substring(0, 1);
          }
        }
      }
    } catch (exception) {
      console.log(this.CLASS_NAME + "Exception while resolving promise");
      //console.log(exception);
    }
    return valid;
  }

  async isValidConsumerForSystem(consumerNo: string, system: string): Promise<any> {
    const methodName : string = "isValidConsumerForSystem() : ";
    console.log(this.CLASS_NAME + methodName + "called " + consumerNo + " " + system);
    let consumerNoMaster: any = null;
    let loggedInUser = this.authorizationService.getLoggedInUser();
    try {
      if (consumerNo && system) {
        console.log(this.CLASS_NAME + methodName + "called " + consumerNo + " " + system);
        let response = null;
        if(system.toUpperCase() === "OLD"){
          if(loggedInUser){
            let locationCode = loggedInUser.getLocationCode();
            console.log(this.CLASS_NAME + methodName + "checking with old consumerNo " + consumerNo + " locationCode " + locationCode);
            response = await this.getConsumerMasterByLocationCodeAndOldConsumerNo(locationCode,consumerNo,false);
          }
        }else{
          console.log(this.CLASS_NAME + methodName + "checking with new");
          response = await this.getConsumerMasterByConsumerNo(consumerNo);
        }
        if (response && loggedInUser) {
          let result = <any>response;
          let locationCode = (<any>response).locationCode;
          let loggedInUserLocationCode = loggedInUser.getLocationCode();
          let role = loggedInUser.getRole();
          console.log(locationCode + " " + loggedInUserLocationCode + " " + role);
          if (locationCode && loggedInUserLocationCode && role) {
            if (role === GlobalConfiguration.ROLE_OAG || role == GlobalConfiguration.ROLE_OIC || role === GlobalConfiguration.ROLE_OPERATOR) {
              if(locationCode === loggedInUserLocationCode){
                consumerNoMaster = result;
              }
            } else if (role === GlobalConfiguration.ROLE_EE) {
              if(locationCode.substring(0, 5) === loggedInUserLocationCode.substring(0, 5)){
                consumerNoMaster = result;
              }
            } else if (role === GlobalConfiguration.ROLE_SE) {
              if(locationCode.substring(0, 3) === loggedInUserLocationCode.substring(0, 3)){
                consumerNoMaster = result;
              }
            } else if (role === GlobalConfiguration.ROLE_CE || role === GlobalConfiguration.ROLE_MD) {
              if(locationCode.substring(0, 1) === loggedInUserLocationCode.substring(0, 1)){
                consumerNoMaster = result;
              }
            }
          }
        }
      }
    } catch (exception) {
      console.log(this.CLASS_NAME + "Exception while resolving promise");
      //console.log(exception);
      consumerNoMaster = null;
    }
    return consumerNoMaster;
  }

  /**
   * Below function returns promise instead of Observable.
   * @param consumerNo
   */
  getConsumerMasterByConsumerNo(consumerNo: string) {
    return this.http.get(this.contextPath + this.CONSUMER_MASTER_RESOURCE_PATH + 'consumer-no/' + consumerNo).toPromise();
  }

  /**
   * Below function returns promise instead of Observable.
   * @param consumerNo
   */
  // getConsumerMasterByOldConsumerNo(oldConsumerNo: string) {
  //   return this.http.get(this.contextPath + this.CONSUMER_MASTER_RESOURCE_PATH + 'old-service-no-one/' + oldConsumerNo).toPromise();
  // }

  public getConsumerMasterByLocationCodeAndOldConsumerNo(locationCode: string, oldConsumerNo: string, response:boolean) {
    let options = null;
    if(response){
      options = {observe:'response'};
      return this.http.get(this.contextPath + this.CONSUMER_MASTER_RESOURCE_PATH + 'location-code/'+locationCode + '/old-service-no-one/' + oldConsumerNo, options).toPromise();
    }else{
      return this.http.get(this.contextPath + this.CONSUMER_MASTER_RESOURCE_PATH + 'location-code/'+locationCode + '/old-service-no-one/' + oldConsumerNo).toPromise();
    }
  }

  // public getConsumerMasterByNewConsumerNo(consumerNo: string, response:boolean) {
  //   let options = null;
  //   if(response){
  //     options = {observe:'response'};
  //     return this.http.get(this.contextPath + this.CONSUMER_MASTER_RESOURCE_PATH + 'consumer-no/' + consumerNo, options);
  //   }else{
  //     return this.http.get(this.contextPath + this.CONSUMER_MASTER_RESOURCE_PATH + 'consumer-no/' + consumerNo)
  //   }
  // }

  /**
   * Export consumer detail
   * @param consumerNo
   * @param type 
   */
  exportConsumerDetail(consumerNo: string, type: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("consumerNo", consumerNo);
    httpParams = httpParams.append("type", type);
    return this.http.get(this.contextPath + "bill-report/consumer-detail",
      { responseType: 'arraybuffer', observe: 'response', params: httpParams }).pipe(map((response: HttpResponse<ArrayBuffer>) => {
        return response;
      }));
  }
}
