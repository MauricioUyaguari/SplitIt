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
  <div>
    <hgroup>
      <h2> Hi, {currentUser.email} </h2>
      <button className="logoutbutton" onClick={logout}>Log out</button>
    </hgroup>
  </div>
  );
};


const Greeting = ({ currentUser, logout}) => {
return (
currentUser ? loggedinGreeting(currentUser, logout) : sessionLinks()
);
};




export default Greeting;
