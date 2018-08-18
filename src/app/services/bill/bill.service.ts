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

  public getBillsByBillMonthAndlocation(billMonth, discomId, regionId, circleId, divisionId, locationCode, response:boolean) {
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
    return this.http.get(this.contextPath + this.BILL_RESOURCE_PATH, options);
  }

  //-------------------start of type of service call--------------------------------------

  // getByLocationCodeAndPayDateAndPayWindowAndDeletedFalse(locationCode, paymentDate, paymentWindow: string, deleted: string, response: boolean): any{
  //   let httpParams = new HttpParams();
  //   httpParams = httpParams.append("deleted", deleted);
  //   let options = {
  //       params: httpParams
  //   };
  //   if(response){
  //       options["observe"]='response';
  //       return this.http.get(this.contextPath + 'payment/location-code/' + locationCode + '/pay-date/' + paymentDate + '/pay-window/' + paymentWindow, options).pipe(map((response : HttpResponse<any>)=>{
  //           return response;
  //       }));
  //   }else{
  //     return this.http.get(this.contextPath + 'payment/location-code/' + locationCode + '/pay-date/' + paymentDate + '/pay-window/' + paymentWindow, options);
  //   }
  // }

  // public getAllPaymentsByConsumerNoAndDeletedStatusAndPostedStatus(consumerNo: string, deleted: boolean, posted: boolean, response:boolean): any{
  //   let options = {};
  //   if(response){
  //       options = {observe:'response'};
  //       return this.http.get(this.contextPath + "payment/consumer-no/" + consumerNo + "/deleted/" + deleted + "/posted/" + posted, options).pipe(map((response : HttpResponse<any>)=>{
  //           return response;
  //       }));
  //   }else{
  //     return this.http.get(this.contextPath + "payment/consumer-no/" + consumerNo + "/deleted/" + deleted + "/posted/" + posted);
  //   }
  // }

  // getPaymentSummary(locationCode: any, paymentSummaryDate: Date) {
  //   return this.http.get(this.contextPath + 'cash-window/location-code/' + locationCode + '/date/' + paymentSummaryDate, { observe: 'response' }).pipe(map((response: HttpResponse<any>) => {
  //       return response;
  //   }))
  // }

  // getPaymentSummaryDetails(locationCode: any, paymentSummaryDate: Date, windowName: any) {
  //   let httpParams = new HttpParams();
  //   httpParams = httpParams.append("deleted", "false")
  //   return this.http.get(this.contextPath + 'payment/location-code/' + locationCode + '/pay-date/' + paymentSummaryDate + '/pay-window/' + windowName, { observe: 'response', params: httpParams }).pipe(map((response: HttpResponse<any>) => {
  //       return response;
  //   }))
  // }

  // updatePartPayment(partPayment: any) {
  //   console.log("PartPayment service Callled");
  //   console.log(partPayment);
  //   return this.http.put(this.contextPath + 'part-payment', partPayment, { observe: 'response' }).pipe(map((response: HttpResponse<any>) => {
  //       return response;
  //   }))
  // }

  // deletePartPayment(id: number) {
  //     return this.http.delete(this.contextPath + 'part-payment/id/' + id, { observe: 'response' }).pipe(map((response: HttpResponse<any>) => {
  //       return response;
  //   }))
  // }

  // /**
  //  * coded by nitish
  //  * @param consumerNo 
  //  */
  // public getCountByConsumerNo(consumerNo: string) {
  //     return this.http.get(this.contextPath + "payment/count/consumer-no/" + consumerNo);
  // }

  // addPartpayment(partPayment: any) {

  //   return this.http.post(this.contextPath + 'part-payment', partPayment, { observe: 'response' }).pipe(
  //       map((response: HttpResponse<any>) => {
  //           return response;
  //       }))
  // }
  
  //-------------------end of type of service call--------------------------------------

}
