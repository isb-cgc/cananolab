import { Component, OnInit } from '@angular/core';
import { TopMainMenuService, TopMenuItems } from '../../top-main-menu/top-main-menu.service';

@Component( {
    selector: 'canano-workflow',
    templateUrl: './workflow.component.html',
    styleUrls: ['./workflow.component.scss']
} )
export class WorkflowComponent implements OnInit{
    // For HTML access
    topMenuItems = TopMenuItems;

    constructor( private topMainMenuService: TopMainMenuService ){
    }

    ngOnInit(): void{
    }

    onAreaClick( selection ){
        console.log( 'MHL onAreaClick selection: ', selection );

        switch( selection ){
            case '#/login':
                this.topMainMenuService.selectMenuItem( 'Home' );
                break;
            case '#/submitProtocol':
                this.topMainMenuService.selectMenuItem( '<PLACE HOLDER>' );
                break;
            default:
                alert( 'Place holder for ' + selection )
                break;
        }
    }

}
