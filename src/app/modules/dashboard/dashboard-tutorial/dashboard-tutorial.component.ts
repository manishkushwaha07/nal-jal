import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from 'app/modules/dashboard/dashboard-menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalConfiguration } from 'app/config/global.config';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';

@Component({
  selector: 'nal-jal-dashboard-tutorial',
  templateUrl: './dashboard-tutorial.component.html',
  styleUrls: ['./dashboard-tutorial.component.css']
})
export class DashboardTutorialComponent implements OnInit {
  private readonly componentName : string = "DashboardTutorialComponent : ";
  menus : any[] = new Array();

  constructor(private globalConfiguration : GlobalConfiguration,private route: ActivatedRoute,private router: Router,
    private dashboardMenuService : DashboardMenuService,private dashboardTutorialMenuService: DashboardTutorialMenuService) {
      if(!this.dashboardMenuService.THIRD_MENU.active){
        this.dashboardMenuService.menuClicked(this.dashboardMenuService.THIRD_MENU);
      }
  }

  ngOnInit() {
    this.menus = this.dashboardTutorialMenuService.getMenus();
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
  