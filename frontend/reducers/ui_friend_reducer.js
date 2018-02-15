import merge from 'lodash/merge';
import { RECEIVE_FRIENDSHIP, CLEAR_FRIEND_MESSAGE } from '../actions/friends_actions';




const uiFriendReducer = (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FRIENDSHIP:
    return merge({}, action.message);
    case CLEAR_FRIEND_MESSAGE:
    return merge({},{});
    default:
    return state;
  }
};



export default uiFriendReducer;
