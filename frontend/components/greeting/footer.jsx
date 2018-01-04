import React from 'react';





const withUser = () => {

  return (
    <footer >
        <section className="footer-container">
          <section className="aboutus">
            <p className="aboutusNYC">Made with love in New York City!</p>
            <p> Copyright @2018 SplitIt, Inc. All Rights reserved. Used for Education Proposes Only</p>
          </section>
          <section className="footer-links">
            <ul>
              <li>
                <img className="connectLogos" src={window.staticImages.linkedinLogo}></img>
                <span>Linkedin</span>

              </li>
              <li>
                <img className="connectLogos" src={window.staticImages.githubLogo}></img>
                <span>Github</span>
              </li>
              <li>
                <img></img>
                <span>Website</span>
              </li>
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
