import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createStaff = (staff, token) => {
  return fetch(`${API}/staff`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: staff,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllStaff = () => {
  return fetch(`${API}/allstaff`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getOneStaff = (slug) => {
  return fetch(`${API}/staff/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeStaff = (slug, token) => {
  return fetch(`${API}/staff/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
