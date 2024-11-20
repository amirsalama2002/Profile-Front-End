import React from 'react';
import HomeSull from './Home-Sull';
import './Full-Stack.css';
import Tootal from './Tootal';
import Hede from './Hede';
import SliderFull from './Slider-Full';
const FullStack = () => {
    return (
        <div className='full-stack'>
            <Hede/>
            <Tootal/>
            <SliderFull/>
           <HomeSull/>
        </div>
    );
}

export default FullStack;
