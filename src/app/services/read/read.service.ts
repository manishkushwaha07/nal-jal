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

  public getReadingsByBillMonthAndlocation(billMonth, locationCode, divisionId, response:boolean) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("billMonth", billMonth);
    httpParams = httpParams.append("locationCode", locationCode);
    httpParams = httpParams.append("divisionId",divisionId);
    let options = {
      params: httpParams
    }
    if(response){
      options["observe"]='response';
    }
    return this.http.get(this.contextPath + this.READ_RESOURCE_PATH, options);
  }
}
