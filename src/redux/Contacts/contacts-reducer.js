import { combineReducers } from "redux"
import types from './contacts-types'

const items = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD:
            return [...state, payload]
        default:
            return state
    }
}

const filter = (state = '', action) => {
    return state
}

export default combineReducers({ items, filter })