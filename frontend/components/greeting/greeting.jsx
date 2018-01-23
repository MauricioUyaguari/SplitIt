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
  <div>
    <a  className="headerLogos" href="https://www.linkedin.com/in/luismauriciouyaguari/"><i className="fab fa-linkedin"></i></a>
    <a className="headerLogos" href="https://github.com/MauricioUyaguari">  <i className="fab fa-github"></i>  </a>
    <a className="headerLogos" href="wwww.mauriciouyaguari.com"><i className="fas fa-desktop"></i></a>

  </div>
  </div>
  );
};


const Greeting = ({ currentUser, logout}) => {
return (
currentUser ? loggedinGreeting(currentUser, logout) : sessionLinks()
);
};




export default Greeting;
