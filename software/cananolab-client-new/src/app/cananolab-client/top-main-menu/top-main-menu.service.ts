import { Injectable } from '@angular/core';
import { MainDisplayService } from '../main-display/main-display.service';

/**
 * These will serve as constants used for Hiding, Showing, enabling,
 * and disabling any of these menu options, by other components.
 * These values can also be used for the text of the menu item.
 */
export let TopMenuItems = {
    HOME: 'Home',
    WORKFLOW: 'Workflow',
    PROTOCOLS: 'Protocols',
    SAMPLES: 'Samples',
    PUBLICATIONS: 'Publications',
    GROUPS: 'Groups',
    CURATION: 'Curation',
    MY_WORKSPACE: 'My Workspace',
    MY_FAVORITES: 'My Favorites',
    LOGOUT: 'Logout'
};

@Injectable( {
    providedIn: 'root'
} )
export class TopMainMenuService{

    topMenuValuesArray = null;
    topMenuKeysArray = null;

    constructor( private mainDisplayService: MainDisplayService ) {
        this.topMenuValuesArray = Object.values( TopMenuItems );
        this.topMenuKeysArray = Object.keys( TopMenuItems );
    }

    /**
     * Enable an option in the Main Top Menu
     * @TODO
     *
     * @param menuItem The "key" of the Main Top Menu option to enable
     */
    enableMenuItem( menuItem ) {
    }

    /**
     * Disable an option in the Main Top Menu
     * It can still be visible in the menu, just disabled
     * @TODO
     *
     * @param menuItem The "key" of the Main Top Menu option to disable
     */
    disableMenuItem( menuItem ) {

    }

    /**
     * Make an item visible in the Main Top Menu
     * @TODO
     *
     * @param menuItem The "key" of the Main Menu item to show in the menu
     */
    showMenuItem( menuItem ) {
    }

    /**
     * A list of Items (by "key") to show in the MainTopMenu
     * All other options will not appear in the menu
     * @TODO
     *
     * @param menuItems
     */
    showOnlyMenuItems( menuItems: [] ) {
    }


    /**
     * Remove an item from the Main Top Menu
     * @TODO
     *
     * @param menuItem The "key" of the Main Menu item to be removed from the menu
     */
    hideMenuItem( menuItem ) {

    }

    /**
     * Remove all items from the Main Top Menu
     * @TODO
     */
    hideAllMenuItems() {
    }

    /**
     * Passes the new Top Main Menu selection on the Main Display
     *
     * @param ms Top Main Menu selection
     */
    selectMenuItem( ms ) {
        console.log('MHL selectMenuItem: ', ms );
        this.mainDisplayService.setMenuSelection( ms );
    }

    /**
     * Returns the index of Main Top Menu option by its "key"
     * @param key
     */
    getIndexByKey( key ) {
        let n = -1;
        for( n = 0; n < this.topMenuKeysArray.length; n++ ){
            if( key.localeCompare( this.topMenuKeysArray ) === 0 ){
                return n;
            }
        }
        return n;
    }

}
