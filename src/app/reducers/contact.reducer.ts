import { ContactActionTypes, ContactActions } from '../actions/contact.actions';
import { Contact } from '../models/contact.model'

const defaultState: Contact[] = [
    {
        id: 1,
        name: "Shaneal Prasad",
        email: "shanealprasadsp@gmail.com",
        phone: 5624577151,
        street: "13628 Placid Dr.",
        city: "whittier",
        state: "CA",
        zip: "90605",
        favorite: false
    },
    {
        id: 2,
        name: "Ashneal Prasad",
        email: "shanealprasadsp@gmail.com",
        phone: 5624577151,
        street: "13628 Placid Dr.",
        city: "whittier",
        state: "CA",
        zip: "90605",
        favorite: false
    },
    {
        id: 3,
        name: "Sanya Prasad",
        email: "shanealprasadsp@gmail.com",
        phone: 5624577151,
        street: "13628 Placid Dr.",
        city: "whittier",
        state: "CA",
        zip: "90605",
        favorite: false
    },
]


export function ContactReducer(state: Array<Contact> = defaultState, action: ContactActions) {

    switch(action.type) {
        case ContactActionTypes.ADD_CONTACT:
            return [...state, action.payload]
        case ContactActionTypes.EDIT_CONTACT:
            return state
        case ContactActionTypes.DELETE_CONTACT:
            state = state.filter(idx => idx.id !== action.payload.id);
            return state
        default:
            return state;
    }
}