import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalConfiguration } from 'app/config/global.config';
import { DashboardMenuService } from 'app/modules/dashboard/dashboard-menu.service';
import { DashboardReportsMenuService } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-menu.service';

@Component({
  selector: 'nal-jal-dashboard-reports',
  templateUrl: './dashboard-reports.component.html',
  styleUrls: ['./dashboard-reports.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardReportsComponent implements OnInit {

  private readonly componentName : string = "DashboardReportsComponent : ";
  menus : any[] = new Array();

  constructor(private globalConfiguration : GlobalConfiguration,private route: ActivatedRoute,private router: Router,
    private dashboardMenuService : DashboardMenuService,private dashboardReportsMenuService: DashboardReportsMenuService) {
      if(!this.dashboardMenuService.SECOND_MENU.active){
        this.dashboardMenuService.menuClicked(this.dashboardMenuService.SECOND_MENU);
      }
  }

  ngOnInit() {
  this.menus = this.dashboardReportsMenuService.getMenus();
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
        this.router.navigate([menu.link],{relativeTo: this.route});
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
