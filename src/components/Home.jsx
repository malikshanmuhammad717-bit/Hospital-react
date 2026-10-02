import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="image">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
          alt="Hospital Home" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80';
          }}
          style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }}
        />
      </div>

      <div className="content">
        <h3>Stay Safe, Stay Healthy</h3>
        <p>
          We provide the best medical services with expert doctors and modern equipment to ensure your well-being.
        </p>
        <a href="#book" className="btn">
          Contact Us <span className="fas fa-chevron-right"></span>
        </a>
      </div>
    </section>
  );
};

export default Home;