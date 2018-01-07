import { RECEIVE_ALL_BILLS } from '../actions/bills_actions';
import { RECEIVE_SINGLE_FRIEND } from '../actions/friends_actions';
import merge from 'lodash/merge';

const billsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BILLS:
      return merge({}, action.bills);
    case RECEIVE_SINGLE_FRIEND:
      const bills = action.bills.reduce((acc, bill) => {
        acc[bill.id] = bill;
        return acc;
      }, {});
    return merge({}, state, bills);
    default:
      return state;
  }
};

export default billsReducer;
