import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contactDetails;
  // private firstName : FormControl;
  @ViewChild ('myContactFrom') myContactFrom;

  constructor() {}

  ngOnInit() {
    // Service Call.
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
    ];
    // service call ends.
     this.myContactFrom.controls.firstName.setValue(this.contactDetails[0].firstName);
  }
  index(index, contact) {
    return index + 1;
  }

}
