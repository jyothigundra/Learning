import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {
  posts: any;
  private url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.url).subscribe(response =>{
      this.posts = response;
    });
  } 
  createPosts(input :HTMLInputElement){
    let request= {title: input.value };
    input.value='';
      this.http.post(this.url, JSON.stringify(request)).subscribe(response =>{
        request['id']= response['id'];
        this.posts.splice(0,0,request);
        console.log(response);
      })
  }
  updatePost(post){
    this.http.patch(this.url+'/'+post.id,JSON.stringify({isread:true})).subscribe(response=>
    console.log(response));
  }
  
}
