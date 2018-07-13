import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from 'src/app/modules/dashboard/dashboard-menu.service';

@Component({
  selector: 'app-dashboard-water-works-zero-read-view',
  templateUrl: './dashboard-water-works-zero-read-view.component.html',
  styleUrls: ['./dashboard-water-works-zero-read-view.component.css']
})
export class DashboardWaterWorksZeroReadViewComponent implements OnInit {

  constructor(private dashboardMenuService: DashboardMenuService) { 
    if(!this.dashboardMenuService.FOURTH_MENU.active){
      this.dashboardMenuService.menuClicked(this.dashboardMenuService.FOURTH_MENU);
    }
  }

  ngOnInit() {
  }

}
