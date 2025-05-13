import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Consts } from '../../../constants';
import { ApiService } from '../../common/services/api.service';


@Component({
  selector: 'canano-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  newPwd = "";
  confirmPwd = "";
  isPwdMatch = false;
  hasNumber = false;
  hasLowercase = false;
  hasUppercase = false;
  isGoodLength = false;
  hasSpecialChar = false;
  allValidationPassed = false;
  isPrivilegeUser = false;
  minCharCount = 16;
  token = "";
  message="";
  errorMessage = "";
  errors = {};

  constructor(private apiService: ApiService, private activatedRoute:ActivatedRoute,private router:Router,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.token = params.token;

        let url = this.apiService.doGet(Consts.QUERY_RESET_PASSWORD_ACCOUNT_TYPE, 'token=' + this.token);
        url.subscribe(
            data => {
              this.isPrivilegeUser = data['isPrivilegeUser'];
              this.minCharCount = this.isPrivilegeUser ? 15 : 8;
            },
            error => {
              this.errors = error;
            }
        );
      }
    );
  }

  onCancelClick(): void {
    console.log("Redirecting to home page...");
    this.router.navigate(['']);
  }

  onChangePasswordClick(): void {
    this.checkAllValidations();
    if (this.allValidationPassed) {
      this.saveResetUserPassword(this.token, this.newPwd);
      console.log("Send password!!");
    } else {
      console.log("Password not ready??");
    }
  }

  onNewPwdChanged(newValue): void {
    this.newPwd = newValue;
    this.checkAllValidations();
  }

  onConfirmPwdChanged(newValue): void {
    this.confirmPwd = newValue;
    this.checkAllValidations();
  }

  checkAllValidations(): void {
    this.isPwdMatch = (this.newPwd === this.confirmPwd) && this.newPwd != "";
    this.hasNumber = this.checkValidations(this.newPwd, 'number');
    this.hasLowercase = this.checkValidations(this.newPwd, 'lowercase');
    this.hasUppercase = this.checkValidations(this.newPwd, 'uppercase');
    this.isGoodLength = this.checkValidations(this.newPwd, 'length');
    this.hasSpecialChar = this.checkValidations(this.newPwd, 'special-character');
    this.allValidationPassed = this.isPwdMatch && this.hasNumber && this.hasLowercase
      && this.hasUppercase && this.isGoodLength && this.hasSpecialChar;
  }

  checkValidations(value, type) {
    switch (type) {
      case 'special-character':
        return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);;
      case 'number':
        return /\d/.test(value);
      case 'lowercase':
        return /[a-z]/.test(value);
      case 'uppercase':
        return /[A-Z]/.test(value);
      case 'length':
        return value.length >= this.minCharCount && value.length <= 32;
      default:
        return false
    }
  }

  saveResetUserPassword(token, newPwd) {
    var resetData = {
      'token': this.token,
      'newpassword': this.newPwd
    }

    let params =[];
    Object.keys(resetData).forEach(key=> {
      params.push(key+'=' + resetData[key])
    })

    let headers = new HttpHeaders( {
      'Content-Type': 'application/x-www-form-urlencoded',
      } );
    let options={
      headers:headers,
      method:'post',
    }
    this.httpClient.post(Consts.SAVE_RESET_PASSWORD_URL, params.join('&'), options).subscribe(data=> {
      console.log("'Password Reset Successfully");
      this.message='Password Reset Successfully';
      this.router.navigate(['']);
    },
    errors=> {
      if (errors.error.text=='success') {
        this.errors={};
        this.message='Password Reset Successfully'
      }
      else {
        this.errorMessage=errors.error;
        this.errors=errors;
      }
    })
  }

}
