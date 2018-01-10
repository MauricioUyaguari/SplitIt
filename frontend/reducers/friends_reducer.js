import { RECEIVE_ALL_FRIENDS, RECEIVE_SINGLE_FRIEND  }
from '../actions/friends_actions';
import {RECEIVE_BILL, RECEIVE_NEW_BILL } from '../actions/bills_actions';
import merge from 'lodash/merge';


const friendsReducer = (state = {}, action) => {

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
    return merge({},  action.friends);
    case RECEIVE_SINGLE_FRIEND:
    return merge({}, state, {[action.friend.id]: action.friend});
    case RECEIVE_NEW_BILL:
    let newFriend = state[action.friend.id];
    newFriend.bills_id = ((newFriend.bills_id).concat(action.bill.id)).filter(onlyUnique);
    newFriend.splits_id = ((newFriend.splits_id).concat(action.splits_id)).filter(onlyUnique);
    if(newFriend.id == action.bill.payer_id){
      let amt = parseFloat(action.bill.total_amt) - parseFloat(action.friendSplit.amount_due);
      newFriend.balance_with_current_user = parseFloat(newFriend.balance_with_current_user) - parseFloat(amt);
    } else {
      newFriend.balance_with_current_user = parseFloat(newFriend.balance_with_current_user) + parseFloat(action.friendSplit.amount_due);
    }
    const volver = merge({}, state, {[action.friend.id]: newFriend});
    return volver;
    default:
      return state;
  }
};



export default friendsReducer;
