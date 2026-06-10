import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    
    const handleClick = () => setClick(!click);
    
    // NEW: Function to force the mobile menu to close after clicking a link
    const closeMobileMenu = () => setClick(false);
    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
       
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        closeMobileMenu(); // Close menu on logout
        window.location.reload();
    }

    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }

    useEffect(() => { 
      const storedName = sessionStorage.getItem("name");
      const storedEmail = sessionStorage.getItem("email");
      
      if (storedEmail) {
            setIsLoggedIn(true);
            setUsername(storedName || storedEmail);
          }
        }, []);

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/" onClick={closeMobileMenu}>
        StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i></Link>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          {/* Added onClick to close the menu */}
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li className="link">
          <Link to="/booking-consultation" onClick={closeMobileMenu}>Book a Consultation</Link>
        </li>
        <li className="link">
         <Link to="/reviews" onClick={closeMobileMenu}>Reviews</Link>
        </li>

        <li
          className="link dropdowns"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="#" className="dropdown-toggle">Profile</Link>
          {isDropdownOpen && (
            <ul className="dropdown-menus">
              <li>
                <Link to="/profileform" className="dropdown-items" onClick={closeMobileMenu}>View Profile</Link>
              </li>
              <li>
                <Link to="/reports" className="dropdown-items" onClick={closeMobileMenu}>Check Reports</Link>
              </li>
            </ul>
          )}
        </li>
        
        {isLoggedIn ? (
          <>
            <li> Welcome, {username} </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/Sign_up" onClick={closeMobileMenu}>
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login" onClick={closeMobileMenu}>
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;