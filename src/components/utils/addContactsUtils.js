export const checkNameInPhonebook = (contactName, contacts) => {
  if (contacts.some(({ name }) => name.toLowerCase() === contactName)) {
    alert(`${contactName} is already in contacts!`);
    return true;
  }
};

export const formatUserTel = contactTel => {
  const tel = contactTel.split('');
  // tel.splice(0, '', '+380 (');
  tel.splice(3, '', '-');
  tel.splice(7, '', '-');
  return tel.join('');
};
