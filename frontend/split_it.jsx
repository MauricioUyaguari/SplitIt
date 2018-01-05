import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ApiUtil from './util/session_api_util';
import { fetchAllFriends,createFriend, fetchSearchedUsers  } from './actions/friends_actions';
import { login  } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if(window.currentUser){
    const preloadedState = { session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }
  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = ApiUtil.signup;
  window.logout = ApiUtil.logout;
  //friends
  window.fetchAllFriends = fetchAllFriends;
  window.createFriend = createFriend;
  window.fetchSearchedUsers = fetchSearchedUsers;

  //
  ReactDOM.render(<Root store={store}/>, root);
});


const testUser = {id: 48};
