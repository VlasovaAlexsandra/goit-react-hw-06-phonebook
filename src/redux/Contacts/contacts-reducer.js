import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux"
import contactsActions from './contacts-actions'

const items = createReducer([], {
    [contactsActions.addContacts]: (state, { payload }) => [...state, payload],
    [contactsActions.deleteContacts]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload)

})

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload
})

export default combineReducers({ items, filter })