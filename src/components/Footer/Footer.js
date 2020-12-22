import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <div className="footer-title">Get in Touch</div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/itsoverpod/"
            >
              <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/itsoverpod"
            >
              <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
            </a>
            <a href="mailto:itsoverforrealpod@gmail.com">
              <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            </a>
          </div>
          <a href="mailto:itsoverforrealpod@gmail.com">
            itsoverforrealpod@gmail.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
