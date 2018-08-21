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

  isCheckedAllGroup:boolean = true;
  selectedItems: any = [];
  groupSelectionMessage: string;

  checkedAllGroup() {
    this.selectedItems = [];
    this.items.forEach(element => {
      element.checked = this.isCheckedAllGroup;
      if (this.isCheckedAllGroup) {
        this.selectedItems.push(element.name);
        this.groupSelectionMessage ='ALL';
      } else {
        this.groupSelectionMessage = "Select Group";
      }
    });
  }

  checkedCustomGroup(group) {
    if (group && group.checked) {
      this.selectedItems.push(group.name);
    } else if (group && !group.checked) {
      let index = this.selectedItems.indexOf(group.name);
      if (index > -1) this.selectedItems.splice(index, 1)
    }
    if (group && !group.checked) {
      this.isCheckedAllGroup = false;
      let index = this.selectedItems.indexOf(group);
      if (index > -1) this.selectedItems.splice(index, 1)
      if (this.selectedItems.length > 1 && this.selectedItems.length < this.items.length) this.groupSelectionMessage = "Multiple Group";
      if (this.selectedItems.length === 0) this.groupSelectionMessage = "Select Group";
      else if (this.selectedItems.length === 1) this.groupSelectionMessage = this.selectedItems;
    }else if (group && group.checked) {
      if (this.selectedItems.length === this.items.length) {
        this.isCheckedAllGroup = true;
        this.groupSelectionMessage = "All";
      }
      if (this.selectedItems.length > 1 && this.selectedItems.length < this.items.length) {
        this.groupSelectionMessage = "Multiple Group";
      }
      else if (this.selectedItems.length === 1) {
        this.groupSelectionMessage = this.selectedItems;
      }
    }
  }

}
