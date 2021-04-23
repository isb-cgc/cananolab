import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../common/services/api.service';

@Component( {
    selector: 'canano-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
} )
export class LoginComponent implements OnInit{

    user = '';
    password = '';

    constructor( private apiService: ApiService ) {
    }

    ngOnInit(): void {
    }

    onLoginClick() {
      console.log('MHL User: ', this.user);
      console.log('MHL password: ', this.password);

      this.apiService.getAccessTokenFromServer( this.user, this.password)
    }
}
