import PropTypes from "prop-types";
import './ContactList.css'

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className="TaskList"> {contacts.map(({ id, name, number }) => (
        <li className="TaskList_item" key={id}>
            <p className="TaskList_text">{name}: {number}</p>
            <button
                className="TaskList_button"
                type="button"
                onClick={() => onDeleteContact(id)}
            >Delete</button>
        </li>
    ))}
    </ul>
)

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}

export default ContactList;