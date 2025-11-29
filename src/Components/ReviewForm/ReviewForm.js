import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewForm.css';

function ReviewForm() {
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
    <div>
      <h2>Submit Your Review</h2>
      {!showForm ? (
        <div className="button-group">
          <button onClick={handleButtonClick}>Write a Review</button>
          <button onClick={handleSeeReviews} className="see-reviews-btn">
            See My Reviews
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label>Rating:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= formData.rating ? "star filled" : "star"}
                  onClick={() => setFormData({ ...formData, rating: star })}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  );
}

export default ReviewForm;