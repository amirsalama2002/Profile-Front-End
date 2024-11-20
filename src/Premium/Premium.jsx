import React from 'react';
import "./Premium.css";
import Hede from '../Full-Stack/Hede';
import HomeSull from '../Full-Stack/Home-Sull';
import SliderFull from '../Full-Stack/Slider-Full';
import PremiumFull from './Premium-Full';
const Premium = () => {
    return (
        <div className='premium'>
            <Hede/>
            <PremiumFull/>
            <SliderFull/>
            <HomeSull/>
        </div>
    );
}

export default Premium;
