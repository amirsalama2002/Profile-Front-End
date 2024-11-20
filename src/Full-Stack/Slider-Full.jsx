import React, { useState, useEffect } from 'react';
import './Slider-Full.css'; // Import the CSS for styles
import { Link } from 'react-router-dom';

const SliderFull = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
         id: 1,
         imageUrl: '/imgss/Tootal(9).png',
         title:'Startups Services Website',
         name:'HTML, CSS, Javascript, Bootstrap, Rectjs',
         free:'100$',
         link:'https://themewagon.github.io/onix/',
         caption: '9' 
    },
    {
      id: 2,
      imageUrl: '/imgss/Tootal(10).webp',
      title:'Organic Foods',
      name:'HTML, CSS, Javascript, Bootstrap, Rectjs',
      free:'199$',
      link:'https://themewagon.github.io/organic/',
      caption: '10'
     },
    {
      id: 3,
      imageUrl: '/imgss/Tootal(11).png',
      title:'JANE Portfolio',
      name:'HTML, CSS, Javascript, Bootstrap, Rectjs',
      free:'150$',
      link:'https://raw.githubusercontent.com/Harshk8853/jane-portfolio/refs/heads/main/iamgee.png',
      caption: '11' 
    },
    {
      id: 4,
      imageUrl: '/imgss/Tootal(12).webp',
      title:'Hudson Portfolio',
      name:'HTML, CSS, Javascript, Bootstrap, Rectjs',
      free:'69$',
      link:'https://themewagon.github.io/Hudson/',
      caption: '12' 
    },
    {
      id: 5,
      imageUrl: './imgss/Tootal(13).png',
      title:'Restaurant Website – Free Bootstrap Template',
      name:'HTML, CSS, Javascript, Bootstrap, Rectjs',
      free:'199$',
      link:'https://themewagon.github.io/restoran/',
      caption: '13' 
    },
    { 
      id: 6,
      imageUrl: '/imgss/Tootal(14).png',
      title:'E-Commerce Website Template',
      name:'HTML, CSS, Javascript, Bootstrap, Rectjs',
      free:'250$',
      link:'https://themewagon.github.io/karma/',
      caption: '14'
     },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="tark">
        <h2>Letest Templetes</h2>
    <div className="ahmed">
        <div className="templet">
           <h4>We are Developers</h4>
           <h5>We Can Design Anything You Want</h5>
           <h6>At Spandex, we specialize in transforming your ideas into powerful digital experiences. Our expertise spans across web development, software solutions, and custom design tailored to meet your needs.</h6>
           <p>Our dedicated team ensures every project reflects excellence and creativity.</p>
           <h1 class="hero-title">
    Your Business Deserves the Best -<span class="highlight"> Create Your Website Today</span>
  </h1>
  <h3>Discover cutting-edge technology and strategies designed to streamline your operations and enhance your growth. Join us on a journey to innovation!</h3>
        </div>
    <div className="slider-container">
      <div className="slider">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 1s ease-in-out',
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img src={slide.imageUrl} alt={slide.caption} />
              <div className="caption">
                <h4>{slide.title}</h4>
                <h3>{slide.name}</h3>
                <p> ₹ {slide.free}</p>
                <div className="mo">
                    <a className='nm' target='__blank' href={slide.link}>Preview</a>
                    <Link className='do' to="/countactus">Downlod ({slide.caption})</Link>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SliderFull;
