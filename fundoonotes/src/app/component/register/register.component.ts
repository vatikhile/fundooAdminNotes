import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {UserModel} from '../../core/model/user-model'
import {UserServiceService} from '../../core/service/user-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
register:UserModel=new UserModel();
  firstName=new FormControl('',Validators.required);
  lastName=new FormControl('',Validators.required);
  userName=new FormControl('',Validators.required);
  password=new FormControl('',Validators.required);
  confirmPassword=new FormControl('',Validators.required);
  service=new FormControl('',Validators.required);

  constructor(private userService:UserServiceService ,private router:Router,private snackbar:MatSnackBar) 
  { }

  ngOnInit() {

   }

  // classes = [
  //   {
  //     name: 'string',
  //     level: 'string',
  //     code: 'number',
  //     currentLesson: '1'
  //   }]
    
  // checkCurrentLesson1 = function(classes) {
  //   if (classes.currentLesson = 1) { 
  //    return true;
  //   }
  //   else {
  //    return false;
  //   }
  //   };
    
  //   checkCurrentLesson2 = function(classes) {
  //   if (classes.currentLesson = 2) {
  //    return true;
  //   }
  //   else {
  //    return false;
  //   }
  //   };

  firstNameError(){
    return this.firstName.hasError('required')? 'Enter first name':'';
  }
   
  lastNameError(){
    return this.lastName.hasError('required')? 'Enter last name':'';
  }
  userNameError(){
    return this.userName.hasError('required')? 'choose Gmail address':'';
  }
  passwordError(){
    return this.password.hasError('required')? 'Enter a password':'';
  }
  confirmPasswordError(){
    return this.confirmPassword.hasError('required')? 'Enter a password':'';
  }
  serviceError(){
    return this.service.hasError('required')? 'Enter service name':'';
  }


  submit(){
console.log("dataa sucess",this.register);
this.userService.postRequest('user/userSignUp',this.register).subscribe(
data=>{
  console.log("response",data);
  
  this.snackbar.open('register sucessfullly')

},
error=>{
  this.snackbar.open('not register')

}

)


  }
}
