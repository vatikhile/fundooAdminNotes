import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {UserModel} from '../../core/model/user-model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 login:UserModel=new UserModel();
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }
  emailError() {

    return this.email.hasError('required') ? 'Enter an email' : '';
  }

  passwordError() {
    
    return this.password.hasError('required') ? 'Enter a password' : '';
  }
}
