import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model'
import * as ContactActions from '../../actions/contact.actions'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  contacts$: Observable<Contact[]>

  constructor(private store: Store<Contact[]>) {
    this.contacts$ = this.store.select("contact");
  }

  spanishMessage() {
    this.store.dispatch({type: "SPANISH"})
  }

  frenchMessage() {
    this.store.dispatch({type: "FRENCH"})
  }

}
