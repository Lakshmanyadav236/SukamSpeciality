import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 🧭 Import navigation
import AOS from "aos";
import "aos/dist/aos.css";
import aboutLogo from "../assets/aboutLogo.png"; // ✅ Should be a transparent PNG
import "./HomeWelcomeBanner.css";

const HomeWelcomeBanner = () => {
  const navigate = useNavigate(); // 🧭 Initialize useNavigate

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleAppointmentClick = () => {
    navigate("/appointment"); // 🧭 Navigate on click
  };

  return (
    <section className="home-banner-section" data-aos="fade-up">
      <div className="home-banner-text">
        <h1>
          Exceptional Care for <span>Everyone</span>
        </h1>
        <p>
          Our team of specialists is dedicated to providing comprehensive and
          compassionate healthcare services.
        </p>
        <button
          className="appointment-btn"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={handleAppointmentClick}
        >
          Appointment
        </button>
      </div>
      <div className="home-banner-image" data-aos="fade-left" data-aos-delay="500">
        <img src={aboutLogo} alt="Welcome" className="home-logo-shadow" />
      </div>
    </section>
  );
};

export default HomeWelcomeBanner;
