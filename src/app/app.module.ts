import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    SearchContactComponent,
    DisplayContactComponent, 

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
