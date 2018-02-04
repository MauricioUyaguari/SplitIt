import{ RECEIVE_CURRENT_USER
  ,RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import { RECEIVE_DASHBOARD } from '../actions/currentUser_actions';
import merge from 'lodash/merge';


const nullUser = Object.freeze({
  currentUser: null
});


export const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return merge({}, { currentUser });
    case RECEIVE_DASHBOARD:
    let current = action.currentUser;
    current.pending_friends = action.pending_friends;
    return merge({}, {currentUser: current });
    default:
      return state;
  }
};


export default sessionReducer;
