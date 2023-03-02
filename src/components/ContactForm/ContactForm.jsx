import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
import Button from 'components/Button';
import s from './ContactForm.module.css';

import {
  checkNameInPhonebook,
  formatUserTel,
} from 'components/utils/addContactsUtils';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import { fetchAddContacts } from 'redux/contacts/contactsOperations';

const ContactForm = () => {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const onFormSabmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value.toLowerCase();
    const phone = formatUserTel(e.currentTarget.number.value);

    if (checkNameInPhonebook(name, contacts)) return;

    dispatch(fetchAddContacts({ name, phone }));

    e.currentTarget.reset();
  };

  return (
    <form className={s.form} autoComplete="off" onSubmit={onFormSabmit}>
      <label className={s.label} htmlFor="contactsName">
        Name
      </label>
      <input
        className={s.input}
        id="contactsName"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={s.label} htmlFor="contactsTel">
        Number
      </label>
      <input
        className={s.input}
        id="contactsTel"
        type="tel"
        name="number"
        pattern="\d*"
        title="The phone number must be ten digits. e.g. 0970066415"
        minLength="10"
        maxLength="10"
        required
      />

      <Button text="Add contact" type="submit" />
    </form>
  );
};

export default ContactForm;
