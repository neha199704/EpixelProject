import React from "react";
import "./Footer.css";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import samplelogo from "../assets/samplelogo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={samplelogo} alt="samplelogo" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Mobile app</h3>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#live-share">Live share</a>
              </li>
              <li>
                <a href="#video-record">Video record</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#featured-artists">Featured artists</a>
              </li>
              <li>
                <a href="#portal">The Portal</a>
              </li>
              <li>
                <a href="#live-events">Live events</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#contact-us">Contact us</a>
              </li>
              <li>
                <a href="#history">History</a>
              </li>
            </ul>
          </div>
          <div className="footer-buttons">
            <button className="footer-button register-button">Register</button>
            <button className="footer-button login-button">Log in</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Photo, Inc. 2019. We love our users!</p>
        <div className="footer-social">
          <span>Follow us:</span>
          <div className="logos">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="logos">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="logos">
            <img src={linkedin} alt="linkedin" />
          </div>

          <div className="logos">
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
