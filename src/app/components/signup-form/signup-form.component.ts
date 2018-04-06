import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
 form = new FormGroup({
   username: new FormControl('', [
                      Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.cannotContainSpace]),
   password: new FormControl('', Validators.required)
 } );
 get username(){
   return this.form.get('username');
 }
 login(){
   this.form.setErrors({
     invalidLogin: true
   });
 }
  constructor() { }

  ngOnInit() {
  }

}
