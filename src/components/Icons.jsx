import React from 'react';

const statsData = [
  { id: 1, icon: 'fas fa-user-md', count: '140+', label: 'Doctors at Work' },
  { id: 2, icon: 'fas fa-users', count: '1040+', label: 'Satisfied Patients' },
  { id: 3, icon: 'fas fa-procedures', count: '500+', label: 'Bed Facility' },
  { id: 4, icon: 'fas fa-hospital', count: '80+', label: 'Available Hospitals' },
];

const Icons = () => {
  return (
    <section className="icons-container">
      {statsData.map((stat) => (
        <div key={stat.id} className="icons">
          <i className={stat.icon}></i>
          <h3>{stat.count}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Icons;