import { combineReducers } from 'redux';
import uiFriendReducer from './ui_friend_reducer';



export const uiReducer = combineReducers({
  uiFriend: uiFriendReducer
});

export default uiReducer;
