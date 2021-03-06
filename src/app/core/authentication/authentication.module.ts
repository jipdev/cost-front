import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AuthenticationRouting } from "./authentication.routing";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EqualPasswordValidator } from './validators/equal-password.validator';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    EqualPasswordValidator
  ],
  imports: [
    CommonModule,
    AuthenticationRouting,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthenticationModule { }
