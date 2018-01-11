import { combineReducers } from 'redux';

// all entities
import friendsReducer from './friends_reducer';
import searchReducer from './search_reducer';
import billsReducer from './bills_reducer';
import splitsReducer from './splits_reducer';
import commentsReducer from './comments_reducer';
import transactionsReducer from './transactions_reducer';


export const entitiesReducer = combineReducers({
  friends: friendsReducer,
  bills: billsReducer,
  splits: splitsReducer,
  comments: commentsReducer,
  transactions: transactionsReducer,
  search: searchReducer
});


export default entitiesReducer;
