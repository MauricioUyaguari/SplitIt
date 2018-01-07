import { RECEIVE_ALL_FRIENDS, RECEIVE_SINGLE_FRIEND }
from '../actions/friends_actions';
import merge from 'lodash/merge';


const friendsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
    return merge({},  action.friends);
    case RECEIVE_SINGLE_FRIEND:
    return merge({}, state, {[action.friend.id]: action.friend});
    default:
      return state;
  }
};



export default friendsReducer;
