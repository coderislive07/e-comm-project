import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="gpt3__footer container">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h1>ZOCO-X</h1>
        <p>
          Website Created for Project Purpose, <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>shashankweb111@gmail.com</p>
        <p>9559821649</p>
        <p>Lucknow</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 design by SHASHANK, All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
