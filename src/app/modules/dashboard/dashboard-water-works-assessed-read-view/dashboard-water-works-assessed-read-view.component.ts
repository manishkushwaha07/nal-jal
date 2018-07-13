import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from 'src/app/modules/dashboard/dashboard-menu.service';

@Component({
  selector: 'app-dashboard-water-works-assessed-read-view',
  templateUrl: './dashboard-water-works-assessed-read-view.component.html',
  styleUrls: ['./dashboard-water-works-assessed-read-view.component.css']
})
export class DashboardWaterWorksAssessedReadViewComponent implements OnInit {

  constructor(private dashboardMenuService: DashboardMenuService) { 
    if(!this.dashboardMenuService.FIFTH_MENU.active){
      this.dashboardMenuService.menuClicked(this.dashboardMenuService.FIFTH_MENU);
    }
  }

  ngOnInit() {
  }

}
