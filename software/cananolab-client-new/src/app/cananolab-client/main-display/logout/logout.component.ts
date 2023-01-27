import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { Consts } from '../../../constants';
import { Properties } from '../../../../assets/properties';
import { StatusDisplayService } from '../../status-display/status-display.service';
import { Router } from '@angular/router';
import { UtilService } from '../../common/services/util.service';
import { TopMainMenuService } from '../../top-main-menu/top-main-menu.service';
@Component({
  selector: 'canano-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
    properties=Properties;

    constructor(private topMainMenuService:TopMainMenuService,private apiService: ApiService, private statusDisplayService: StatusDisplayService,
                 private router: Router, private utilService: UtilService ){
    }

    ngOnInit(): void {
        if(Properties.LOGGED_IN) {
            if(!Properties.LOGGING_OUT) {
                Properties.LOGGING_OUT = true;
                this.logOut();
            } else {
                console.log("Logout process underway already--updating display only.");
            }
        } else {
            console.log("User is already logged out.");
        }

        this.topMainMenuService.showOnlyMenuItems([
            'HOME','HELP','GLOSSARY','PROTOCOLS','SAMPLES','PUBLICATIONS','LOGIN'
        ])
        this.router.navigate( [this.utilService.getRouteByName( 'HOME' )] );
    }

    logOut() {
        this.apiService.doPost( Consts.QUERY_LOGOUT, '' ).subscribe(
            data => {
                console.log("User logged out.");
                Properties.LOGGED_IN = false;
                Properties.logged_in = false;
                this.statusDisplayService.updateUser( 'guest' );
                Properties.LOGGING_OUT = false;
            },
            err => {
                this.statusDisplayService.updateUser( 'unknown' ); // CHECKME
                console.log('ERROR doPost Consts.QUERY_LOGOUT: ');
                console.log(err);
                Properties.LOGGING_OUT = false;
            }
        );
    }
}
