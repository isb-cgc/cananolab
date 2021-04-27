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

            if( i === this.topMenuKeysArray.length - 3){
                this.disableMenuItem(this.topMenuKeysArray[i]);
            }
        }

        console.log('MHL CALLING updateEnableMenu from TopMainMenuService');
        this.updateEnableMenu();
        this.updateVisibleMenu();
    }

    updateEnableMenu(){
        console.log('MHL TopMainMenuService.updateEnableMenu: ', this.enableMenuArray);
        this.enableTopMenuArrayEmitter.emit( this.enableMenuArray );
    }

    getEnableMenuArray(){
        return this.enableMenuArray;
    }

    updateVisibleMenu(){
        this.visibleMenuArrayEmitter.emit( this.visibleMenuArray );
    }
    getVisibleMenuArray(){
        return this.visibleMenuArray;
    }



    /**
     * Enable an option in the Main Top Menu
     *
     * @param menuItem The "key" of the Main Top Menu option to enable
     */
    enableMenuItem( menuItem ){
      console.log('MHL 300 enableMenuItem: ', menuItem);
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
        console.log('MHL 301a disableMenuItem[' + this.getIndexByKey( menuItem ) + ']: ', menuItem);
        this.enableMenuArray[this.getIndexByKey( menuItem )] = false;
        this.updateEnableMenu();
    }

    /**
     * Make an item visible in the Main Top Menu
     *
     * @param menuItem The "key" of the Main Menu item to show in the menu
     */
    showMenuItem( menuItem ){
        console.log('MHL 302 showMenuItem: ', menuItem);
        this.visibleMenuArray[this.getIndexByKey( menuItem )] = true;
        this.updateVisibleMenu();
    }

    /**
     * A list of Items (by "key") to show in the MainTopMenu
     * All other options will not appear in the menu
     *
     * @param menuItems
     */
    showOnlyMenuItems( menuItems: [] ){
        console.log('MHL 303 showOnlyMenuItems: ', menuItems);
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
        console.log('MHL 304 showOnlyMenuItem: ', menuItem);
        this.hideAllMenuItems();
        this.showMenuItem( menuItem );
        this.updateVisibleMenu();
    }


    /**
     * Remove an item from the Main Top Menu
     *
     * @param menuItem The "key" of the Main Menu item to be removed from the menu
     */
    hideMenuItem( menuItem ){
        console.log('MHL 305 hideMenuItem: ', menuItem);
        this.visibleMenuArray[this.getIndexByKey( menuItem )] = false;
        this.updateVisibleMenu();
    }

    /**
     * Set all the Main Top Menu enabled and NOT visible
     */
    hideAllMenuItems(){
        console.log('MHL 306 hideAllMenuItems: ');
        for( let i = 0; i < this.topMenuKeysArray.length; i++ ){
            this.enableMenuArray[i] = true;
            this.visibleMenuArray[i] = false;
        }
        this.updateVisibleMenu();

    }

    /**
     * Passes the new Top Main Menu selection on the Main Display
     *
     * @param ms Top Main Menu selection
     */
    selectMenuItem( ms ){
        console.log( 'MHL selectMenuItem: ', ms );
        this.mainDisplayService.setMenuSelection( ms );
    }

    /**
     * Returns the index of Main Top Menu option by its "key"
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
