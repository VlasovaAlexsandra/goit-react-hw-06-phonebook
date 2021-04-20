import shortid from 'shortid';
import types from './contacts-types'

const addContacts = (name, number) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name: name,
        number: number
    }
})

const deleteContacts = id => ({
    type: types.DELETE,
    payload: id,
})

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value
})

// eslint-disable-next-line
export default { addContacts, deleteContacts, changeFilter }