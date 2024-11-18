import React from 'react';
import { Link } from "react-router-dom";
import './Hede.css';
const Hede = () => {
    return (
        <div className='hede'>
            <div class="badge">A Slice Code</div>
        <h1 id="dynamic-heading">
        Free <span class="highlight"> Portfolio </span>
        &amp; <span class="highlight"> Website </span> Templetes
      </h1>
      <p>Browse, clone, and customize thousands of websites #aslicecode.</p>

      <div className="good">
        <div className="kll">
        <Link className='lo' to="/all">All</Link>
        <Link className='lo' to="/free">Free</Link>
        <Link className='lo' to="/free">
        <span class="name"> <i class="fa-solid fa-bolt-lightning" style={{color: "rgb(255, 145, 0)"}}></i> &nbsp; Premium</span>
        </Link>
        </div>
        </div>

        </div>
    );
}

export default Hede;
