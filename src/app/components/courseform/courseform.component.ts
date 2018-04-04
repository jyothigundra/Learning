import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent {
  categoryMethods=[
    {id:1, name: 'Development'},
    {id:2, name: 'Art'},
    {id:3, name: 'Languages'}
  ];
  create(y){
    console.log(y);
  }

 
}
