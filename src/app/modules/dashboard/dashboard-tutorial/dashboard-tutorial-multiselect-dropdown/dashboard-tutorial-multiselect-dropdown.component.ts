import { Component, OnInit } from '@angular/core';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';

@Component({
  selector: 'nal-jal-dashboard-tutorial-multiselect-dropdown',
  templateUrl: './dashboard-tutorial-multiselect-dropdown.component.html',
  styleUrls: ['./dashboard-tutorial-multiselect-dropdown.component.css']
})
export class DashboardTutorialMultiselectDropdownComponent implements OnInit {

  constructor(private dashboardTutorialMenuService: DashboardTutorialMenuService) {
    if(!this.dashboardTutorialMenuService.FOURTH_MENU.active){
      this.dashboardTutorialMenuService.menuClicked(this.dashboardTutorialMenuService.FOURTH_MENU);
    }
   }

  ngOnInit() {
  }

}
