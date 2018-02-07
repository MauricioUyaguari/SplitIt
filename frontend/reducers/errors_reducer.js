import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import loggedInErrorsReducer from './loggedIn_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  loggedIn: loggedInErrorsReducer
});

export default errorsReducer;
