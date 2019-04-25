import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {MatButtonModule, MatCheckboxModule}from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ForgotComponent } from './component/forgot/forgot.component';  
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './component/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [   
    AppComponent,
    LoginComponent,
   ResetPasswordComponent,
    ForgotComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
