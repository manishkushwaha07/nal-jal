import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from 'src/app/modules/dashboard/dashboard-menu.service';

@Component({
  selector: 'app-dashboard-water-works-bill-view',
  templateUrl: './dashboard-water-works-bill-view.component.html',
  styleUrls: ['./dashboard-water-works-bill-view.component.css']
})
export class DashboardWaterWorksBillViewComponent implements OnInit {

  constructor(private dashboardMenuService: DashboardMenuService) { 
    if(!this.dashboardMenuService.SECOND_MENU.active){
      this.dashboardMenuService.menuClicked(this.dashboardMenuService.SECOND_MENU);
    }
  }

  ngOnInit() {
  }

}
