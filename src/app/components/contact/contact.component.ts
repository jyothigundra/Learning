import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contactDetails;

  constructor() { }

  ngOnInit() {
    this.contactDetails = [{
      'firstName': 'Rama',
      'secondName': 'Jyothi',
      'dob': '20/06/91',
      'age': '25'
    },
    {
      'firstName': 'Mohan',
      'secondName': 'Jyothi',
      'dob': '20/06/91',
      'age': '25'
    },
    {
      'firstName': 'Reddy',
      'secondName': 'Jyothi',
      'dob': '20/06/91',
      'age': '25'
    },
    {
      'firstName': 'Jo',
      'secondName': 'Jyothi',
      'dob': '20/06/91',
      'age': '25'
    }
    ]
  }
  index(index, contact) {
    return index + 1;
  }
}
