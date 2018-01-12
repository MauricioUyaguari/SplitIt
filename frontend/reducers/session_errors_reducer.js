import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';


export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_ERRORS:
    return [];
    default:
      return state;
  }
};



export default sessionErrorsReducer;
