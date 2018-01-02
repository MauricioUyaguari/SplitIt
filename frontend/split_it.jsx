import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ApiUtil from './util/session_api_util';
import { login } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = login;
  window.signup = ApiUtil.signup;
  window.logout = ApiUtil.logout;
  const store = configureStore();
  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //
  ReactDOM.render(<Root store={store}/>, root);
});


const testUser = {email: "mauricio", password: "password"} ;
const newUser = {email: "mauricio1", password: "password"} ;
