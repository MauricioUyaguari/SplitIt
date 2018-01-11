import merge from 'lodash/merge';
import { RECEIVE_SINGLE_FRIEND } from '../actions/friends_actions';
import { RECEIVE_NEW_TRANSACTION} from '../actions/transactions_actions';

const transactionsReducer = (state = {}, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_FRIEND:
      const transactions = action.transactions.reduce((acc, transaction) => {
        acc[transaction.id] = transaction;
        return acc;
      }, {});
      return merge({}, state, transactions);
      case RECEIVE_NEW_TRANSACTION:
      return merge({}, state, {[action.transaction.id]: action.transaction});
    default:
      return state;
  }


};



export default transactionsReducer;
