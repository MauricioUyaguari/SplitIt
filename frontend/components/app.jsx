import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Footer from './greeting/footer';
import { Route,
Redirect,
Switch,
Link,
HashRouter} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div className="main-div">
      <nav className="nav-header">
        <div className="nav-container">
        <h1 className="splitit-sign">S P L I T I T</h1>
        <GreetingContainer />
        </div>
      </nav>
      <main className="bodydiv">
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </main>
      <Footer />
  </div>
  );
};


export default App;
