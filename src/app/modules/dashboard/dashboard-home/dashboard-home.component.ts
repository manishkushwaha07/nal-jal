import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from 'src/app/modules/dashboard/dashboard-menu.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private dashboardMenuService: DashboardMenuService) { 
    if(!this.dashboardMenuService.FIRST_MENU.active){
      this.dashboardMenuService.menuClicked(this.dashboardMenuService.FIRST_MENU);
    }
  }

  ngOnInit() {
    console.log("Running DashboardHomeComponent Constructor ");
  }

}
