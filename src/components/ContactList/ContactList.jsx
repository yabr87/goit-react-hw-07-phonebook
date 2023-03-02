import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button';
import s from './ContactList.module.css';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import {
  fetchAllContacts,
  fetchDeleteContacts,
} from 'redux/contacts/contactsOperations';
import { getFilter, getfiteredContacts } from 'redux/filter/filterSelectors';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const fiteredContacts = getfiteredContacts(filter, contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(fetchDeleteContacts(id));
  };

  return (
    <ul className={s.contactList}>
      {fiteredContacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={s.contactItem}>
            <span className={s.userName}>{name}:</span>
            <span className={s.usertel}>{phone}</span>
            <Button
              text="delete"
              type="button"
              onBtnClick={() => onDeleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
