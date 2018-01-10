import { RECEIVE_ALL_BILLS, RECEIVE_BILL } from '../actions/bills_actions';
import { RECEIVE_SINGLE_FRIEND } from '../actions/friends_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comments_actions';
import { RECEIVE_DASHBOARD } from '../actions/currentUser_actions';
import merge from 'lodash/merge';

const billsReducer = (state = {}, action) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BILLS:
      return merge({}, action.bills);
    case RECEIVE_BILL:
      return merge({}, state, {[action.bill.id]: action.bill});
    case RECEIVE_SINGLE_FRIEND:
      const bills = action.bills.reduce((acc, bill) => {
        acc[bill.id] = bill;
        return acc;
        }, {});
      return merge({}, state, bills);
    case RECEIVE_COMMENT:
      let newBill = state[action.bill.id];
      let newCommentsIds = (newBill.comments_id.concat(action.comment.id)).filter(onlyUnique);
      newBill.comments_id = newCommentsIds;
      const result = merge({}, state, {[newBill.id]: newBill});
      return result;
    case REMOVE_COMMENT:
      let attBill = state[action.bill.id];
      attBill.comments_id = attBill.comments_id.filter(commentId => commentId != action.comment.id);
      const rcResult = merge({}, state, {[attBill.id]: attBill});
      return rcResult;
    // case RECEIVE_DASHBOARD:
    //
    //   return merge({}, state, action.bills);
    default:
      return state;
  }
};

export default billsReducer;
