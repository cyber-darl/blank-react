import React,{useEffect} from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import Navbar from '../Navbar/Navbar'; //Importing the navigation bar component
import Notification from '../Notification/Notification';
import "./LandingPage.css"; // Importing the CSS styles for the Landing_Page component

// Defining the Function component Landing_Page
const Landing_Page = () => {


  return (
    <section className="hero-section"> {/* Creating a section with class name 'hero-section' */}
   <Navbar/>
      <div>
        <div  className="flex-hero"> {/* Creating a div with data-aos attribute(from Animate On Scroll CSS Library) and class name 'flex-hero' */}
            <h1>
              Your Health<br/>

              <span className="text-gradient">
                
                Our Responsibility
              </span>
            </h1>
         
              <div className="blob-cont"> {/* Creating a div with class name 'blob-cont' */}
                  <div className="blue blob"></div> {/* Creating a blue blob inside the 'blob-cont' div */}
              </div>
              <div className="blob-cont"> {/* Creating another div with class name 'blob-cont' */}
                  <div className="blue1 blob"></div> {/* Creating a different blue blob inside the second 'blob-cont' div */}
              </div>
            <h4>
           Finding the right doctor shouldn't be complicated. Browse verified specialists, read real patient reviews, compare availability, and book your appointment in minutes
            </h4>
            <Notification/>
            <a href="#services"> {/* Creating a hyperlink to jump to the 'services' section */}
              <Link  className="button" to="/booking-consultation">Get Started</Link>{/* Creating a link with class name 'button to signup page' */}
            </a>
        </div>
      </div>
    </section>
  );
};
export default Landing_Page; // Exporting the Landing_Page component to be used in other parts of the application