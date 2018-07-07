import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http";
import { GlobalConfiguration } from '../../config/global.config';

@Injectable()
export class BillService {

  private contextPath: string;
  private readonly BILL_RESOURCE_PATH:string = "naljal/bills/";

  constructor(private http: HttpClient  ,private globalConfiguration : GlobalConfiguration) {
    this.contextPath = this.globalConfiguration.getReportURLPrefix();
  }

  public getBillsByBillMonthAndlocation(billMonth, locationCode, divisionId, response:boolean) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("billMonth", billMonth);
    httpParams = httpParams.append("locationCode", locationCode ? locationCode : "");
    httpParams = httpParams.append("divisionId",divisionId);
    let options = {
      params: httpParams
    }
    if(response){
      options["observe"]='response';
    }
    return this.http.get(this.contextPath + this.BILL_RESOURCE_PATH, options);
  }
}
