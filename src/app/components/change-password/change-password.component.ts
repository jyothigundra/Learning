import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidator } from './password.validators'

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.form= fb.group({
        oldPassword:['',Validators.required,PasswordValidator.validOldPassword],
        newPassword:['',Validators.required],
        confirmPassword:['',Validators.required]
    }, {
    validator:PasswordValidator.passwordmatchvalidator
  });
   }
   get oldPassword(){
     return this.form.get('oldPassword');
   }
   get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }


  
}
