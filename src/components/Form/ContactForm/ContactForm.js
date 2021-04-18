import { Component } from "react";
import PropTypes from "prop-types";
import shortid from 'shortid';
import './ContactForm.css';

const initialState = {
    name: '',
    number: ''
}

class ContactForm extends Component {
    state = {
        ...initialState
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
        this.props.onSubmit({ ...this.state })
        this.reset()
    }

    reset = () => {
        this.setState({ ...initialState })
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

export default ContactForm;