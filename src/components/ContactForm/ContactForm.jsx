import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const setState = {
    name: setName,
    number: setNumber
  }

  const handleChange = e => {
        const { name, value } = e.target;
        setState[name](value);
  }

  const reset= ()=> {
    setName("")
    setNumber("")
  }
  
  const handleSubmit = e => {
        e.preventDefault()
        if (!onSubmit({name, number })) return
        reset()
  }
  
   return (
          <form onSubmit={handleSubmit} className={css["contact-form"]}>
            <label className={css["contact-label"]}>
              Name    
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
                className={css["contact-input"]}
              />
            </label>
            <label className={css["contact-label"]}>
              Number    
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
                className={css["contact-input"]}
              />
            </label>
            <button type="submit" className={css["contact-btn"]}>Add contact</button>
          </form>  
        )
}
