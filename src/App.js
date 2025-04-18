import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponent";
import ExperienceSection from "./components/ExperienceSection";
import Gallery from "./components/Gallery";
import RecentBlogs from "./components/RecentBlogs";
import AllBlogs from "./components/AllBlogs";
import GoogleReviews from "./components/GoogleReviews";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
// import PregnancyTreatment from "./pages/PregnancyTreatment";
import PCODTreatment from "./pages/PCODTreatment";
// import ThyroidSurgeries from "./pages/ThyroidSurgeries";
// import Chronic from "./pages/chronic";
// import Endoscopy from "./pages/endoscopy";
// import Pancreas from "./pages/pancreas";
// import Fertility from "./pages/fertility";
// import Uterine from "./pages/uterine";
import Location1 from "./components/Location1";
import AccessReportsLogin from "./pages/AccessReportsLogin";
import Treatment1 from "./pages/treatment1";
import Treatment2 from "./pages/treatment2";
import Testimonials from "./components/Testimonials";
import AppointmentPage from "./pages/AppointmentPage";
import DoctorProfile from "./pages/DoctorProfile";
import FAQ from "./components/FAQ";
import FertilityExperts from "./components/FertilityExperts";
import HomeWelcomeBanner from "./components/HomeWelcomeBanner";
import TabbedServicesSection from "./components/TabbedServicesSection";
import ScrollToTop from "./ScrollToTop";
import ServicesPage from "./pages/ServicesPage";
import GeneralSurgery from "./pages/GeneralSurgery";
import ObstetricsGynaecology from "./pages/ObstetricsGynaecology"
import ReproductiveMedicine from "./pages/ReproductiveMedicine"
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <CarouselComponent />
                <HomeWelcomeBanner />
                <TabbedServicesSection/>
                <ExperienceSection />
                <FertilityExperts />
                <Testimonials />
                <RecentBlogs />
                <Gallery />
                <GoogleReviews />
                <FAQ />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          {/* About Page */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/access-lab-reports" element={<AccessReportsLogin />} />

          {/* ✅ Appointment Page */}
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/doctor-profile/:doctorId" element={<DoctorProfile />} />

          {/* Treatment Pages */}
          <Route path="/GeneralSurgery" element={<GeneralSurgery/>}/>
          <Route path="/ObstetricsGynaecology" element={<ObstetricsGynaecology />} />
          <Route path="/ReproductiveMedicine" element={<ReproductiveMedicine />} />

          {/* <Route path="/uterine" element={<Uterine />} />
          <Route path="/fertility" element={<Fertility />} />
          <Route path="/ThyroidSurgeries" element={<ThyroidSurgeries />} />
          <Route path="/chronic" element={<Chronic />} />
          <Route path="/endoscopy" element={<Endoscopy />} />
          <Route path="/pancreas" element={<Pancreas />} /> */}

          {/* Blog Pages */}
          <Route path="/blogs" element={<AllBlogs />} />

          {/* Other Resource Pages */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Location Pages */}
          <Route path="/locations" element={<Location1 />} />

          {/* Extra Treatments */}
          <Route path="/treatment1" element={<Treatment1 />} />
          <Route path="/treatment2" element={<Treatment2 />} />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Contact Page
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
