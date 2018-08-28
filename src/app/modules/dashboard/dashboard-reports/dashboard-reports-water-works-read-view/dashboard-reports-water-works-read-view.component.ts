import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardReportsMenuService } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-menu.service';

@Component({
  selector: 'nal-jal-dashboard-reports-water-works-read-view',
  templateUrl: './dashboard-reports-water-works-read-view.component.html',
  styleUrls: ['./dashboard-reports-water-works-read-view.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardReportsWaterWorksReadViewComponent implements OnInit {

  constructor(private dashboardReportsMenuService: DashboardReportsMenuService) { 
    if(!this.dashboardReportsMenuService.THIRD_MENU.active){
      this.dashboardReportsMenuService.menuClicked(this.dashboardReportsMenuService.THIRD_MENU);
    }
  }

  ngOnInit() {
  }

}
