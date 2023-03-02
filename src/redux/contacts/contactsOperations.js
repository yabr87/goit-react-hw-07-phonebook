import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  deleteContacts,
} from 'components/utils/contactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContacts(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
