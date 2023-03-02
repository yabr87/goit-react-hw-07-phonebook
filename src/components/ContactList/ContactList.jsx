import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button';
import s from './ContactList.module.css';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import { deleteContacts } from 'redux/contacts/contactsSlice';
import { getFilter, getfiteredContacts } from 'redux/filter/filterSelectors';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const fiteredContacts = getfiteredContacts(filter, contacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul className={s.contactList}>
      {fiteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactItem}>
            <span className={s.userName}>{name}:</span>
            <span className={s.usertel}>{number}</span>
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
