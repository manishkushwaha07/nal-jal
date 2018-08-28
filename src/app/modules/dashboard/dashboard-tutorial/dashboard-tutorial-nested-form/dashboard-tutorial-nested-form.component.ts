import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';

@Component({
  selector: 'nal-jal-dashboard-tutorial-nested-form',
  templateUrl: './dashboard-tutorial-nested-form.component.html',
  styleUrls: ['./dashboard-tutorial-nested-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardTutorialNestedFormComponent implements OnInit {

  constructor(private dashboardTutorialMenuService: DashboardTutorialMenuService) { 
    if(!this.dashboardTutorialMenuService.SECOND_MENU.active){
      this.dashboardTutorialMenuService.menuClicked(this.dashboardTutorialMenuService.SECOND_MENU);
    }
  }
  
  ngOnInit() {
  }

}
