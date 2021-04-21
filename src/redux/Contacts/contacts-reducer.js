import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux"
// import types from './contacts-types'
import contactsActions from './contacts-actions'

const items = createReducer([], {
    [contactsActions.addContacts]: (state, { payload }) => [...state, payload],
    [contactsActions.deleteContacts]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload)

})

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload]

//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload)

//         default:
//             return state
//     }
// }

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload
})

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case [contactsActions.changeFilter]:
//             return payload;

//         default:
//             return state
//     }
// }

export default combineReducers({ items, filter })