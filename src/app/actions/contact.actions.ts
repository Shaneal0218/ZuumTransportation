import { Action } from '@ngrx/store';
import { Contact } from '../models/contact.model'; 

export enum ContactActionTypes {
    ADD_CONTACT = '[CONTACT] Add Item',
    EDIT_CONTACT = '[CONTACT] Edit Item',
    DELETE_CONTACT = '[CONTACT] Delete Item'
}


export class AddContact implements Action {
    readonly type = ContactActionTypes.ADD_CONTACT;

    constructor(public payload: any) {}
}

export class EditContact implements Action {
    readonly type = ContactActionTypes.EDIT_CONTACT;

    constructor(public payload: any) {}
}

export class DeleteContact implements Action {
    readonly type = ContactActionTypes.DELETE_CONTACT;

    constructor(public payload: Contact) {}
}

export type ContactActions = AddContact | EditContact | DeleteContact