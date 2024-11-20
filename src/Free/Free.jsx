import React from 'react';
import "./Free.css";
import Hede from '../Full-Stack/Hede';
import HomeSull from '../Full-Stack/Home-Sull';
import SliderFull from '../Full-Stack/Slider-Full';
import FullFree from './Full-Free';
const Free = () => {
    return (
        <div className='free'>
            <Hede/>
              <FullFree/>
             <SliderFull/>
            <HomeSull/>
        </div>
    );
}

export default Free;
