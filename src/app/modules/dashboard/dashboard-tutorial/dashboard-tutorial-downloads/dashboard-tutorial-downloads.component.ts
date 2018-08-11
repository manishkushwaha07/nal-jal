import { Component, OnInit } from '@angular/core';
import { GlobalResources } from 'app/utility/global.resources';
import { UtilityService } from 'app/services/utility/utility.service';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';

@Component({
  selector: 'nal-jal-dashboard-tutorial-downloads',
  templateUrl: './dashboard-tutorial-downloads.component.html',
  styleUrls: ['./dashboard-tutorial-downloads.component.css']
})
export class DashboardTutorialDownloadsComponent implements OnInit {
  private readonly COMPONENT_NAME = "ReportConsumerDetailComponent";
  readonly exportByOptions = ["PDF", "XLSX", "HTML"];

  exportType: string;
  consumerNo: string;
  loading : boolean;
  clicked : boolean;
  
  constructor(private globalResources: GlobalResources, private utilityService: UtilityService,
    private dashboardTutorialMenuService: DashboardTutorialMenuService) { 
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
      let blob = GlobalResources.createBlobFromResponse(success.body);
      var fileName = 'consumer_detail_' + this.consumerNo;
      if("PDF" === this.exportType) {
        //saveAs(blob, fileName + '.pdf');
        alert("Report exported as PDF");
      } else if("XLSX" === this.exportType) {
        //saveAs(blob, fileName + '.xlsx');
        alert("Report exported as XLSX");
      } else if("HTML" === this.exportType) {
        var reader = new FileReader();
        reader.onload = function() {
          var dcbWindow = window.open("", "_blank", "");
          dcbWindow.document.write(reader.result);
        }
        reader.readAsText(blob);
      } else {
        alert("Wrong Export Type Selected.");
      }
      this.reset();
    }    
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
