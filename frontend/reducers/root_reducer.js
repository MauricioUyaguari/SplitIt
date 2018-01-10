import { combineReducers } from 'redux';
// session and errors
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

import entitiesReducer from './entities_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer
});



export default rootReducer;
