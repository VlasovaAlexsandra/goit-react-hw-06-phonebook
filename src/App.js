import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/Form/ContactForm/ContactForm';
import Filter from './components/Form/Filter/Filter';
import ContactList from './components/Form/ContactList/ContactList';
import initialContacts from './contacts.json';
import './App.css'
// import PropTypes from 'prop-types';



class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(contacts)
    if (parseContacts) {
      this.setState({ contacts: parseContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = (contacts) => {
    // console.log(contact)
    const contact = {
      ...contacts,
      id: shortid.generate()
    }
    const searchSameName = this.state.contacts
      .map((contact) => contact.name)
      .includes(contact.name);

    if (searchSameName) {
      alert(`${contact.name} is already in contacts`);
    } else if (contact.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1 className="Title">Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />
        <h2 className="Title">Contacts</h2>
        <Filter
          value={filter}
          onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>

    )
  }
}

export default App;
