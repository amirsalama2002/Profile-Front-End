// import React from 'react';
// import './Slide.css';
// const Slide = () => {
//     return (
//         <div className="slide">
//       <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="/imgss/web-design.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="/imgss/custom.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="/imgss/app-dev.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="/imgss/erp.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="/imgss/outsourcing.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="/imgss/mg.webp" className="d-block w-100" alt="..."/>
//     </div>
//   </div>
  
//   <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
//       </div>
//     );
// }
// export default Slide;


import React, { useState } from 'react';
import './Slide.css';
const Slide = () => {
  // List of image URLs
  const images = [
    "/imgss/mero(4).avif",
    "/imgss/mero(1).jpg",
    "/imgss/mero(2).webp",
    "/imgss/mero(3).jfif",
    "/imgss/mero(5).jpg",
    "/imgss/mero(6).png",
    "/imgss/mero(7).webp",
    "/imgss/mero(8).jpg",
    "/imgss/mero(9).avif",
    "/imgss/mero(10).avif"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="ali">
      <div className="mostafe">
        <div className="hen">
         <h1>Services:</h1>
        <p>1 -Providing the best website to the client at the highest level with distinguished service and hosting at the highest level </p>
        <p>2 -Providing communication throughout the day. Providing a website at an excellent cost and a distinctive style</p>
        <p>3 -Providing post-website service to the customer, whether it is a modification to the website</p>
        <p>4 -Providing the best service to the customer on the website by explaining the website</p>
        </div>
      </div>
    <div className="slider-container">
      <div className="image-wrapper">
        <img src={images[currentIndex]} alt="slider" />
      </div>
      <div className="navigation-buttons">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>

   </div>
  );
};

export default Slide;
