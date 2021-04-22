import { Component } from "react";
import { connect } from 'react-redux'
import contactsActions from '../../../redux/Contacts/contacts-actions'
import PropTypes from "prop-types";
import shortid from 'shortid';
import './ContactForm.css';
// import initialContacts from '../../../contacts.json';

// const initialState = {
//     contacts: initialContacts,
// }

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();
    findInput = shortid.generate();

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.contacts.map(({ name }) => name).includes(this.state.name)) {
            alert(`${this.state.name} is already in contacts`)
            return
        }
        this.props.onSubmit(
            this.state.name,
            this.state.number,
        )
        this.reset()
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }

    render() {
        return (
            <>
                <form className="TaskEditor" onSubmit={this.handleSubmit}>
                    <label className="TaskEditor_label" htmlFor={this.nameInputId}>Name</label>
                    <br />
                    <input
                        className="TaskEditor_input"
                        type="text"
                        value={this.state.name}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleChange}
                        id={this.nameInputId}
                    />
                    <br />
                    <label className="TaskEditor_label" htmlFor={this.numberInputId}>Number</label>
                    <br />
                    <input
                        className="TaskEditor_input"
                        type="text"
                        value={this.state.number}
                        name="number"
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                        onChange={this.handleChange}
                        id={this.numberInputId}
                    />
                    <br />
                    <button className="TaskEditor_button" type="submit">Add contact</button>
                </form>

            </>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return { contacts: state.contacts.items };
};

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsActions.addContacts(name, number))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)