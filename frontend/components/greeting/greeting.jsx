import React from 'react';
import { Link } from 'react-router-dom';



const sessionLinks = () => {
  return (<nav>
    <Link to="/login">Login</Link>
    <br></br>
    <Link to="/signup">Sign Up</Link>
  </nav>);
};




const loggedinGreeting = (currentUser, logout) => {
  return (
    <hgroup>
      <h2> Hi, {currentUser.email} </h2>
      <button onClick={logout}>Log out</button>
  </hgroup>
  );
};


const Greeting = ({ currentUser, logout}) => {
return (
currentUser ? loggedinGreeting(currentUser, logout) : sessionLinks()
);
};




export default Greeting;
