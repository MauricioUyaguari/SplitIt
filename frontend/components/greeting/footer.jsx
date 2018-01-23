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
                <a className="connectLogos" href="https://www.linkedin.com/in/luismauriciouyaguari/"><i className="fab fa-linkedin"></i></a>
                <span>Linkedin</span>
              </li>
              <li>
                <a className="connectLogos" href="https://github.com/MauricioUyaguari">
                  <i className="fab fa-github"></i>  </a>
                  <span>Github</span>

              </li>
              <li>
                <a className="connectLogos" href="wwww.mauriciouyaguari.com">
                <i className="fas fa-desktop"></i></a>
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
