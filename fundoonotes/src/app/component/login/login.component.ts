import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email=new  FormControl('',Validators.required);

  constructor() { }

  ngOnInit() {
  }
emailError()
{

  return this.email.hasError('required')? 'Enter an email or phone number':'';
}

}
