import { Injectable } from "@angular/core";
import { MenuInterface } from "app/interfaces/menu/menu.interface";

@Injectable()
export class SettingMenuService implements MenuInterface{
    public readonly CLASS_NAME : string = "SettingMenuService ";

    public FIRST_MENU : any ;
    private readonly FIRST_MENU_ICON: string = "fa-home";
    private readonly FIRST_MENU_NAME: string = "Home";
    private readonly FIRST_MENU_LINK: string = "home";
    private readonly FIRST_MENU_ACTIVE: boolean = false;

    public SECOND_MENU : any;
    
    private readonly SECOND_MENU_ICON: string = "fa-pencil-square-o";
    private readonly SECOND_MENU_NAME : string = "Update Profile";
    private readonly SECOND_MENU_LINK : string = "update/profile";
    private readonly SECOND_MENU_ACTIVE : boolean = false;
    
    public THIRD_MENU : any;
    private readonly THIRD_MENU_ICON: string = "fa-pencil-square-o";
    private readonly THIRD_MENU_NAME : string = "Update Password";
    private readonly THIRD_MENU_LINK : string = "update/password";
    private readonly THIRD_MENU_ACTIVE : boolean = false;

    menus: any[] = new Array();

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

        this.THIRD_MENU = {
            icon: this.THIRD_MENU_ICON,
            name: this.THIRD_MENU_NAME,
            active: this.THIRD_MENU_ACTIVE,
            link: this.THIRD_MENU_LINK
        }
        this.menus.push(this.THIRD_MENU);
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
}