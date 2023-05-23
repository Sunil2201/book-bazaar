import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="generalInfo">
        <div className="aboutApp">
          <h2>Book Bazaar</h2>
          <p>
            Fill your house with stacks of books, in all crannies and all the
            nooks
          </p>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
        </div>
        <div className="personalInfo">
          <p>Connect with me on</p>
          <p>Github</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="copyrightSection">
        <p>&copy; 2023 Book Bazaar. All rights reserved.</p>
        <p>Developed by Sunil Ballani</p>
      </div>
    </footer>
  );
}

export default Footer;
