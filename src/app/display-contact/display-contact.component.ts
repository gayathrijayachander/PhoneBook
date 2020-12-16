import { Component, Input } from '@angular/core';
import data from './data.json';

interface phoneBook {
  firstName: String;
  lastName: String;
  mobile: String;
}

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent {
 
 phoneBookData : phoneBook[] = data;

  getData(){
    this.phoneBookData = data;
  }
  constructor() { }


}
