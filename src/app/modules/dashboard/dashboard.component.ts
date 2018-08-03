import { Component, OnInit } from '@angular/core';
import { GlobalConfiguration } from '../../config/global.config';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardMenuService } from 'app/modules/dashboard/dashboard-menu.service';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';

@Component({
  selector: 'nal-jal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private readonly className : string = "DashboardComponent : ";
  menus : any[] = new Array();
  menuObject: any = {};
  constructor(private dashboardMenuService: DashboardMenuService,private globalConfiguration : GlobalConfiguration,
     private route: ActivatedRoute,private router: Router, private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.menus = this.dashboardMenuService.getMenus();
  }

  public menuClicked(menu: any): void {
    let methodName : string = "menuClicked() : ";
    let logPrefix : string = this.globalConfiguration.getLogPrefix(this.className, methodName);
    console.log(logPrefix + "clicked");
    if (menu) {
      menu.active = true;
      this.switchActive(menu);
      //------------OR-------------------
      // this.switchActiveInMenuObject(menu);
      this.router.navigate([menu.link], { relativeTo: this.route });
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

  public switchActiveInMenuObject(menu: any): void {
    //Iterating over object properties and making other than clicked menu active false;
    for (let property in this.menuObject) {
      if (this.menuObject[property].name !== menu.name) this.menuObject[property].active = false;
    }
  }

}
