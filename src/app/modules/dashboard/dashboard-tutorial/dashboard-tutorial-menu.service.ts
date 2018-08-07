import { Injectable } from "@angular/core";
import { MenuInterface } from "app/interfaces/menu/menu.interface";

@Injectable()
export class DashboardTutorialMenuService implements MenuInterface{
    public readonly CLASS_NAME : string = "DashboardTutorialMenuService ";

    public FIRST_MENU : any ;
    private readonly FIRST_MENU_ICON: string = "fa-home";
    private readonly FIRST_MENU_NAME: string = "Home";
    private readonly FIRST_MENU_LINK: string = "home";
    private readonly FIRST_MENU_ACTIVE: boolean = false;

    public SECOND_MENU : any;
    private readonly SECOND_MENU_ICON: string = "fa-list-alt";
    private readonly SECOND_MENU_NAME : string = "Nested Form Example";
    private readonly SECOND_MENU_LINK : string = "nested-form";
    private readonly SECOND_MENU_ACTIVE : boolean = false;

    menus: any[] = new Array();
    menuObject: any = {};
    constructor(){
        //console.log(this.CLASS_NAME + "constructor called");
        this.prepareMenus();
    }

    /**
     * Logic for creating menus dynamically on html page.
     * Also this logic is used to switch the active state on 
     * the basis of menu clicked
    */
    public prepareMenus(): void {
        //console.log(this.CLASS_NAME + "Preparing Menus for OAG");
        this.FIRST_MENU = {
            icon: this.FIRST_MENU_ICON,
            name: this.FIRST_MENU_NAME,
            active: this.FIRST_MENU_ACTIVE,
            link: this.FIRST_MENU_LINK
        };
        this.menus.push(this.FIRST_MENU);

        this.SECOND_MENU = {
            icon: this.SECOND_MENU_ICON,
            name: this.SECOND_MENU_NAME,
            active: this.SECOND_MENU_ACTIVE,
            link: this.SECOND_MENU_LINK
        }
        this.menus.push(this.SECOND_MENU);
    }

    public getMenus() {
        return this.menus;
    }

    /**
   * event handler method for menu clicked on component page
   */
  public menuClicked(menu : any) : void {
    let methodName : string = "menuClicked() : ";
    //console.log(this.CLASS_NAME + methodName + "clicked");
    if(menu){
        menu.active = true;
        this.switchActive(menu);
        //------------OR--------------------
        // this.switchActiveInMenuObject(menu);
    }
  }

   /**
   * Function to switch the active state among the
   * menus on the basis of clicked menu. The function sets
   * active property of all menu's to false except the passed
   * menu.
   */
  public switchActive(menu : any) : void {
      //console.log("Switching menu active class");
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