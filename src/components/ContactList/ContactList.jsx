import css from './ContactList.module.css'
import { ContactItem } from '../ContactItem/ContactItem';

import { useSelector } from "react-redux";
import { getContacts, getFilter } from 'redux/selectors';

const filterContacts = (contacts, filter) => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = filterContacts(contacts, filter)
    return (
    <>
        {visibleContacts && 
        <ul className={css.list}>
            {visibleContacts.map(({id, name, number }) => {
                return <ContactItem key={id} id={id} name={name} number={number} />
            })}
        </ul >
            }
    </>
    )
    
}


