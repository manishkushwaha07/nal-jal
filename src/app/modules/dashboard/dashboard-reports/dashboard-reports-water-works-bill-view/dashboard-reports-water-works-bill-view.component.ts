import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardReportsMenuService } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-menu.service';

@Component({
  selector: 'nal-jal-dashboard-reports-water-works-bill-view',
  templateUrl: './dashboard-reports-water-works-bill-view.component.html',
  styleUrls: ['./dashboard-reports-water-works-bill-view.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardReportsWaterWorksBillViewComponent implements OnInit {

  constructor(private dashboardReportsMenuService: DashboardReportsMenuService) { 
    if(!this.dashboardReportsMenuService.SECOND_MENU.active){
      this.dashboardReportsMenuService.menuClicked(this.dashboardReportsMenuService.SECOND_MENU);
    }
  }

  ngOnInit() {
  }

}
