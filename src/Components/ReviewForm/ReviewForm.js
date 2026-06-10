import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './ReviewForm.css';

const ReviewForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });
  
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSeeReviews = () => {
    navigate('/reviewspage');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
      const newReview = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString()
      };
      
      localStorage.setItem('reviews', JSON.stringify([...existingReviews, newReview]));
      setFormData({ name: '', review: '', rating: 0 });
      setShowWarning(false);
      setShowForm(false);
      alert('Review submitted successfully!');
    } else {
      setShowWarning(true);
    }
  };

  return (

    <div className="review-container">
       <Navbar />
      <h2 className="review-title">Submit Your Review</h2>
      
      {!showForm ? (
        <div className="review-button-group">
          <button className="review-btn review-btn-primary" onClick={handleButtonClick}>
            Write a Review
          </button>
          <button className="review-btn review-btn-secondary" onClick={handleSeeReviews}>
            See My Reviews
          </button>
        </div>
      ) : (
        <form className="review-form-box" onSubmit={handleSubmit}>
          <h2 className="review-title">Give Your Feedback</h2>
          
          {showWarning && <div className="review-warning">Please fill out all fields.</div>}
          
          <div className="review-form-group">
            <label className="review-label" htmlFor="name">Name:</label>
            <input 
              className="review-input" 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="review-form-group">
            <label className="review-label" htmlFor="review">Review:</label>
            <textarea 
              className="review-textarea" 
              id="review" 
              name="review" 
              value={formData.review} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="review-form-group">
            <label className="review-label">Rating:</label>
            <div className="review-star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`review-star ${star <= formData.rating ? "filled" : ""}`}
                  onClick={() => setFormData({ ...formData, rating: star })}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          
          <button className="review-btn review-btn-primary" type="submit">
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
}

export default ReviewForm;