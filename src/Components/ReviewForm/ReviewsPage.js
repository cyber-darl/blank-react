import React, { useState, useEffect } from 'react';
import './ReviewsPage.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);
  }, []);

  const handleDeleteReview = (reviewId) => {
    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  return (
    <div className="reviews-page">
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews yet. Be the first to write one!</p>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <p>Name: {review.name}</p>
            
              </div>
              <div className="review-rating">
                Rating:
                {[...Array(5)].map((_, index) => (
                  <span 
                    key={index} 
                    className={index < review.rating ? "star filled" : "star"}
                  > 
                    ★
                  </span>
                ))}
              </div>
              <p className="review-text">Review: {review.review}</p>
              <button 
                className="delete-btn"
                onClick={() => handleDeleteReview(review.id)}
              >
                Delete Review
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;