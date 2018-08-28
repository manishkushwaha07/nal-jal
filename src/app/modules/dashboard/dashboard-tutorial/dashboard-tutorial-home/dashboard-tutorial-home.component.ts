import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';

@Component({
  selector: 'nal-jal-dashboard-tutorial-home',
  templateUrl: './dashboard-tutorial-home.component.html',
  styleUrls: ['./dashboard-tutorial-home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardTutorialHomeComponent implements OnInit {

  private readonly CLASS_NAME = "DashboardTutorialHomeComponent ";

  constructor(private dashboardTutorialMenuService: DashboardTutorialMenuService) { 
    if(!this.dashboardTutorialMenuService.FIRST_MENU.active){
      this.dashboardTutorialMenuService.menuClicked(this.dashboardTutorialMenuService.FIRST_MENU);
    }
  }

  ngOnInit() {
    console.log(this.CLASS_NAME + "ngOnInit called");
  }

}
