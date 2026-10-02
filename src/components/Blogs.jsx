import React from 'react';

const blogData = [
  { id: 1, title: 'Healthy Living & Habits', date: '1st Oct, 2026', desc: 'Simple daily habits that boost your immune system and overall health.' },
  { id: 2, title: 'Importance of Regular Checkups', date: '15th Sep, 2026', desc: 'Why visiting your doctor regularly helps prevent major health issues.' },
  { id: 3, title: 'Nutrition & Wellness Guide', date: '20th Aug, 2026', desc: 'A comprehensive guide on balanced diet and essential nutrients.' },
];

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        Our <span>Blogs</span>
      </h1>

      <div className="box-container">
        {blogData.map((blog) => (
          <div key={blog.id} className="box">
            <div className="content">
              <div className="icon" style={{ margin: '1rem 0', color: '#16a085' }}>
                <a href="#"><i className="fas fa-calendar"></i> {blog.date}</a>
              </div>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <a href="#" className="btn">
                Read More <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;