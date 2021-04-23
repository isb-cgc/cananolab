import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

    // Defaults if no height and width are provided.
    newWindowHeight = 800;
    newWindowWidth = 800;

  constructor() { }

    openWindow( pageURL, name, width = this.newWindowWidth, height  = this.newWindowHeight) {
        window.open( pageURL, name, 'alwaysRaised,dependent,toolbar,status,scrollbars,resizable,width=' + width + ',height=' + height );
    }


    isNullOrUndefined( v ): boolean {
        let res = false;
        if( v == null ){
            res = true;
        }
        if( v === null ){
            res = true;
        }
        if( typeof v === 'undefined' ){
            res = true;
        }
        return res;
    }
    sleep( ms ) {
        return new Promise( resolve => setTimeout( resolve, ms ) );
    }

}
