import React,{useEffect} from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import Navbar from '../Navbar/Navbar'; //Importing the navigation bar component
import Notification from '../Notification/Notification';
import "./LandingPage.css"; // Importing the CSS styles for the Landing_Page component

const Landing_Page = () => {
  return (
    <div className="landing-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <Navbar />
        <div>
          <div className="flex-hero">
            <h1>
              Your Health<br />
              <span className="text-gradient">Our Responsibility</span>
            </h1>

            <div className="blob-cont">
              <div className="blue blob"></div>
            </div>
            <div className="blob-cont">
              <div className="blue1 blob"></div>
            </div>
            
            <h4>
              Finding the right doctor shouldn't be complicated. Browse verified specialists, read real patient reviews, compare availability, and book your appointment in minutes.
            </h4>
            
            <Notification />
            
            {/* Kept the Link to navigate to the booking page */}
            <Link className="button" to="/booking-consultation">Get Started</Link>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS SECTION */}
      <section className="how-it-works-section">
        <h2 className="section-title">How It <span className="text-gradient">Works</span></h2>
        <div className="cards-grid">
          <div className="info-card">
            <div className="step-number">1</div>
            <h3>Find a Doctor</h3>
            <p>Search for verified specialists based on your symptoms or specific medical needs.</p>
          </div>
          <div className="info-card">
            <div className="step-number">2</div>
            <h3>Book Appointment</h3>
            <p>Choose a convenient time slot and book your consultation with zero hidden fees.</p>
          </div>
          <div className="info-card">
            <div className="step-number">3</div>
            <h3>Get Treated</h3>
            <p>Consult with your doctor online or in-person and get the care you deserve.</p>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="services-section" id="services">
        <h2 className="section-title">Top <span className="text-gradient">Specialties</span></h2>
        <div className="cards-grid">
          <div className="service-card">
            <h3>🦷 Dentistry</h3>
            <p>Expert dental care, from routine checkups to advanced surgeries.</p>
          </div>
          <div className="service-card">
            <h3>❤️ Cardiology</h3>
            <p>Comprehensive heart care and cardiovascular diagnostics.</p>
          </div>
         <div className="service-card">
            <h3>🌸 Gynaecology</h3>
            <p>Comprehensive women's health services, from routine exams to specialized care and maternity support.</p>
          </div>
         <div className="service-card">
            <h3>✨ Dermatology</h3>
            <p>Expert care for skin, hair, and nail conditions, including medical and cosmetic treatments.</p>
          </div>
        </div>
      </section>



      {/* 4. TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our <span className="text-gradient">Patients Say</span></h2>
        <div className="cards-grid">
          <div className="testimonial-card">
            <p className="quote">"Booking a pediatrician for my son took literally two minutes. The doctor was incredibly professional. Highly recommended!"</p>
            <h4>- Sarah J.</h4>
          </div>
          <div className="testimonial-card">
            <p className="quote">"I love that I can read reviews before choosing a specialist. It takes the anxiety out of finding a new doctor."</p>
            <h4>- Michael T.</h4>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
          <div className="footer-logo">
                  <Link to="/" className="footer-logo">
                  StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i></Link>
                </div>
            <p>Your trusted partner in digital healthcare accessibility.</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/booking-consultation">Book Appointment</Link></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HealthCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing_Page;