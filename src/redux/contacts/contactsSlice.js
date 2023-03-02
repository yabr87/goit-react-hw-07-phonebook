import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: (state, { payload }) => {
      state.push(payload);
    },
    deleteContacts: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
