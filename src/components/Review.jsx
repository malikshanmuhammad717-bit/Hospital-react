import React from 'react';

const reviewsData = [
  { id: 1, name: 'Ali Khan', text: 'Excellent services! The doctors and medical staff are very friendly and professional.', stars: 5 },
  { id: 2, name: 'Sara Ahmed', text: 'Very clean hospital and smooth appointment booking process. Highly recommended!', stars: 5 },
  { id: 3, name: 'Usman Malik', text: 'Great care and quick response. Loved the treatment and facility.', stars: 4 },
];

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        Client's <span>Review</span>
      </h1>

      <div className="box-container">
        {reviewsData.map((rev) => (
          <div key={rev.id} className="box">
            <i className="fas fa-quote-right" style={{ fontSize: '3rem', color: '#16a085' }}></i>
            <h3 style={{ marginTop: '1rem' }}>{rev.name}</h3>
            <div className="stars" style={{ color: '#ffb703', margin: '0.5rem 0' }}>
              {[...Array(rev.stars)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p className="text">{rev.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;