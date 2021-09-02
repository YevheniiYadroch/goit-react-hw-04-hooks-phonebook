import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import './App.css';

function App () {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('')
  

  const formChangeHandle = e => {
    e.preventDefault();
    const form = e.target;
    if (contacts.some(item => item.name === e.target.children.name.value)) {
      alert(`${e.target.children.name.value} is already in contacts`);
      return form.reset();
    }
    setContacts(prevState => [...prevState, { id: uuidv4(), name: e.target.children.name.value, number: e.target.children.number.value }])
    form.reset();
  }

  const searchHandle = e => {
    setFilter(e.currentTarget.value)
  }

  const onDelete = e => {
    setContacts(prevValue => [...prevValue.filter(item => item.id !== e.target.dataset.id)])
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  useEffect(() => {
      setContacts(JSON.parse(localStorage.getItem('contacts')))
  }, [])

  return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onChange={formChangeHandle}/>
        <h2>Contacts</h2>
        <Filter onChange={searchHandle}/>
        <ContactList contacts={contacts} filter={filter} onDelete={onDelete}/>
      </div>
    )
}

export default App;
