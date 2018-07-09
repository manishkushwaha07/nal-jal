import { Injectable } from "@angular/core";
import { MenuInterface } from "src/app/interfaces/menu/menu.interface";

@Injectable()
export class DashboardMenuService implements MenuInterface{
    public readonly CLASS_NAME : string = "DashboardMenuService ";

    public FIRST_MENU : any ;
    private readonly FIRST_MENU_ICON: string = "fa-home";
    private readonly FIRST_MENU_NAME: string = "Home";
    private readonly FIRST_MENU_LINK: string = "home";
    private readonly FIRST_MENU_ACTIVE: boolean = false;

    public SECOND_MENU : any;
    private readonly SECOND_MENU_ICON: string = "fa-list-alt";
    private readonly SECOND_MENU_NAME : string = "View Bills";
    private readonly SECOND_MENU_LINK : string = "water-works/bill/view";
    private readonly SECOND_MENU_ACTIVE : boolean = false;

    public THIRD_MENU : any;
    private readonly THIRD_MENU_ICON: string = "fa-list-alt";
    private readonly THIRD_MENU_NAME : string = "View Read";
    private readonly THIRD_MENU_LINK : string = "water-works/read/view";
    private readonly THIRD_MENU_ACTIVE : boolean = false;

    public FOURTH_MENU : any;
    private readonly FOURTH_MENU_ICON: string = "fa-list-alt";
    private readonly FOURTH_MENU_NAME : string = "View Assessed Read";
    private readonly FOURTH_MENU_LINK : string = "water-works/assessed/read/view";
    private readonly FOURTH_MENU_ACTIVE : boolean = false;
    
    public FIFTH_MENU : any;
    private readonly FIFTH_MENU_ICON: string = "fa-list-alt";
    private readonly FIFTH_MENU_NAME : string = "View Zero Read";
    private readonly FIFTH_MENU_LINK : string = "water-works/zero/read/view";
    private readonly FIFTH_MENU_ACTIVE : boolean = false;

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

        this.THIRD_MENU = {
            icon: this.THIRD_MENU_ICON,
            name: this.THIRD_MENU_NAME,
            active: this.THIRD_MENU_ACTIVE,
            link: this.THIRD_MENU_LINK
        }
        this.menus.push(this.THIRD_MENU);

        this.FOURTH_MENU = {
            icon: this.FOURTH_MENU_ICON,
            name: this.FOURTH_MENU_NAME,
            active: this.FOURTH_MENU_ACTIVE,
            link: this.FOURTH_MENU_LINK
        }
        this.menus.push(this.FOURTH_MENU);

        this.FIFTH_MENU = {
            icon: this.FIFTH_MENU_ICON,
            name: this.FIFTH_MENU_NAME,
            active: this.FIFTH_MENU_ACTIVE,
            link: this.FIFTH_MENU_LINK
        }
        this.menus.push(this.FIFTH_MENU);
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