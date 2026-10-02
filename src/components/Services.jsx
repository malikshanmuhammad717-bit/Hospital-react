import React from 'react';

const servicesData = [
  { id: 1, icon: 'fas fa-notes-medical', title: 'Free Checkups', text: 'Comprehensive checkups to ensure early detection and prevention of ailments.' },
  { id: 2, icon: 'fas fa-ambulance', title: '24/7 Ambulance', text: 'Rapid emergency response team available around the clock.' },
  { id: 3, icon: 'fas fa-user-md', title: 'Expert Doctors', text: 'Consult with leading healthcare professionals across all specialties.' },
  { id: 4, icon: 'fas fa-pills', title: 'Medicines', text: 'Quality guaranteed medical supplies and prescription fulfillment.' },
  { id: 5, icon: 'fas fa-procedures', title: 'Bed Facility', text: 'Comfortable, hygienic, and well-monitored inpatient beds.' },
  { id: 6, icon: 'fas fa-heartbeat', title: 'Total Care', text: 'Holistic healthcare solutions tailored to every patient\'s needs.' },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        Our <span>Services</span>
      </h1>

      <div className="box-container">
        {servicesData.map((service) => (
          <div key={service.id} className="box">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="#book" className="btn">
              Learn More <span className="fas fa-chevron-right"></span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;