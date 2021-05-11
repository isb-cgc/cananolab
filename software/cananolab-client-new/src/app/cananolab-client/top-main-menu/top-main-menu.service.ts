import { EventEmitter, Injectable } from '@angular/core';
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
    LOGOUT: 'Logout',
    TEST: 'Test'
};

@Injectable( {
    providedIn: 'root'
} )
export class TopMainMenuService{

    topMenuValuesArray = null;
    topMenuKeysArray = null;

    enableMenuArray = [];
    enableTopMenuArrayEmitter = new EventEmitter();
    visibleMenuArray = [];
    visibleMenuArrayEmitter = new EventEmitter();

    constructor( private mainDisplayService: MainDisplayService ){
        this.init();
    }

    init(){
        this.topMenuValuesArray = Object.values( TopMenuItems );
        this.topMenuKeysArray = Object.keys( TopMenuItems );

        // Initialize to all enabled and all visible.
        for( let i = 0; i < this.topMenuKeysArray.length; i++ ){
            this.enableMenuArray[i] = true;
            this.visibleMenuArray[i] = true;
/*

            // /////////  TESTING ONLY   ///////// //
            // @TESTING this sets a menu button to disabled
            if( i === this.topMenuKeysArray.length - 2 ){
                this.disableMenuItem( this.topMenuKeysArray[i] );
            }
            // @TESTING this sets a menu button to hidden
            if( i === this.topMenuKeysArray.length - 4 ){
                this.hideMenuItem( this.topMenuKeysArray[i] );
            }

            // /////////  END TESTING ONLY   ///////// //
*/
        }

        // /////////  TESTING ONLY   ///////// //
        // this.showOnlyMenuItems( [this.topMenuKeysArray[1], this.topMenuKeysArray[4]] );
        // console.log( 'MHL this.topMenuKeysArray: ', this.topMenuKeysArray );
        // /////////  END TESTING ONLY   ///////// //

        this.updateEnableMenu();
        this.updateVisibleMenu();
    }

    /**
     * We shouldn't need this.
     */
    clearEnableMenuArray(){
        this.enableMenuArray = [];
    }

    /**
     * This should be called anytime "this.enableMenuArray" might have changed.
     * Tells subscribers that this is the new "enableMenuArray".
     *
     * The enableMenuArray determines if a particular menu item is disabled or enabled.
     */
    updateEnableMenu(){
        this.enableTopMenuArrayEmitter.emit( this.enableMenuArray );
    }

    /**
     * To get enableMenuArray directly rather than subscribe.
     */
    getEnableMenuArray(){
        return this.enableMenuArray;
    }


    /**
     * Enable an option in the Main Top Menu
     *
     * @param menuItem The "key" of the Main Top Menu option to enable
     */
    enableMenuItem( menuItem ){
        console.log( 'MHL 300 enableMenuItem: ', menuItem );
        this.enableMenuArray[this.getIndexByKey( menuItem )] = true;
        this.updateEnableMenu();
    }

    /**
     * Disable an option in the Main Top Menu
     * It can still be visible in the menu, just disabled
     *
     * @param menuItem The "key" of the Main Top Menu option to disable
     */
    disableMenuItem( menuItem ){
        console.log( 'MHL 301a disableMenuItem[' + this.getIndexByKey( menuItem ) + ']: ', menuItem );
        this.enableMenuArray[this.getIndexByKey( menuItem )] = false;
        this.updateEnableMenu();
    }








    /**
     * Make an item visible in the Main Top Menu
     *
     * @param menuItem The "key" of the Main Menu item to show in the menu
     */
    showMenuItem( menuItem ){
        console.log( 'MHL 302a showMenuItem: ', menuItem );
        this.visibleMenuArray[this.getIndexByKey( menuItem )] = true;
        this.updateVisibleMenu();
        console.log( 'MHL 302b showMenuItem: ', menuItem );
    }

    /**
     * A list of Items (by "key") to show in the MainTopMenu
     * All other options will not appear in the menu
     *
     * @param menuItems
     */
  //  showOnlyMenuItems( menuItems: [] ){
    showOnlyMenuItems( menuItems ){
        this.hideAllMenuItems();
        for( let i = 0; i < menuItems.length; i++ ){
            this.visibleMenuArray[this.getIndexByKey( menuItems[i] )] = true;
        }
        this.updateVisibleMenu();
    }

    /**
     *
     * @param menuItem
     */
    showOnlyMenuItem( menuItem ){
        let temp = [menuItem];
        this.showOnlyMenuItems( temp );
    }


    /**
     * Remove an item from the Main Top Menu
     *
     * @param menuItem The "key" of the Main Menu item to be removed from the menu
     */
    hideMenuItem( menuItem ){
        this.visibleMenuArray[this.getIndexByKey( menuItem )] = false;
        this.updateVisibleMenu();
    }

    /**
     * Set all the Main Top Menu enabled and NOT visible
     */
    hideAllMenuItems(){
        for( let i = 0; i < this.topMenuKeysArray.length; i++ ){
            this.enableMenuArray[i] = true;
            this.visibleMenuArray[i] = false;
        }
        this.updateVisibleMenu();
    }

    updateVisibleMenu(){
        this.visibleMenuArrayEmitter.emit( this.visibleMenuArray );
    }

    getVisibleMenuArray(){
        return this.visibleMenuArray;
    }



    /**
     * Passes the new Top Main Menu selection on the Main Display
     *
     * @param ms Top Main Menu selection
     */
    selectMenuItem( ms ){
        this.mainDisplayService.setMenuSelection( ms );
    }


    /**
     * Returns the index of Main Top Menu option by its "key"
     *
     * @param key
     */
    getIndexByKey( key ){
        let n = -1;
        for( n = 0; n < this.topMenuKeysArray.length; n++ ){
            if( key.localeCompare( this.topMenuKeysArray[n] ) === 0 ){
                return n;
            }
        }
        return n;
    }
}
