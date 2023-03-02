export const getAllContacts = store => store.contacts;

// export const getContacts = ({ contacts }) => {
//   const favoriteContacts = contacts.filter(({ favorite }) => favorite);
//   return favoriteContacts;
// };

// export const getFilteredContacts = ({ contacts, filter }) => {
//   if (!filter) {
//     return contacts;
//   }

//   const normalizedFilter = filter.toLowerCase();
//   const result = contacts.filter(({ title, author }) => {
//     return (
//       title.toLowerCase().includes(normalizedFilter) ||
//       author.toLowerCase().includes(normalizedFilter)
//     );
//   });

//   return result;
// };
