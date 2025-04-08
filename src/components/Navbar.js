import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { FaPhoneAlt } from 'react-icons/fa';
import EmergencyModal from "./EmergencyModal"; // import the modal

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false); // modal state

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(null);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        {/* Mobile Menu Icon */}
        <button className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "❌" : "☰"}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>

          {/* Treatment Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("treatment")}>
              Treatment ▾
            </button>
            <div className={`dropdown-content ${dropdownOpen === "treatment" ? "show" : ""}`}>
              <Link to="/PregnancyTreatment" onClick={closeMenu}>Pregnancy</Link>
              <Link to="/ThyroidSurgeries" onClick={closeMenu}>Thyroid Surgeries</Link>
              <Link to="/PCODTreatment" onClick={closeMenu}>PCOD</Link>
              <Link to="/chronic" onClick={closeMenu}>Chronic Liver Disease</Link>
              <Link to="/uterine" onClick={closeMenu}>Uterine/Ovarian Surgeries</Link>
              <Link to="/endoscopy" onClick={closeMenu}>Endoscopy</Link>
              <Link to="/fertility" onClick={closeMenu}>Fertility Issues</Link>
              <Link to="/pancreas" onClick={closeMenu}>Pancreatic Problems</Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("resources")}>
              Resources ▾
            </button>
            <div className={`dropdown-content ${dropdownOpen === "resources" ? "show" : ""}`}>
              <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
              <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
              <Link to="/faq" onClick={closeMenu}>FAQ</Link>
            </div>
          </div>

          <Link to="/contact" onClick={closeMenu}>Contact</Link>

          {/* Location Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("location")}>
              Location ▾
            </button>
            <div className={`dropdown-content ${dropdownOpen === "location" ? "show" : ""}`}>
              <Link to="/locations" onClick={closeMenu}>Uttarahalli</Link>
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="right-section">
          <button className="btns" onClick={() => navigate("/access-lab-reports")}>
            Access Lab Reports
          </button>
          <button className="btns" onClick={() => navigate("/appointment")}>
            Book an Appointment
          </button>
          <button className="btns" id="emergency" onClick={() => setShowEmergencyModal(true)}>
            <FaPhoneAlt className="text-white text-xl mr-1" /> Emergency
          </button>
        </div>
      </div>

      {showEmergencyModal && <EmergencyModal onClose={() => setShowEmergencyModal(false)} />}
    </nav>
  );
};

export default Navbar;
