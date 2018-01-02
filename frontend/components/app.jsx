import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route,
Redirect,
Switch,
Link,
HashRouter} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {

  return (<div>
    <h1>S P L I T I T</h1>
    <GreetingContainer />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>);
};


export default App;
