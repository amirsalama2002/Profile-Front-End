import React from "react";
import './Contaner.css';
const Countaner = () => {
  return (
    // <div className="contaner">
    //   <div className="hed">
    //     <div className="icon">
    //     <i class="fa-solid fa-percent"></i>
    //       <h6>project management</h6>
    //     </div>
    //     <div className="icon">
    //     <i class="fa-solid fa-code"></i>
    //       <h6>Code Developer</h6>
    //     </div>
    //     <div className="icon">
    //     <i class="fa-solid fa-building-shield"></i>
    //       <h6>Modify Project</h6>
    //     </div>
    //     <div className="icon">
    //     <i class="fa-solid fa-sign-hanging"></i>
    //       <h6>Customer Service</h6>
    //     </div>
  
    //   </div>
    // </div>
    
    <div className="animacthen">
      <div className="box">
      <i class="fa-solid fa-code"></i><br/>
       <p>Front-End Developer!</p>
        </div>
      <div className="box">
      <i class="fa-solid fa-code"></i>
        <p>Back-End Developer!</p>
         </div>
      <div className="box">
      <i class="fa-solid fa-code"></i>
        <p>Full-Stack Developer!</p>
      </div>
    </div>

  );
};

export default Countaner;
