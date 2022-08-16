import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent implements OnInit {

  constructor() { 
    console.log("User Form Validation Module Lazy loaded");
  }

  ngOnInit(): void {
 
  }
  
  submit(data:any){
    console.log(data);
   }
}
