import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import friendsReducer from './friends_reducer';
import searchReducer from './search_reducer';
import billsReducer from './bills_reducer';
import splitsReducer from './splits_reducer';
import commentsReducer from './comments_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  friends: friendsReducer,
  bills: billsReducer,
  splits: splitsReducer,
  comments: commentsReducer,
  search: searchReducer,
  errors: errorsReducer
});



export default rootReducer;
