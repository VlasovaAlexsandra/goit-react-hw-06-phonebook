import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import types from './contacts-types'

const addContacts = createAction('contacts/add', (name, number) => {
    return {
        payload: {
            id: shortid.generate(),
            name: name,
            number: number
        }
    }
})

// const addContacts = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name: name,
//         number: number
//     }
// })

const deleteContacts = createAction('contacts/delete')

// const deleteContacts = id => ({
//     type: types.DELETE,
//     payload: id,
// })

const changeFilter = createAction('contacts/changeFilter')

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// })

// eslint-disable-next-line
export default { addContacts, deleteContacts, changeFilter }