// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import "./Notification.css";

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showNotification, setShowNotification] = useState(true);
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    //const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
    const storedAppointmentData = storedDoctorData?.name;

    

  /*
    console.log('Stored Username:', storedUsername);
    console.log('Doctor Name Key:', storedDoctorData?.name);
    console.log('Slot:', storedDoctorData?.selectedSlot);
    console.log('Stored Doctor Data:', storedDoctorData);
    console.log('Stored Appointment Data:', storedAppointmentData);*/
const userClosedNotification = localStorage.getItem('hideAppointmentCard');
if (userClosedNotification === 'true') {
  setShowNotification(false);
}
    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  
  }, [doctorData]); // Empty dependency array ensures useEffect runs only once after initial render

const handleClose = () => {
  localStorage.setItem('hideAppointmentCard, true');
  setShowNotification(false);
};
  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && showNotification && (
        <>
        
          <div className="appointment-card">
             <button className="close-button" onClick={handleClose}>
      x
    </button>
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
   
              <p className="appointment-card__message">
                {/* Display doctor's name from doctorData */}
                <p><strong>Doctor:</strong> {doctorData?.doctorName}</p>
                <p><strong>Specialty:</strong> {doctorData?.speciality}</p>
                <p> <strong>name:</strong> {doctorData?.name}</p>
                <p><strong>Phone:</strong> {doctorData?.phoneNumber}</p>
                <p><strong>Date of Appointment:</strong> {doctorData?.date}</p>
                <p><strong>Timeslot:</strong> {doctorData?.selectedSlot}</p>
                
               
                
                
                
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;