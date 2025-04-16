import React from 'react';
import { Link } from "react-router-dom";
import './ReproductiveMedicine.css';
import heroBg from '../assets/pregnency1.jpg';
import anitha from '../assets/profile1.png';

const ReproductiveMedicine = () => {
  return (
    <div className="general-surgery-page">
      {/* Top Banner Section */}
      <div className="surgery-banner">
        <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        </div>
        <div className="surgery-hero-text">
          <h1>Comprehensive Reproductive Medicine Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button">Consult Now</Link>
        </div>
      </div>

      <section className="doctor-treatments-section">
            {/* Left: Doctor Profile & Expertise */}
            <div className="doctor-profile-box">
                <img src={anitha} alt="Dr. Anitha A Manoj" className="doctor-img" />
                <h2>Dr. Anitha A Manoj</h2>
                <p className="qualification">MBBS, MS (OBG), FMAS, FRM</p>
                <p className="designation">Senior Consultant Obstetrician & Gynecologist | Fertility Specialist</p>
                <ul className="expertise-list">
                    <li><span>👨‍⚕️</span> 16+ Years of Surgical Experience</li>
                    <li><span>🧬</span> Infertility evaluation and treatment</li>
                    <li><span>🤰</span> High-risk pregnancy care</li>
                    <li><span>🧫</span> PCOS, fibroids, and endometriosis</li>
                    <li><span>🩺</span> Menstrual and hormonal disorders</li>
                    <li><span>🔬</span> Laparoscopic gynecologic surgeries</li>
                </ul>
                <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button">
                        Consult Now
                </Link>
            </div>

            {/* Right: Treatment Categories */}
            <div className="treatment-categories-box">
              <h2>Our Treatment Categories</h2>
              <div className="treatment-grid">
                <div className="treatment-card">
                  <span className="icon-large">🩺</span>
                  <h3>PCOD</h3>
                  <p>Effective management of PCOD for hormonal balance and health.</p>
                </div>
                <div className="treatment-card">
                  <span className="icon-large">🧬</span>
                  <h3>Infertility Issues</h3>
                  <p>Advanced treatments for overcoming infertility issues.</p>
                </div>
                <div className="treatment-card">
                  <span className="icon-large">🩻</span>
                  <h3>OITI</h3>
                  <p>Effective guidance and support for timed ovulation and conception.</p>
                </div>
                <div className="treatment-card">
                  <span className="icon-large">🧪</span>
                  <h3>IUI</h3>
                  <p>Safe and assisted method to boost chances of conception.</p>
                </div>
              </div> 
            </div>

        </section>

      {/* Overview and Key Aspects */}
      <section className="overview-section">
        <h2>About Our General Surgery Department</h2>
        <p>
        At Sukham Speciality Clinic, our Reproductive Medicine team is committed to helping individuals 
        and couples realize their dream of parenthood. We offer evidence-based fertility treatments including 
        IVF, IUI, and PCOS management, supported by cutting-edge technology and a compassionate approach to care.
        </p>

        <div className="key-aspects">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✅ Expert fertility specialists with years of experience</li>
            <li>✅ Advanced diagnostics and assisted reproductive technologies (IVF, IUI, OITI)</li>
            <li>✅ Specialized care for PCOS, hormonal disorders, and recurrent pregnancy loss</li>
            <li>✅ Confidential, comfortable, and patient-centric environment</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default ReproductiveMedicine;
