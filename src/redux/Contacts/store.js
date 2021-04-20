import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './contacts-reducer'

const rootReducer = combineReducers({
    contacts: contactsReducer
})

// const store = createStore(rootReducer, composeWithDevTools())
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development'
})

export default store