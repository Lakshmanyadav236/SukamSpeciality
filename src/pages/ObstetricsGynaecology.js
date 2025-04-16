import React from 'react';
import { Link } from "react-router-dom";
import './ObstetricsGynaecology.css';
import heroBg from '../assets/pregnency1.jpg';
import anitha from '../assets/profile1.png';

const ObstetricsGynaecology = () => {
  return (
    <div className="general-surgery-page">
      {/* Top Banner Section */}
      <div className="surgery-banner">
        <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        </div>
        <div className="surgery-hero-text">
          <h1>Comprehensive Obstetrics Gynaecology Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-anitha">Consult Now</Link>
        </div>
      </div>

      <section className="doctor-treatments-section">
            {/* Left: Doctor Profile & Expertise */}
            <div className="doctor-profile-box-anitha">
                <img src={anitha} alt="Dr. Anitha A Manoj" className="doctor-img-anitha" />
                <h2>Dr. Anitha A Manoj</h2>
                <p className="qualification-anitha">MBBS, MS (OBG), FMAS, FRM</p>
                <p className="designation-anitha">Senior Consultant Obstetrician & Gynecologist | Fertility Specialist</p>
                <ul className="expertise-list">
                    <li><span>👨‍⚕️</span> 16+ Years of Surgical Experience</li>
                    <li><span>🧬</span> Infertility evaluation and treatment</li>
                    <li><span>🤰</span> High-risk pregnancy care</li>
                    <li><span>🧫</span> PCOS, fibroids, and endometriosis</li>
                    <li><span>🩺</span> Menstrual and hormonal disorders</li>
                    <li><span>🔬</span> Laparoscopic gynecologic surgeries</li>
                </ul>
                <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-anitha">
                        Consult Now
                </Link>
            </div>
            

            {/* Right: Treatment Categories */}
            <div className="treatment-categories-box-anitha">
                <h2>Our Treatment Categories</h2>
                <div className="treatment-grid-anitha">
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🤰</span>
                    <h3>Pregnancy Care</h3>
                    <p>Expert care for a healthy and safe pregnancy journey.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">👶</span>
                    <h3>Deliveries</h3>
                    <p>Safe and smooth delivery experiences for both mother and baby.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🔴</span>
                    <h3>Menstrual and Bleeding</h3>
                    <p>Expert care for menstrual health and abnormal bleeding issues.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🩸</span>
                    <h3>Ectopic Pregnancies</h3>
                    <p>Expert care for ectopic pregnancies, ensuring safety.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🌸</span>
                    <h3>Menopausal Care</h3>
                    <p>Expert care and guidance for managing menopausal symptoms and ensuring comfort.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">👨‍👩‍👧‍👦</span>
                    <h3>Family Planning</h3>
                    <p>Personalized advice and options for effective family planning and reproductive health.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🔬</span>
                    <h3>Hysteroscopy</h3>
                    <p>Minimally invasive procedure to examine and treat conditions inside the uterus.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🔍</span>
                    <h3>Laparoscopy</h3>
                    <p>Minimally invasive surgery for accurate diagnosis and treatment with small incisions.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🩺</span>
                    <h3>Uterine and Ovarian Surgeries</h3>
                    <p>Advanced surgical treatments for uterine and ovarian conditions with precision and care.</p>
                  </div>
                </div>
              </div>

        </section>



      {/* Overview and Key Aspects */}
      <section className="overview-section">
        <h2>About Our Obstetrics & Gynaecology Department</h2>
        <p>
        At Sukham Speciality Clinic, our Obstetrics & Gynaecology team is committed to 
        supporting women through every phase of life—from adolescence to menopause and beyond. W
        ith compassionate care, modern techniques, and vast expertise, we offer personalized solutions 
        for every need, including pregnancy care, menstrual issues, and advanced gynecological surgeries.
        </p>

        <div className="key-aspects">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✅ Skilled and experienced women’s health specialists</li>
            <li>✅ Comprehensive care for pregnancy, fertility, and hormonal health</li>
            <li>✅ Advanced diagnostic and surgical techniques</li>
            <li>✅ Comfortable and supportive environment for women</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ObstetricsGynaecology;
