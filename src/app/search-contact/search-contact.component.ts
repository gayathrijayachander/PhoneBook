import { Component, OnInit } from '@angular/core';
import data from '../display-contact/data.json';

interface phoneBook {
  firstName: String;
  lastName: String;
  mobile: String;
}

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {

  phoneBookData : phoneBook[] = data;
  searchText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
