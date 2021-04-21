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
        this.props.onSubmit(
            this.state.name,
            this.state.number
        )
        // const searchSameName = initialState.contacts
        //     .map((contact) => contact.name)
        //     .includes(this.state.name);

        // if (searchSameName) {
        //     alert(`${this.state.name} is already in contacts`);
        // } else if (this.state.name.length === 0) {
        //     alert("Fields must be filled!");
        // } else {
        //     this.setState((prevState) => ({
        //         contacts: [...prevState.contacts, initialState.contacts],
        //     }));
        // }

        this.reset()
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
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
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
                        // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        // title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
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

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsActions.addContacts(name, number))
})

export default connect(null, mapDispatchToProps)(ContactForm)