import css from "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import {Filter} from './Filter/Filter'
import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import {loadPhoneBook, savePhoneBook} from '../service/localstorage'


const App = () => {
   const [contacts, setContacts] = useState(loadPhoneBook());
  const [filter, setFilter] = useState("");
  // const firstRender = useRef(true)
 
  // useEffect(() => {
  //   if (firstRender.current ) {
  //     firstRender.current =  false
  //     return
  //   }
  //   savePhoneBook(contacts)
  // }, [contacts]);

  const  findContact = name => contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

   const addContact = contact => {
     if (findContact(contact.name)) return Notiflix.Notify.failure(`${contact.name} is already in contacts`); 
    return setContacts( prev => {
      return [ ...prev, {id: nanoid(), ...contact }]  
    }) || true
  }
  
  const filterChange = e => setFilter( e.target.value)

  const filterContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const delContact = id => setContacts(prev => prev.filter(contact => contact.id !== id))
  
  return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {contacts && <ContactList contacts={filterContacts()} onDel={delContact}/>}
      </div>
    )

}

export default App