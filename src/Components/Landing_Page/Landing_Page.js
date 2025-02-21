import React,{useEffect} from "react"; // Importing the necessary modules from React library
import AOS from 'aos'; //Import script from animate on scroll css library
import 'aos/dist/aos.css'; //Import styles from animate on scroll css library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import Navbar from '../Navbar/Navbar'; //Importing the navigation bar component
import Notification from '../Notification/Notification';
import "./LandingPage.css"; // Importing the CSS styles for the Landing_Page component

// Defining the Function component Landing_Page
const Landing_Page = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="hero-section"> {/* Creating a section with class name 'hero-section' */}
   <Navbar/>
      <div>
        <div data-aos="fade-up" className="flex-hero"> {/* Creating a div with data-aos attribute(from Animate On Scroll CSS Library) and class name 'flex-hero' */}
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Buju bnxn steeze omnis quibusdam non cum rem voluptatem!
            </h4>
            <Notification/>
            <a href="#services"> {/* Creating a hyperlink to jump to the 'services' section */}
              <Link  className="button" to="/Sign_Up">Get Started</Link>{/* Creating a link with class name 'button to signup page' */}
            </a>
        </div>
      </div>
    </section>
  );
};
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
export default Landing_Page; // Exporting the Landing_Page component to be used in other parts of the application