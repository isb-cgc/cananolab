import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../common/services/api.service';
import { StatusDisplayService } from '../../../../../status-display/status-display.service';
import { Router } from '@angular/router';
import {Properties} from "../../../../../../../assets/properties";
@Component( {
    selector: 'canano-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
} )
export class LoginComponent implements OnInit{

    helpUrl = 'https://wiki.nci.nih.gov/x/BoIyHg'
    toolHeadingName = 'Log into caNanoLab'
    user = '';
    password = '';
    email = '';
    homePage = true;
    loaded=false;
    showResetPassword=false;
    constructor( private idleService:IdleService,private router:Router,private apiService: ApiService, private statusDisplayService: StatusDisplayService ){
    }

    ngOnInit(): void {
        if (this.router.url.includes('login')) {
            this.homePage = false;
            this.loaded = true;
        }
    }

    onLoginClick(){
        if(!Properties.LOGGED_IN) {
            this.apiService.authenticateUser( this.user, this.password ).then((user) => {
                    this.statusDisplayService.updateUser( user );
                    this.idleService.startTimer();
                    this.router.navigateByUrl('home');
                },
                // ERROR
                ( err ) => {
                    console.log(err);
                    this.statusDisplayService.updateUser( "guest" );
                }
            );
        } else {
            console.log("User is already logged in!");
            this.router.navigateByUrl('home');
        }
    }

    toggleResetPassword() {
        this.showResetPassword=!this.showResetPassword;
        return false;
    }

    onResetClick() {
        this.apiService.resetUserPassword(this.email);
        this.idleService.startTimer();
        console.log(this.email);
    }
}
