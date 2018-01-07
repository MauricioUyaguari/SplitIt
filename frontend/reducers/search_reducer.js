import { RECEIVE_SEARCHED_USERS, RECEIVE_SINGLE_FRIEND } from '../actions/friends_actions';
import merge from 'lodash/merge';



const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_USERS:
    return merge({}, action.users);
    case RECEIVE_SINGLE_FRIEND:
      const newState = Object.assign({}, state);
      delete newState[action.friend.id];
      return newState;
    default:
      return state;
  }
};


export default searchReducer;
