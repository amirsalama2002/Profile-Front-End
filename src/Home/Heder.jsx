import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
const Heder = () =>{
    return(
        <div className='home'>
          <div className="hed">
            <div className="clom">
            <h1> we are <strong>the creative <br/> transformation </strong>company</h1>
                <p>Using the power of creativity to build better futures <br/>
                for our people planet clients and communities
                </p>
                <Link to="/full-stack" className='btn'>Full Stack Developer</Link>
            </div>
          </div>
        </div>
    );
};

export default Heder;