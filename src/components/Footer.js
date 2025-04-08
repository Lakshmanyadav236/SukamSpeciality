import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4>Home</h4>
          <ul>
            <li>Promotions</li>
            <li>Experience</li>
            <li>Treatments</li>
            <li>Testimonials</li>
            <li>Versatile Approach</li>
            <li>Gallery</li>
            <li>Recent Blogs</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>Dr. Manoj Karthik</li>
            <li>Dr. Anitha A Manoj</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Treatments</h4>
          <ul>
            <li>Pregnancy</li>
            <li>PCOD</li>
            <li>Uterine / Ovarian Surgeries</li>
            <li>Fertility Issues</li>
            <li>Thyroid Surgeries</li>
            <li>Chronic Liver Disease</li>
            <li>Endoscopy</li>
            <li>Pancreatic Problems</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Blogs</li>
            <li>FAQ</li>
            <li>Events</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <ul>
            <li>Uttarahalli</li>
          </ul>
        </div>
      </div>

      {/* Divider Line Before Social Media Icons */}
      <hr className="footer-divider" />

      {/* Social Media Icons */}
      <div className="footer-social">
        <a
          href="https://www.facebook.com/sukamspeciality/"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/sukamspecialityclinic/"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="#"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2025 Sukam Speciality and Fertility Clinic, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
