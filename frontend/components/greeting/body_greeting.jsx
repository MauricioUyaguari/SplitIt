import React from 'react';
import { Link } from 'react-router-dom';

const withUser = () => {
const message = "Welcome to the future! SplitIt is the easiest and cleanest way to split your bills among friends and family. It ensures you divide up your bills fairly."
  return (
    <div className="main-greeting-div">
    <section className="main-greeting-top-section">
      <div>
        <img src={window.staticImages.splititlogo}></img>
        <p> Split Expenses Fairly and Easily</p>
      </div>
      <p> {message} </p>
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
