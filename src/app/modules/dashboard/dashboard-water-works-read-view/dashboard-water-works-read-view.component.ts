import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from 'app/modules/dashboard/dashboard-menu.service';

@Component({
  selector: 'nal-jal-dashboard-water-works-read-view',
  templateUrl: './dashboard-water-works-read-view.component.html',
  styleUrls: ['./dashboard-water-works-read-view.component.css']
})
export class DashboardWaterWorksReadViewComponent implements OnInit {

  constructor(private dashboardMenuService: DashboardMenuService) { 
    if(!this.dashboardMenuService.THIRD_MENU.active){
      this.dashboardMenuService.menuClicked(this.dashboardMenuService.THIRD_MENU);
    }
  }

  ngOnInit() {
  }

}
