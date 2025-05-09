// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Notification from './Components/Notification/Notification';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import Chilling from './Components/Chilling';
import BookingConsultation from './Components/BookingConsultation';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ProfileForm from './Components/ProfileCard/ProfileForm';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
      
          {/* Set up the Routes for different pages */}
  <Routes>
      {/* Define individual Route components for different pages */}
                <Route path="/" element={<Landing_Page/>}/> {/* App renders path ="/" as the home page*/}
                <Route path ="/Sign_Up" element={<Sign_Up/>} />
                <Route path ="/Login" element={<Login/>} />
                <Route path ="/Navbar" element={<Navbar/>} />
                 <Route path ="/Notification" element={<Notification />} />
                 <Route path ="/DoctorCard" element={<DoctorCard/>} />
                 <Route path ="/profile" element={<ProfileCard/>} />
                 <Route path ="/profileform" element={<ProfileForm/>} />

                   <Route path="/booking-consultation" element={<BookingConsultation />} />
              </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;

