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

    user = '';
    password = '';
    homePage = true;
    loaded=false;
    constructor( private router:Router,private apiService: ApiService, private statusDisplayService: StatusDisplayService ){
    }

    ngOnInit(): void{
        if (this.router.url.includes('login'))
        {
            this.homePage=false;
            this.loaded=true;
        }
    }

    onLoginClick(){
        this.apiService.authenticateUser( this.user, this.password ).then((user) => {
            this.statusDisplayService.updateUser( user );
            this.router.navigateByUrl('home');
        },
        // ERROR
        ( err ) => {
            console.log(err);
            this.statusDisplayService.updateUser( "guest" );
        });
    }
}
