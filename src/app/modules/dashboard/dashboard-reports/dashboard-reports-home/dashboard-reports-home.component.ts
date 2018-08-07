import { Component, OnInit } from '@angular/core';
import { DashboardReportsMenuService } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-menu.service';

@Component({
  selector: 'nal-jal-dashboard-reports-home',
  templateUrl: './dashboard-reports-home.component.html',
  styleUrls: ['./dashboard-reports-home.component.css']
})
export class DashboardReportsHomeComponent implements OnInit {

  private readonly CLASS_NAME = "DashboardReportsHomeComponent ";

  constructor(private dashboardReportsMenuService: DashboardReportsMenuService) { 
    if(!this.dashboardReportsMenuService.FIRST_MENU.active){
      this.dashboardReportsMenuService.menuClicked(this.dashboardReportsMenuService.FIRST_MENU);
    }
  }

  ngOnInit() {
    console.log(this.CLASS_NAME + "ngOnInit called");
  }

}
