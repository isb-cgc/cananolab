import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Consts } from '../../constants';
import { ApiService } from '../common/services/api.service';
import { Properties } from '../../../assets/properties';
import { Router } from '@angular/router';
@Injectable( {
    providedIn: 'root'
} )
export class StatusDisplayService{

    updateUserEmitter = new BehaviorSubject("guest");
    updateGroupEmitter = new BehaviorSubject<Object>({ 'anonymousUser': ['Public'] });
    user = '';
    groups = [];

    constructor( private router:Router, private apiService: ApiService ){
    }

    getUser(){
        return this.user;
    }

    isEditUrl() {
        console.log(this.router.url)
        return !this.router.url.includes('view');
    }

    updateUser( user ){
        console.log("Saw update user: "+user);
        this.user = user;
        this.updateUserGroups();
        this.updateUserEmitter.next( user );
    }

    updateUserGroups(){
        setTimeout(()=> {
        //  this.apiService.doPost( Consts.QUERY_SEARCH, 'keyword=' + this.topKeyWordSearchText ).subscribe(
            this.apiService.doGet( Consts.QUERY_GET_USER_GROUPS, '' ).subscribe(
                data => {
                    console.log("User groups response:");
                    console.log(data);
                    this.updateGroupEmitter.next(data)
                },
                ( err ) => {
                    console.log( 'ERROR getUserGroups: ', err );
                } );
        },200)
    }

}
