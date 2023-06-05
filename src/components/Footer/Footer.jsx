import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="infoSection">
        <h3>&copy;  Sunil Ballani</h3>
        <div className="socialIcons">
          <a href="https://github.com/Sunil2201"><FaGithub size={20} /></a>
          <a href="https://twitter.com/imsunilballani/"><FaTwitter size={20} /></a>
          <a href="https://www.linkedin.com/in/sunil-ballani/"><FaLinkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;