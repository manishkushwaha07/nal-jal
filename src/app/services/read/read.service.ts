import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http";
import { GlobalConfiguration } from '../../config/global.config';

@Injectable()
export class ReadService {

  private contextPath: string;
  private readonly READ_RESOURCE_PATH:string = "naljal/readings/";

  constructor(private http: HttpClient  ,private globalConfiguration : GlobalConfiguration) {
    this.contextPath = this.globalConfiguration.getReportURLPrefix();
  }

  public getReadingsByBillMonthAndlocation(billMonth, discomId, regionId, circleId, divisionId, locationCode, response:boolean) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("billMonth", billMonth ? billMonth : "");
    httpParams = httpParams.append("discomId", discomId ? discomId : "");
    httpParams = httpParams.append("regionId", regionId ? regionId : "");
    httpParams = httpParams.append("circleId", circleId ? circleId : "");
    httpParams = httpParams.append("divisionId", divisionId ? divisionId : "");
    httpParams = httpParams.append("locationCode", locationCode ? locationCode : "");
    let options = {
      params: httpParams
    }
    if(response){
      options["observe"]='response';
    }
    return this.http.get(this.contextPath + this.READ_RESOURCE_PATH, options);
  }
}
