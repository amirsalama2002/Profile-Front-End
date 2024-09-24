import React from 'react';
import './Slide.css';
const Slide = () => {
    return (
        <div className="slide">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/imgss/web-design.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/imgss/custom.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/imgss/app-dev.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/imgss/erp.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/imgss/outsourcing.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/imgss/mg.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
    );
}

export default Slide;
