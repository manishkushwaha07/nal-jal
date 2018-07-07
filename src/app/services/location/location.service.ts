import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { GlobalConfiguration } from '../../config/global.config';

@Injectable()
export class LocationService {

  private contextPath: string;
  private readonly LOCATION_RESOURCE_PATH:string = "location/";

  constructor(private http: HttpClient  ,private globalConfiguration : GlobalConfiguration) {
    this.contextPath = this.globalConfiguration.getReportURLPrefix();
  }

  getAllRegions(response : boolean){
    let options = null;
    if(response){
      options = {observe:'response'};
      return this.http.get(this.contextPath + this.LOCATION_RESOURCE_PATH + "regions", options);
    }else{
      return this.http.get(this.contextPath + this.LOCATION_RESOURCE_PATH + "regions");
    }
  }

  public getCirclesByRegionId(regionId, response:boolean) {
    let options = null;
    if(response){
      options = {observe:'response'};
      return this.http.get(this.contextPath + this.LOCATION_RESOURCE_PATH +"circles/" + regionId, options);
    }else{
      return this.http.get(this.contextPath + this.LOCATION_RESOURCE_PATH +"circles/" + regionId);
    }
  }

  public getDivisionsByCircleId(circleId, response:boolean) {
    let options = null;
    if(response){
      options = {observe:'response'};
      return this.http.get(this.contextPath + this.LOCATION_RESOURCE_PATH +"divisions/" + circleId, options);
    }else{
      return this.http.get(this.contextPath + this.LOCATION_RESOURCE_PATH +"divisions/" + circleId);
    }
  }

  public getZonesByDivisionId(divisionId, response:boolean) {
    let options = null;
    if(response){
      options = {observe:'response'};
      return this.http.get(this.contextPath + this.LOCATION_RESOURCE_PATH +"locations/" + divisionId, options);
    }else{
      return this.http.get(this.contextPath + this.LOCATION_RESOURCE_PATH +"locations/" + divisionId);
    }
  }

  public getAllScheduledBillMonths(response:boolean) {
    let options = null;
    if(response){
      options = {observe:'response'};
      return this.http.get(this.contextPath + "naljal/scheduled-bill-month", options);
    }else{
      return this.http.get(this.contextPath + "naljal/scheduled-bill-month");
    }
  }
}
