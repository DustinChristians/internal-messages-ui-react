import * as types from './action-types.constants';
import * as userApi from '../../api/user.api';

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function thunk(dispatch) {
    return userApi
      .getUsers()
      .then((users) => {
        dispatch(loadUsersSuccess(users));
      })
      .catch((error) => {
        throw error;
      });
  };
}
