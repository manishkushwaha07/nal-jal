import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'app/models/user.model';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, ParamMap } from '@angular/router';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';
import { GlobalConfiguration } from 'app/config/global.config';
import { SettingMenuService } from 'app/modules/setting/setting-menu.service';

import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'nal-jal-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingComponent implements OnInit {

  private readonly componentName : string = "SettingComponent : ";
  
  public readonly SIDE_MENU_HEADER = "SETTING MENU";

  public loggedInUser : User;

  public sourceUrl : string;

  menus : any[] = new Array();

  constructor(private globalConfiguration: GlobalConfiguration,private route: ActivatedRoute,
    private router: Router,private settingMenuService: SettingMenuService,private authorizationService: AuthorizationService,private location: Location) {
  }

  ngOnInit() {
    this.loggedInUser = this.authorizationService.getLoggedInUser();
    this.menus = this.settingMenuService.getMenus();
    this.route.queryParams.subscribe(params => {
      this.sourceUrl = params['source'];
    });
  }

  logoutClicked() {
    this.authorizationService.logout();
  }

  public backClicked() : void {
    console.log("Navigating back to " + this.sourceUrl);
    this.router.navigate([this.sourceUrl]);
  }

  /**
   * event handler method for menu clicked on component page
   */
  public menuClicked(menu : any) : void{
    let methodName : string = "menuClicked() : ";
    /**
     * making global configuration call to get the log prefix
     */
    let logPrefix : string = this.globalConfiguration.getLogPrefix(this.componentName,methodName);
    console.log(logPrefix + "clicked");
    if(menu != null){
        menu.active = true;
        this.switchActive(menu);
        console.log("Navigating to " + menu.name + " with relative to config");
        this.router.navigate([menu.link],{relativeTo: this.route,queryParamsHandling: "merge"});
    }
  }

   /**
   * Function to switch the active state among the
   * menus on the basis of clicked menu. The function sets
   * active property of all menu's to false except the passed
   * menu.
   */
  public switchActive(menu : any) : void{
      this.menus.forEach(element =>{
          if(element.name != menu.name) element.active = false;
      });
  }
}
