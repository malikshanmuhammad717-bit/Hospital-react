import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick Links</h3>
          <a href="#home"><i className="fas fa-chevron-right"></i> home</a>
          <a href="#services"><i className="fas fa-chevron-right"></i> services</a>
          <a href="#about"><i className="fas fa-chevron-right"></i> about</a>
          <a href="#doctors"><i className="fas fa-chevron-right"></i> doctors</a>
          <a href="#book"><i className="fas fa-chevron-right"></i> book</a>
          <a href="#review"><i className="fas fa-chevron-right"></i> review</a>
          <a href="#blogs"><i className="fas fa-chevron-right"></i> blogs</a>
        </div>

        <div className="box">
          <h3>Our Services</h3>
          <a href="#"><i className="fas fa-chevron-right"></i> free checkups</a>
          <a href="#"><i className="fas fa-chevron-right"></i> 24/7 ambulance</a>
          <a href="#"><i className="fas fa-chevron-right"></i> expert doctors</a>
          <a href="#"><i className="fas fa-chevron-right"></i> medicines</a>
          <a href="#"><i className="fas fa-chevron-right"></i> bed facility</a>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a href="#"><i className="fas fa-phone"></i> +123-456-7890</a>
          <a href="#"><i className="fas fa-phone"></i> +111-222-3333</a>
          <a href="#"><i className="fas fa-envelope"></i> info@hospital.com</a>
          <a href="#"><i className="fas fa-map-marker-alt"></i> Punjab, Pakistan</a>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-facebook-f"></i> facebook</a>
          <a href="#"><i className="fab fa-twitter"></i> twitter</a>
          <a href="#"><i className="fab fa-instagram"></i> instagram</a>
          <a href="#"><i className="fab fa-linkedin"></i> linkedin</a>
        </div>
      </div>

      <div className="credit">
        Created by <span>Malik Gul</span> | All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;