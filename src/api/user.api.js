import { handleResponse, handleError } from './api.utils';

const baseUrl = `${process.env.REACT_APP_API_URL}/users/`;

export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
