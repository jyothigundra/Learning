import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
// class level variables.
  private likesCount = 0;
  private isSelected = false;

  // constructor
  constructor() {}

  // Click function.
  onClick() {
    this.isSelected = !this.isSelected;
    this.likesCount += (this.isSelected) ? 1 : -1;
  }
}
