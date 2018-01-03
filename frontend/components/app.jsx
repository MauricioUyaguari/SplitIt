// Utilies Imports
import React from 'react';
import { Route,
Redirect,
Switch,
Link,
HashRouter} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

// Greeting Containers; Nav, Body and Footer and Session
import GreetingContainer from './greeting/greeting_container';
import FooterContainer from './greeting/footer_container';
import BodyGreetingContainer from './greeting/body_greeting_container';
import SessionFormContainer from './session_form/session_form_container';




const App = () => {
  return (
    <div className="main-div">
      <nav className="nav-header">
        <Link to="/">
          <h1 className="splitit-sign">S P L I T I T</h1>
        </Link>
        <GreetingContainer />
      </nav>
      <main className="bodydiv">
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route exact path="/" component={BodyGreetingContainer} />
      </main>
      <FooterContainer />
  </div>
  );
};


export default App;
