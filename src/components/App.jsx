import { Notiflix } from './Notiflix/Notiflix';
import { nanoid } from 'nanoid';

import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section, Title, SubTitle } from './App.style';
import { Message } from './Notiflix/Message';
import Inputmask from 'inputmask';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38 (045) 912-56-33' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38 (050) 443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38 (095) 645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38 (050) 227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('Contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }

    const inputs = document.querySelector('input[type=tel]');
    let im = new Inputmask('+38 (099) 999-99-99');
    im.mask(inputs);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contact, actions) => {
    const contactCheck = this.state.contacts.find(
      cont =>
        cont.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase() ||
        cont.number === contact.number
    );

    if (contactCheck === undefined) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      }));
      actions.resetForm();
      Notiflix.Notify.success(`${contact.name}  add to contacts`);
    } else if (contactCheck.name === contact.name) {
      return Notiflix.Notify.warning(`${contact.name}  is already in contacts`);
    } else if (contactCheck.number === contact.number) {
      return Notiflix.Notify.warning(
        `The number ${contact.number}  is already in contacts ${contactCheck.name}`
      );
    }
  };

  searchFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteContact = (contactId, name) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
    Notiflix.Notify.warning(`${name}  deleted from contacts`);
  };

  render() {
    const { contacts, filter } = this.state;

    const filterContact = contacts.filter(({ name, number }) => {
      if (filter.length > 0) {
        return (
          name.toLowerCase().includes(filter.toLowerCase()) ||
          number.replace(/\D/g, '').includes(filter)
        );
      }

      return contacts;
    });

    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <SubTitle>Contacts</SubTitle>
        <Filter
          filter={this.state.filter}
          onSearchContact={this.searchFilter}
        />

        {contacts.length === 0 ? (
          <Message info={'No contacts add a contact'} />
        ) : (
          <>
            {filterContact.length === 0 && (
              <Message info={'contact not found'} contact={filter} />
            )}
            <ContactList
              contacts={filterContact}
              OnDeleteContact={this.deleteContact}
            />
          </>
        )}
      </Section>
    );
  }
}
