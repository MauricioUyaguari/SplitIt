import { RECEIVE_SEARCHED_USERS } from '../actions/friends_actions';
import merge from 'lodash/merge';



const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_USERS:
    return merge({}, action.users);
    default:
      return state;
  }
};


export default searchReducer;
