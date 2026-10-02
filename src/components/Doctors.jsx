import React from 'react';

const doctorsData = [
  { 
    id: 1, 
    name: 'Dr. John Doe', 
    role: 'Expert Doctor', 
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 2, 
    name: 'Dr. Jane Smith', 
    role: 'Cardiologist', 
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 3, 
    name: 'Dr. Mark Wilson', 
    role: 'Pediatrician', 
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 4, 
    name: 'Dr. Sarah Connor', 
    role: 'Neurologist', 
    img: 'https://images.unsplash.com/photo-1594824813566-88855ce78d22?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 5, 
    name: 'Dr. Robert Brown', 
    role: 'Surgeon', 
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 6, 
    name: 'Dr. Emily Davis', 
    role: 'Dermatologist', 
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80' 
  },
];

const Doctors = () => {
  return (
    <section className="doctors" id="doctors">
      <h1 className="heading">
        Our <span>Doctors</span>
      </h1>

      <div className="box-container">
        {doctorsData.map((doc) => (
          <div key={doc.id} className="box">
            <img 
              src={doc.img} 
              alt={doc.name} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80';
              }}
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
            />
            <h3>{doc.name}</h3>
            <span>{doc.role}</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;