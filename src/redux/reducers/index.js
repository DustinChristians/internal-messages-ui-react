import { combineReducers } from 'redux';
import messages from './message.reducer';
import users from './user.reducer';

const rootReducer = combineReducers({
  messages,
  users,
});

export default rootReducer;
