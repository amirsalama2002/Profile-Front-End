import React from 'react';
import "./Free.css";
import Hede from '../Full-Stack/Hede';
import HomeSull from '../Full-Stack/Home-Sull';
import SliderFull from '../Full-Stack/Slider-Full';
const Free = () => {
    return (
        <div className='free'>
            <Hede/>
             {/* <h1>Welcome To Free</h1> */}
             <SliderFull/>
            <HomeSull/>
        </div>
    );
}

export default Free;
