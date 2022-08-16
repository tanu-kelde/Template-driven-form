import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormValidationRoutingModule } from './user-form-validation-routing.module';
import { UserFormValidationComponent } from './user-form-validation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserFormValidationComponent
  ],
  imports: [
    CommonModule,
    UserFormValidationRoutingModule,
    FormsModule
  ]
})
export class UserFormValidationModule { }
