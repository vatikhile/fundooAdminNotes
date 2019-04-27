import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component'
import {ResetPasswordComponent} from './component/reset-password/reset-password.component'
import {ForgotComponent}  from './component/forgot/forgot.component'
const routes: Routes = [
  { path: '',
  component:LoginComponent
 },
 { path: 'register',
 component:RegisterComponent
},{
  path: 'reset-password',
  component:ResetPasswordComponent

},
{
  path: 'forgot',
  component:ForgotComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
