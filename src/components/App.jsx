import { Notiflix } from './Notiflix/Notiflix';
import { nanoid } from 'nanoid';

import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section, Title, SubTitle } from './App.style';
import { Message } from './Notiflix/Message';
import Inputmask from 'inputmask';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('Contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38 (045) 912-56-33' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38 (050) 443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38 (095) 645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38 (050) 227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('Conttscts use Effect');
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const inputs = document.querySelector('input[type=tel]');
    let im = new Inputmask('+38 (099) 999-99-99');
    im.mask(inputs);
  }, []);

  const addContact = (contact, actions) => {
    const contactCheck = contacts.find(
      cont =>
        cont.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase() ||
        cont.number === contact.number
    );

    if (contactCheck === undefined) {
      setContacts(prevState => [...prevState, { ...contact, id: nanoid() }]);

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

  const searchFilter = newFilter => {
    setFilter(newFilter);
  };

  const deleteContact = (contactId, name) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));

    Notiflix.Notify.warning(`${name}  deleted from contacts`);
  };

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
      <ContactForm onSubmit={addContact} />

      <SubTitle>Contacts</SubTitle>
      <Filter filter={filter} onSearchContact={searchFilter} />

      {contacts.length === 0 ? (
        <Message info={'No contacts add a contact'} />
      ) : (
        <>
          {filterContact.length === 0 && (
            <Message info={'contact not found'} contact={filter} />
          )}
          <ContactList
            contacts={filterContact}
            OnDeleteContact={deleteContact}
          />
        </>
      )}
    </Section>
  );
};
