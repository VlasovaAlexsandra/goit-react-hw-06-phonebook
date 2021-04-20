import shortid from 'shortid';
import types from './contacts-types'

const addContacts = contact => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        contact
    }
})

export default addContacts