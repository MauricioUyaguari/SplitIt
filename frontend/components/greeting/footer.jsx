import React from 'react';





const withUser = () => {

  return (
    <footer >
        <section className="footer-container">
          <section className="aboutus">
            <p>Made with love in New York City!</p>
            <p> Copyright @2018 SplitIt, Inc. All Rights reserved. Used for Education Proposes Only</p>
          </section>
          <section className="footer-links">
            <ul>
              <li>Linkedin</li>
              <li>Github</li>
              <li>Webite</li>
            </ul>
          </section>
      </section>
    </footer>
  );
};



const Footer= ({ currentUser}) => {
return (
currentUser ? (<footer></footer>) : withUser()
);
};



export default Footer;
