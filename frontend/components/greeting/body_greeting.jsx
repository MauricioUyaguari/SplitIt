import React from 'react';
import { Link } from 'react-router-dom';

const withUser = () => {

const message = () => {
  return (
  <p>
  <span>Welcome </span>
  to the future!
  <span> Split </span>
  <span> IT </span>
  is the
  <span> easiest </span>
  and
  <span> cleanest </span>
  way to
  <span> split </span>
  your
  <span> bills </span>
  among friends and family.
  </p>
);
};
  return (
    <div className="main-greeting-div">
    <section className="main-greeting-top-section">
      <div>
        <img src={window.staticImages.splititlogo}></img>
        <p> Split Expenses Fairly and Easily</p>
      </div>
      {message()}
    </section>
    <section className="main-greeting-bottom-section">
      <figure>
        <img src={window.staticImages.greetingMain}></img>
      </figure>
      <Link to="/signup">
        <span> Sign Up Now!</span>
      </Link>
    </section>
    </div>
  );

};



const BodyGreeting = ({currentUser}) => {
return (
  currentUser ? (<div></div>) : withUser()
);
};



export default BodyGreeting;
