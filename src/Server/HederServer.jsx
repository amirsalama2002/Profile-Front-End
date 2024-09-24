import React from 'react';
import './HederServer.css';
import { Link } from "react-router-dom";
const HederServer = () => {
    return (
        <div className='hederserver'>
           <div className="heserver">
           <div className="hedserver">
              <h1>Providing programming skills, <br/> <span>New Location</span></h1>
              <h5>With amir in egypt, we achieve
              lower <br/> latency on a global scale.</h5>
             <button>More Data</button>
             {/* <Link className='button' to='/homemore'>More</Link> */}
           </div>
           </div>
        </div>
    );
}

export default HederServer;
