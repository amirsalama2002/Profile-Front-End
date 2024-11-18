import React from 'react';
import "./Premium.css";
import Hede from '../Full-Stack/Hede';
import HomeSull from '../Full-Stack/Home-Sull';
import SliderFull from '../Full-Stack/Slider-Full';
const Premium = () => {
    return (
        <div className='premium'>
            <Hede/>
            {/* <h1>Welcome for Premium</h1> */}
            <SliderFull/>
            <HomeSull/>
        </div>
    );
}

export default Premium;
