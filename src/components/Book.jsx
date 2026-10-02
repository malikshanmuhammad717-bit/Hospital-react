import React from 'react';

const Book = () => {
  return (
    <section className="book" id="book">
      <h1 className="heading">
        <span>Book</span> Now
      </h1>

      <div className="row">
        <div className="image">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
            alt="Book Appointment" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80';
            }}
            style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }}
          />
        </div>

        <form action="">
          <h3>Book Appointment</h3>
          <input type="text" placeholder="Your Name" className="box" />
          <input type="number" placeholder="Your Number" className="box" />
          <input type="email" placeholder="Your Email" className="box" />
          <input type="date" className="box" />
          <input type="submit" value="Book Now" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Book;