import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>About</span> Us
      </h1>

      <div className="row">
        <div className="image">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
            alt="About Us" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80';
            }}
            style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }}
          />
        </div>

        <div className="content">
          <h3>We Take Care Of Your Healthy Life</h3>
          <p>
            Our hospital provides world-class medical facilities with a dedicated team of experienced doctors, modern technology, and compassionate care to keep you and your family healthy.
          </p>
          <a href="#book" className="btn">
            Learn More <span className="fas fa-chevron-right"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;