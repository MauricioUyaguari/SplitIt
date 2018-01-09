import { RECEIVE_ALL_FRIENDS, RECEIVE_SINGLE_FRIEND }
from '../actions/friends_actions';
import {RECEIVE_BILL } from '../actions/bills_actions';
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
    case RECEIVE_BILL:
    let newFriend = state[action.friend[0].id];
    let newSplits = action.splits.map(split => split.id);
    newFriend.bills_id = (state[action.friend[0].id].bills_id.concat(action.bill.id)).filter(onlyUnique);
    newFriend.splits_id = (state[action.friend[0].id].splits_id.concat(newSplits)).filter(onlyUnique);

    let friendSplit = action.splits.filter(split => split.debtor_id == newFriend.id);

    if(newFriend.id == action.bill.payer_id){
      let amt = action.bill.total_amt - friendSplit[0].amount_due;
      newFriend.balance_with_current_user = newFriend.balance_with_current_user - amt;
    } else {

      newFriend.balance_with_current_user = newFriend.balance_with_current_user + friendSplit[0].amount_due;
    }

    const volver = merge({}, state, {[action.friend[0].id]: newFriend});
    return volver;
    default:
      return state;
  }
};



export default friendsReducer;
