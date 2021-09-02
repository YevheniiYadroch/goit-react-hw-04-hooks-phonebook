import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm ({onChange}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleFormReset = () => {
        setName('');
        setNumber('');
  }

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        if (name === 'name') {
            setName(value)
        }
        if (name === 'number') {
            setNumber(value)
        }
    }

        return (
            <form className="ContactForm" onReset={handleFormReset} onSubmit={onChange}>
                <label htmlFor="name" className="ContactForm__name">Name</label>
                <input
                    className="ContactForm__input"
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                />
                <label htmlFor="number" className="ContactForm__number">
                    Number
                </label>
                <input
                    className="ContactForm__input"
                    value={number}
                    type="tel"
                    name="number"
                    id="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleChange}
                />
                <button type="submit"  className="ContactForm__button">Add contact</button>
            </form>
        )
    
}

export default ContactForm;