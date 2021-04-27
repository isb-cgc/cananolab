// ----------------------------------------------------------------------------------------
// ---------------------              "Top Main Menu"              ------------------------
// ---------------------     The Top menu just below the header    ------------------------
// ----------------------------------------------------------------------------------------

import { Component, OnDestroy, OnInit } from '@angular/core';
import { TopMainMenuService, TopMenuItems } from './top-main-menu.service';
import { UtilService } from '../common/services/util.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'canano-top-main-menu',
  templateUrl: './top-main-menu.component.html',
  styleUrls: ['./top-main-menu.component.scss']
})
export class TopMainMenuComponent implements OnInit, OnDestroy {

    // For HTML access
    topMenuItems =  TopMenuItems;
    topMenuItemNames = Object.values(TopMenuItems);
    enableMenuArray = [];
    visibleMenuArray = [];

    // @CHECKME  Should this be in the Properties file?
    defaultComponent = TopMenuItems.HOME;

    private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor( private topMainMenuService: TopMainMenuService, private utilService: UtilService ) { }

 async ngOnInit() {

      console.log('MHL MHL TopMainMenuService got enable items data init');
     this.topMainMenuService.enableTopMenuArrayEmitter.pipe( takeUntil( this.ngUnsubscribe ) ).subscribe(
         ( data ) => {
             console.log('MHL TopMainMenuService got enable items data: ', data );
             this.enableMenuArray = data;
         } );

     this.topMainMenuService.visibleMenuArrayEmitter.pipe( takeUntil( this.ngUnsubscribe ) ).subscribe(
         ( data ) => {
             console.log('MHL TopMainMenuService got visible items data: ', data );
             this.visibleMenuArray = data;
         } );


     // @FIXME - this is just delay so subscribers are ready - @TODO change this to a "We are initialized" flag
     await this.utilService.sleep( 10 );
     // Activate the default
     this.onMenuSelect( this.defaultComponent);

    this.enableMenuArray = this.topMainMenuService.getEnableMenuArray();
    this.visibleMenuArray = this.topMainMenuService.getVisibleMenuArray();
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

    // Avoid memory leak
    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
