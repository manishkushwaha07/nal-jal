import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { GlobalConfiguration } from '../../config/global.config';

/**
 * [This class is available for injection in others.]
 * Class will have methods for calling the resources of user
 * 
 * In this class we are using Angular's latest HttpClient API for backend request instead 
 * of old Http API. The new HttpClient API has support for Interceptors.
 */
@Injectable()
export class UserService {

  private contextPath: string;
  private misContextPath: string;

  private readonly USER_RESOURCE_PATH: string = "user/";

  /**
  * [Constructor of Class]
  * @param  {HttpClient}  http [private variable of HttpClient class for using the methods of Http. (Injection of HTTP)]
  * @return No Return Type
  */
  constructor(private http: HttpClient, private globalConfiguration: GlobalConfiguration) {
    this.contextPath = this.globalConfiguration.getBackendURLPrefix();
    this.misContextPath = this.globalConfiguration.getReportURLPrefix();
  }

  public getByLocationCode(locationCode: string, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + 'location-code/' + locationCode, options);
    } else {
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + 'location-code/' + locationCode);
    }
  }

  public getAll(response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH, options);
    } else {
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH);
    }
  }

  public getByDivisionId(divisionId: string, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "division/id/" + divisionId, options);
    } else {
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "division/id/" + divisionId);
    }
  }

  public getByCircleId(circleId: string, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "circle/id/" + circleId, options);
    } else {
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "circle/id/" + circleId);
    }
  }

  public getByRegionId(regionId: string, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "region/id/" + regionId, options);
    } else {
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "region/id/" + regionId);
    }
  }

  public getByDiscomId(discomId: string, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "discom/id/" + discomId, options);
    } else {
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "discom/id/" + discomId);
    }
  }

  public getByUsername(username: string, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "username/" + username, options);
    } else {
      return this.http.get(this.contextPath + this.USER_RESOURCE_PATH + "username/" + username);
    }
  }

  public update(user, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.put(this.contextPath + this.USER_RESOURCE_PATH + "detail/" , user, options);
    } else {
      return this.http.put(this.contextPath + this.USER_RESOURCE_PATH + "detail/" , user);
    }
  }

  public updatePassword(user, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.put(this.contextPath + this.USER_RESOURCE_PATH, user, options);
    } else {
      return this.http.put(this.contextPath + this.USER_RESOURCE_PATH, user);
    }
  }

  public getAllLocationByUsername(username: string, response: boolean) {
    let options = null;
    if (response) {
      options = { observe: 'response' };
      return this.http.get(this.misContextPath + this.USER_RESOURCE_PATH + "all-location/username/" + username, options);
    } else {
      return this.http.get(this.misContextPath + this.USER_RESOURCE_PATH + "all-location/username/" + username);
    }
  }
}