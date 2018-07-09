/**
 * Interface to Enforce Menu Making methods on the 
 * implementor.
 */
export interface MenuInterface{

    /**
     * This function will be used to dynamically
     * prepare menu items from the component level
     * constant variable
     */
    prepareMenus() : void;

    /**
     * This function will be called when
     * user will click on a particular menu.
     */
    menuClicked(menu : any) : void;

    /**
     * This function will be used to dynamically
     * switch various classes among the prepared
     * menu's based on the menu clicked.
     */
    switchActive(menu : any) : void;
}