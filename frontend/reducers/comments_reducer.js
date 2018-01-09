import merge from 'lodash/merge';
import { RECEIVE_SINGLE_FRIEND } from '../actions/friends_actions';
import { RECEIVE_BILL } from '../actions/bills_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comments_actions';
const commentsReducer = (state = {}, action) => {


  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_COMMENT:
    return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
    let newState = merge({}, state);
    delete newState[action.comment.id];
    return newState;

    // case RECEIVE_SINGLE_FRIEND:
    // // const comments = action.comments.reduce((acc, comment) => {
    // //   acc[comment.id] = comment;
    // //   return acc;
    // // }, {});
    // return merge({}, state, comments);
    case RECEIVE_BILL:
    const billComments = action.comments.reduce((acc, comment) => {
      acc[comment.id] = comment;
      return acc;
    }, {});
    return merge({}, state, billComments);

    default:
      return state;
  }
};


export default commentsReducer;
