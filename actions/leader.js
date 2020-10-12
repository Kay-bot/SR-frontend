import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createLeader = (leader, token) => {
  return fetch(`${API}/leader`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: leader,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllLeader = () => {
  return fetch(`${API}/all-leader`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getOneLeader = (slug) => {
  return fetch(`${API}/leader/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeLeader = (slug, token) => {
  return fetch(`${API}/leader/${slug}`, {
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

export const updateLeader = (leader, token, slug) => {
  return fetch(`${API}/leader/${slug}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: leader,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
