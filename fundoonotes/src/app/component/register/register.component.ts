import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName=new FormControl('',Validators.required);
  constructor() { }

  ngOnInit() {
  }

  firstNameError(){
    return this.firstName.hasError('required')? 'enter first name':'';
  }
   
}
