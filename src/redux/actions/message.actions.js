import * as types from './action-types.constants';

export function createMessage(message) {
  return { type: types.CREATE_MESSAGE, message };
}
