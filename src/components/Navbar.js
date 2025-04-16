import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import EmergencyModal from "./EmergencyModal";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
    setSubDropdownOpen(null);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "❌" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>

          {/* Treatment Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("treatment")}
            onMouseLeave={() => {
              setDropdownOpen(null);
              setSubDropdownOpen(null);
            }}
          >
            <div className="dropbtn">Treatment ▾</div>
            <div className={`dropdown-content ${dropdownOpen === "treatment" ? "show" : ""}`}>
              
              {/* General Surgery */}
              <div
                className="dropdown-subsection"
                onMouseEnter={() => setSubDropdownOpen("generalSurgery")}
                onMouseLeave={() => setSubDropdownOpen(null)}
              >
                <div className="sub-btn">General Surgery</div>
                <div className={`sub-dropdown ${subDropdownOpen === "generalSurgery" ? "show" : ""}`}>
                  <Link to="/GeneralSurgery" onClick={closeMenu}>Hernia</Link>
                  <Link to="/GeneralSurgery" onClick={closeMenu}>Varicose Veins</Link>
                  <Link to="/GeneralSurgery" onClick={closeMenu}>Fatty Liver</Link>
                  <Link to="/GeneralSurgery" onClick={closeMenu}>Piles</Link>
                  <Link to="/GeneralSurgery" onClick={closeMenu}>Foot Ulcer Care</Link>
                  <Link to="/GeneralSurgery" onClick={closeMenu}>Gall stones</Link>
                  <Link to="/GeneralSurgery" onClick={closeMenu}>Neck swellings</Link>
                  <Link to="/GeneralSurgery" onClick={closeMenu}>Testicular swellings</Link>
                </div>
              </div>

              {/* Obstetrics & Gynaecology */}
              <div
                className="dropdown-subsection"
                onMouseEnter={() => setSubDropdownOpen("obgyn")}
                onMouseLeave={() => setSubDropdownOpen(null)}
              >
                <div className="sub-btn">Obstetrics & Gynaecology </div>
                <div className={`sub-dropdown ${subDropdownOpen === "obgyn" ? "show" : ""}`}>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>Pregnancy Care</Link>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>Deliveries</Link>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>Menstrual and Bleeding</Link>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>Ectopic Pregnancies</Link>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>Menopausal Care</Link>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>⁠Family Planning</Link>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>Hysteroscopy</Link>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>Laparoscopy</Link>
                  <Link to="/ObstetricsGynaecology" onClick={closeMenu}>Uterine and Ovarian Surgerie</Link>
                </div>
              </div>

              {/* Reproductive Medicine */}
              <div
                className="dropdown-subsection"
                onMouseEnter={() => setSubDropdownOpen("reproductive")}
                onMouseLeave={() => setSubDropdownOpen(null)}
              >
                <div className="sub-btn">Reproductive Medicine</div>
                <div className={`sub-dropdown ${subDropdownOpen === "reproductive" ? "show" : ""}`}>
                  <Link to="/ReproductiveMedicine" onClick={closeMenu}>PCOD</Link>
                  <Link to="/ReproductiveMedicine" onClick={closeMenu}>Infertility Issues</Link>
                  <Link to="/ReproductiveMedicine" onClick={closeMenu}>OITI</Link>
                  <Link to="/ReproductiveMedicine" onClick={closeMenu}>IUI</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("resources")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <div className="dropbtn">Resources ▾</div>
            <div className={`dropdown-content ${dropdownOpen === "resources" ? "show" : ""}`}>
              <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
              <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
              <Link to="/faq" onClick={closeMenu}>FAQ</Link>
            </div>
          </div>

          {/* Location Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("location")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <div className="dropbtn">Contact ▾</div>
            <div className={`dropdown-content ${dropdownOpen === "location" ? "show" : ""}`}>
              <Link to="/locations" onClick={closeMenu}>Uttarahalli</Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
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
