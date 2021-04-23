// ----------------------------------------------------------------------------------------
// ---------------------              "Top Main Menu"              ------------------------
// ---------------------     The Top menu just below the header    ------------------------
// ----------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { TopMainMenuService, TopMenuItems } from './top-main-menu.service';
import { UtilService } from '../common/services/util.service';

@Component({
  selector: 'canano-top-main-menu',
  templateUrl: './top-main-menu.component.html',
  styleUrls: ['./top-main-menu.component.scss']
})
export class TopMainMenuComponent implements OnInit {

    // For HTML access
    topMenuItems =  TopMenuItems;
    topMenuItemNames = Object.values(TopMenuItems);

    // @CHECKME  Should this be in the Properties file?
    defaultComponent = TopMenuItems.HOME;

  constructor( private topMainMenuService: TopMainMenuService, private utilService: UtilService ) { }

 async ngOnInit() {

     // @FIXME - this is just delay so subscribers are ready - @TODO change this to a "We are initialized" flag
     await this.utilService.sleep( 10 );
     // Activate the default
     this.onMenuSelect( this.defaultComponent);
   }

    /**
     * Called when a Top Main Menu item is selected.
     * It is also call at ngOnInit to prime the default.
     *
     * @param item The "Value" (not the key) of the Main Menu item selected.
     */
    onMenuSelect(item){
        console.log('MHL onMenuSelectonMenuSelect: ', item);
      this.topMainMenuService.selectMenuItem( item );
    }

}
