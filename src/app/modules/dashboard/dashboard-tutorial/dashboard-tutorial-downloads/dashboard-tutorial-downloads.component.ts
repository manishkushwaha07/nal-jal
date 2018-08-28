import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalResources } from 'app/utility/global.resources';
import { UtilityService } from 'app/services/utility/utility.service';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'nal-jal-dashboard-tutorial-downloads',
  templateUrl: './dashboard-tutorial-downloads.component.html',
  styleUrls: ['./dashboard-tutorial-downloads.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardTutorialDownloadsComponent implements OnInit {
  private readonly COMPONENT_NAME = "ReportConsumerDetailComponent";
  readonly exportByOptions = ["PDF", "XLSX", "HTML"];

  exportType: string;
  consumerNo: string;
  loading : boolean;
  clicked : boolean;
  
  constructor(private globalResources: GlobalResources, private utilityService: UtilityService,
    private dashboardTutorialMenuService: DashboardTutorialMenuService, private domSanitizer: DomSanitizer) { 
      if(!this.dashboardTutorialMenuService.THIRD_MENU.active){
        this.dashboardTutorialMenuService.menuClicked(this.dashboardTutorialMenuService.THIRD_MENU);
      }
   }

  /**
   * Initial setup
   */
  ngOnInit() {
    this.init();
  }

  /**
   * Initial setup for component
   */
  init() {
    this.reset();
    this.exportType = "PDF";
  }
  
  /**
   * Reset
   */
  reset() {
    this.loading = false;
    this.clicked = false;
  }

  /**
   * Check whether the consumer belongs to the logged in user's location before exporting the Bill
   */
  async exportButtonClicked() {
    let valid: boolean = await this.utilityService.isValidConsumer(this.consumerNo);
    if (valid) {
      console.log("Valid consumer proceeding..");
      this.export();
    } else {
      console.log("Invalid consumer");
      this.reset();
      alert("Invalid Consumer No");
    }
  }

  /**
   * Export Consumer Detail report to the specified Format
   */
  export() {
    this.loading = true;
    this.clicked = true;
    this.valid = false;
    this.utilityService.exportConsumerDetail(this.consumerNo, this.exportType).subscribe(success => {  
      this.saveFile(success);
    }, error => { 
      this.handleError(error);
    });   
  }

  /**
   * Save blob to file
   * @param blob
   */
  saveFile(success: any) {
    if(success.status === 200) {
      console.log(success.body);
      // let blob = GlobalResources.createBlobFromResponse(success.body);
      if("PDF" === this.exportType) {
        let blob = new Blob([success.body], {type: 'application/pdf'});//'text/plain'
        let url = URL.createObjectURL(blob);
        this.fileURL = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        this.valid = true;
        let fileName = 'bill_'+new Date()+'.pdf';
        // this.downloadFile(blob,fileName, url);
      } else if("XLSX" === this.exportType) {
        let byteArray;
        let isEncrypted = this.isBase64Encrypted(success.body);
        if(isEncrypted){
          byteArray = this.createByteArrayFromBase64EncryptedBytes(success.body);
        }else{
          byteArray = success.body;
        }
        let blob = new Blob([success.body], {type : 'application/vdn.ms-excel'});//'text/plain'
        let  fileName = 'bill_'+new Date()+'.xlsx';
        this.downloadFile(blob,fileName, "#");
      }else if("HTML" === this.exportType) {
        var blob = new Blob([success.body], { type: 'text/html' });
        let url = URL.createObjectURL(blob);
        this.fileURL = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        this.valid = true;
      } else {
        alert("Wrong Export Type Selected.");
      }
      this.reset();
    }    
  }

  /**
   * Export Consumer Detail report to the specified Format
   */
   /**
   * Save blob to file
   * @param blob
   */
  fileURL: SafeResourceUrl;
  valid:boolean = false;
  exportData:any;
  exportS() {
    this.loading = true;
    this.clicked = true;
    this.utilityService.exportConsumerDetail(this.consumerNo, "HTML").subscribe(success => {  
      if(success.status ===200){
        this.exportData = success.body;
        var blob = new Blob([this.exportData], { type: 'text/html' });
        let url = URL.createObjectURL(blob);
        this.fileURL = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        this.valid = true;
      }
      this.reset();
    }, error => { 
      this.handleError(error);
    });   
  }

  exportToPdf(){
    let blob = new Blob([this.exportData], {type: 'application/pdf'});//'text/plain'
    let url = URL.createObjectURL(blob);
    this.fileURL = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    this.valid = true;
    let fileName = 'bill_'+new Date()+'.pdf';
    // this.downloadFile(blob,fileName, url);
  }
  
  exportToExcel(){
    let byteArray;
    let isEncrypted = this.isBase64Encrypted(this.exportData);
    if(isEncrypted){
      byteArray = this.createByteArrayFromBase64EncryptedBytes(this.exportData);
    }else{
      byteArray = this.exportData;
    }
    let blob = new Blob([this.exportData], {type : 'application/vdn.ms-excel'});//'text/plain'
    let  fileName = 'bill_'+new Date()+'.xlsx';
    this.downloadFile(blob,fileName, "#");
  }

  isBase64Encrypted(encryptedBytes){
    try {
      return btoa(atob(encryptedBytes)) == encryptedBytes;
    } catch (err) {
      return false;
    }
  }

  createByteArrayFromBase64EncryptedBytes(encryptedBytes){
    let decodedString = atob(encryptedBytes);
    let byteNumbers = new Array(decodedString.length);
    for (let i = 0; i < decodedString.length; i++) {
      byteNumbers[i] = decodedString.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    return byteArray;
  }

  downloadFile(blob, fileName, url){
    var dlink = document.createElement('a');
        dlink.download = fileName;
        dlink.href = window.URL.createObjectURL(blob);
        document.body.appendChild(dlink);
        dlink.click();
        dlink.remove();
        // document.body.removeChild(dlink);
        URL.revokeObjectURL(url);
  }

  /**
   * Handle errors
   * @param error
   */
  handleError(error: any) {
    this.reset();
    if(error.status === 400 || error.status === 417) {
      var errorStr = String.fromCharCode.apply(this, new Uint8Array(error.error));
      var errorJson = JSON.parse(errorStr);
      alert(errorJson.errorMessage);
    } else {
      this.globalResources.handleError(error,this.COMPONENT_NAME, "export()");
    }
  }
}
