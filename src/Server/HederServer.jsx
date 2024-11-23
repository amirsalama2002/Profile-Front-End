import React from 'react';
import './HederServer.css';
import { Link } from "react-router-dom";
const HederServer = () => {
    return (
        <div className='hederserver'>
           <div className="heserver">
           <div className="hedserver">
              <h1>Providing programming skills  <br/> <span> New Location</span></h1>
              <h5>With Amir in Egypt we achieve less
              Cost on a global scale.</h5>
             <Link className='btn' to='/homemore'>More Data</Link>
           </div>
           </div>
        </div>
    );
}

export default HederServer;
