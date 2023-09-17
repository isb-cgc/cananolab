import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../common/services/api.service';
import { StatusDisplayService } from '../../../../../status-display/status-display.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Properties} from "../../../../../../../assets/properties";
import { Consts } from '../../../../../../constants';

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
    currentlyResettingUserPassword = false;
    infoMessage = "";
    errorMessage = "";

    constructor(private activatedRoute:ActivatedRoute,private router:Router,private apiService: ApiService, private statusDisplayService: StatusDisplayService ){
    }

    ngOnInit(): void {
        if (this.router.url.includes('login')) {
            this.homePage = false;
            this.loaded = true;
        }

        this.activatedRoute.queryParams
          .subscribe(params => {
            this.infoMessage = params.infoMessage;
            this.errorMessage = params.errorMessage;
          }
        );
    }

    onLoginClick(){
        this.clearMessages();
        if(!Properties.LOGGED_IN) {
            this.apiService.authenticateUser( this.user, this.password ).then((user) => {
                    this.statusDisplayService.updateUser( user );
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
        this.clearMessages();
        return false;
    }

    clearMessages() {
        this.errorMessage = "";
        this.infoMessage = "";
    }

    onResetClick() {
        this.clearMessages();
        this.resetUserPassword(this.email);
        console.log(this.email);
    }

    resetUserPassword(email) {
        if (this.currentlyResettingUserPassword) {
            return;
        }

        if (email.length == 0) {
            return;
        }
        
        this.currentlyResettingUserPassword = true;

        let get_url = Properties.API_SERVER_URL + '/' + Consts.RESET_PASSWORD_URL;
        get_url = get_url.replace(/(?<!:)\/+/g, "/");
        get_url += '?email=' + encodeURI(email);

        var url = this.apiService.doGet(Consts.RESET_PASSWORD_URL, 'email=' + email);
        url.subscribe(data => {
            this.infoMessage = "An email has been sent. Please follow the instructions to reset your password.";
            this.currentlyResettingUserPassword = false;
        },
        error => {
            this.errorMessage = error.error;
            this.currentlyResettingUserPassword = false;
        })
    }
}
