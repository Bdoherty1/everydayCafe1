
// // Home.jsx
// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Locations from './Locations';
// import Hours from './Hours';
// import './Home.css';
// import everydayCup from '../Assets/everyday-cup.jpeg'
// import FlavorsOfTheMonth from './FlavorsOfMonth';

// const Home = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check if the device width is less than or equal to 600px (iPhone screen width)
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 600);
//     };

//     handleResize();

//     // Add event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Clean up event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="home-container">
//       <Navbar />
//       {isMobile ? (
//         <div className="mobile-view">
//           {/* Render carousel images for mobile view */}
//           <div className="carousel-image" style={{ backgroundImage: `url(${everydayCup})` }}></div>
//         </div>
//       ) : (
//         <div className="desktop-container">
//           {/* Render carousel for larger screens */}
//           <div className="carousel-image" style={{ backgroundImage: `url(${everydayCup})` }}></div>
//         </div>
//       )}
//       <div className="content-container">
//         <FlavorsOfTheMonth /> {/* Render FlavorsOfTheMonth component */}
//         {/* Render Locations and Hours components */}
//         <div className="location-hours-columns">
//           <Locations />
//           <Hours />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Locations from './Locations';
import Hours from './Hours';
import './Home.css';
import everydayCup from '../Assets/everyday-cup.jpeg';
import everydayKerry from '../Assets/everydayKerry.png';
import FlavorsOfTheMonth from './FlavorsOfMonth';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [everydayCup, everydayKerry];
  const intervalTime = 5000; // Interval time for automatic image change

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Automatically change images at a specific interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="carousel-container">
        <div className="carousel-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
          {/* Render arrow buttons */}
          <div className="arrow-container">
            <button className="prev-arrow" onClick={handlePrevImage}>{'<'}</button>
            <button className="next-arrow" onClick={handleNextImage}>{'>'}</button>
          </div>
          {/* Overlay Flavors of the Month component on desktop */}
          {!isMobile && (
            <div className="flavors-overlay">
              <FlavorsOfTheMonth />
            </div>
          )}
        </div>
      </div>
      {/* Render Flavors of the Month component below the carousel on mobile */}
      {isMobile && (
        <div className="mobile-flavors-container">
          <FlavorsOfTheMonth />
        </div>
      )}
      <div className="content-container">
        <div className="location-hours-columns">
          <Locations />
          <Hours />
        </div>
      </div>
    </div>
  );
};

export default Home;

