import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormValidationComponent } from './user-form-validation.component';

const routes: Routes = [
  {  
   path:"",
   component:UserFormValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormValidationRoutingModule { }
