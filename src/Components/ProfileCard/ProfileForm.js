import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import './ProfileForm.css'; // Make sure to import the CSS!

const ProfileForm = () => {
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); 

      if (!authtoken) {
        navigate("/login");
      } else {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Email": email, 
          },
        });
        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
        } else {
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); 

      if (!authtoken || !email) {
        navigate("/login");
        return;
      }

      const payload = { ...updatedDetails };
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          "Email": email,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);

        setUserDetails(updatedDetails);
        setEditMode(false);
        alert(`Profile Updated Successfully!`);
        navigate("/");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      {editMode ? (
        <form className="profile-card" onSubmit={handleSubmit}>
          <h2 className="profile-title">Edit Profile</h2>
          
          <div className="profile-form-group">
            <label className="profile-label">Email</label>
            <input
              className="profile-input profile-disabled"
              type="email"
              name="email"
              value={userDetails.email || ''}
              disabled
            />
          </div>
          
          <div className="profile-form-group">
            <label className="profile-label">Name</label>
            <input
              className="profile-input"
              type="text"
              name="name"
              value={updatedDetails.name || ''}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="profile-form-group">
            <label className="profile-label">Phone</label>
            <input
              className="profile-input"
              type="text"
              name="phone"
              value={updatedDetails.phone || ''}
              onChange={handleInputChange}
            />
          </div>

          <button className="profile-btn profile-btn-primary" type="submit">
            Save Changes
          </button>
        </form>
      ) : (
        <div className="profile-card">
          <h1 className="profile-title">Welcome, {userDetails.name}</h1>
          <div className="profile-info-block">
            <p className="profile-text"><b>Email:</b> {userDetails.email}</p>
            <p className="profile-text"><b>Phone:</b> {userDetails.phone}</p>
          </div>
          <button className="profile-btn profile-btn-primary" onClick={handleEdit}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;