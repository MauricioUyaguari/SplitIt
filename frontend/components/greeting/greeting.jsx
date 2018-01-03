import React from 'react';
import { Link } from 'react-router-dom';



const sessionLinks = () => {
  return (<div className="nav-session">
    <Link className="nav-login" to="/login">Login</Link>
    <span> or </span>
    <Link className="nav-signup" to="/signup">Sign Up</Link>
  </div>);
};




const loggedinGreeting = (currentUser, logout) => {
  return (
  <div className="greetings">
    <hgroup>
      <h2> {currentUser.email}</h2>
  </hgroup>
  <button className="logoutbutton" onClick={logout}>Log out</button>
  </div>
  );
};


const Greeting = ({ currentUser, logout}) => {
return (
currentUser ? loggedinGreeting(currentUser, logout) : sessionLinks()
);
};




export default Greeting;
