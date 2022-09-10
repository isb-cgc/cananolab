import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { Consts } from '../../../constants';
import { Properties } from '../../../../assets/properties';
import { StatusDisplayService } from '../../status-display/status-display.service';
import { Router } from '@angular/router';
import { UtilService } from '../../common/services/util.service';
import { TopMainMenuService } from '../../top-main-menu/top-main-menu.service';
import { IdleService } from '../../common/components/idle/idle.service';
@Component({
  selector: 'canano-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
    properties=Properties;

    constructor( private idleService:IdleService,private topMainMenuService:TopMainMenuService,private apiService: ApiService, private statusDisplayService: StatusDisplayService,
                 private router: Router, private utilService: UtilService ){
    }

    ngOnInit(): void {
        this.logOut();
        this.properties['LOGGED_IN'] = false;
        this.properties['logged_in'] = false;
        this.topMainMenuService.showOnlyMenuItems([
            'HOME','HELP','GLOSSARY','PROTOCOLS','SAMPLES','PUBLICATIONS','LOGIN'
        ])
        this.router.navigate( [this.utilService.getRouteByName( 'HOME' )] );
    }

    logOut() {
        this.apiService.doPost( Consts.QUERY_LOGOUT, '' ).subscribe(
            data => {
                Properties.LOGGED_IN = false;
                Properties.logged_in = false;
                this.statusDisplayService.updateUser( 'guest' );
            },
            err => {
                this.statusDisplayService.updateUser( 'unknown' ); // CHECKME
                console.error('ERROR doPost Consts.QUERY_LOGOUT: ', err);
            }
        );
        this.idleService.stopTimer();
    }
}
