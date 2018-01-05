import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import friendsReducer from './friends_reducer';
import searchReducer from './search_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  friends: friendsReducer,
  search: searchReducer,
  errors: errorsReducer
});



export default rootReducer;
