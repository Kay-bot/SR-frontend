import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createStaff = (supportTeam, token) => {
  return fetch(`${API}/support-team`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: supportTeam,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllStaff = () => {
  return fetch(`${API}/all-support-team`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getOneStaff = (slug) => {
  return fetch(`${API}/support-team/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeStaff = (slug, token) => {
  return fetch(`${API}/support-team/${slug}`, {
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
