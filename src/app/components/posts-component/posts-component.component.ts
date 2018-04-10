import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {
  posts: any;

  constructor(http: HttpClient) { 
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response =>{
      this.posts = response;
    });
  } 
  
}
