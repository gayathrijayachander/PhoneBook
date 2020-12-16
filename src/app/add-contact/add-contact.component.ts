import { Component, OnInit } from '@angular/core';
import data from '../display-contact/data.json';
import {DisplayContactComponent} from '../display-contact/display-contact.component';

interface phoneBook {
  firstName: String;
  lastName: String;
  mobile: String;
}

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
 
  fname: String= "";
  lname: String="";
  mobile:string="";
  phoneBookData : phoneBook[] = data;
  constructor() { }

  ngOnInit(): void {
  }
 f_name(event : any)
 { this.fname = event.target.value;}
 l_name(event: any)
 {
  this.lname = event.target.value
 }
 mobileNo(event: any)
 {
  this.mobile = event.target.value
 }
 public add(){
   if(this.f_name != null  && this.mobile !=null)
   {
    this.phoneBookData.push({ "firstName": this.fname,
    "lastName": this.lname,
    "mobile": this.mobile});    
    
   }
 }
}
