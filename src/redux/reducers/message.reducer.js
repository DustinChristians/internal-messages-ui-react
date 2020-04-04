import * as types from '../actions/action-types.constants';

export default function messageReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_MESSAGE:
      return [...state, { ...action.message }];
    default:
      return state;
  }
}
