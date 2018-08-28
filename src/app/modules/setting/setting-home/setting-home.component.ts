import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SettingMenuService } from 'app/modules/setting/setting-menu.service';

@Component({
  selector: 'nal-jal-setting-home',
  templateUrl: './setting-home.component.html',
  styleUrls: ['./setting-home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingHomeComponent implements OnInit {

  constructor(private settingMenuService: SettingMenuService) { 
    if(!this.settingMenuService.FIRST_MENU.active){
      this.settingMenuService.menuClicked(this.settingMenuService.FIRST_MENU);
    }
  }

  ngOnInit() {
  }

}
