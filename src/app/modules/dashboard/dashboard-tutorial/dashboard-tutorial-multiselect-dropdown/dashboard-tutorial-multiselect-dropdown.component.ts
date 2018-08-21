import { Component, OnInit } from '@angular/core';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';

@Component({
  selector: 'nal-jal-dashboard-tutorial-multiselect-dropdown',
  templateUrl: './dashboard-tutorial-multiselect-dropdown.component.html',
  styleUrls: ['./dashboard-tutorial-multiselect-dropdown.component.css']
})
export class DashboardTutorialMultiselectDropdownComponent implements OnInit {

  items: Array<any>;
  _selectedItems: Array<any> = [];
  constructor(private dashboardTutorialMenuService: DashboardTutorialMenuService) {
    if(!this.dashboardTutorialMenuService.FOURTH_MENU.active){
      this.dashboardTutorialMenuService.menuClicked(this.dashboardTutorialMenuService.FOURTH_MENU);
    }
   }

  ngOnInit() {
    this.items = [{ label: "label-a", value: "a"}, { label: "label-b", value: "b"}, { label: "label-c", value: "c"}]
  }
  onChange(newValue) {
    console.log(newValue);
    console.log('received change event');
  }

}
