import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactMethods=[
         {id:1, name: 'Email'},
         {id:2, name: 'Phone'}

  ];
   log(x){
     console.log(x);
   }
submit(f){
   console.log(f);
}
 
}
