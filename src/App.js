import React, { Component } from 'react';
import ContactForm from './components/Form/ContactForm/ContactForm';
import Filter from './components/Form/Filter/Filter';
import ContactList from './components/Form/ContactList/ContactList';
import './App.css'
// import initialContacts from './contacts.json';

class App extends Component {

  render() {

    return (
      <>
        <h1 className="Title">Phonebook</h1>
        <ContactForm />
        <h2 className="Title">Contacts</h2>
        <Filter />
        <ContactList />
      </>

    )
  }
}

export default App;
