import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fe6905c5c800a723807f95.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
