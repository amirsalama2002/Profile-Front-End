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
            {/* <h1>Welcome To All</h1> */}
            <Tootal/>
            <SliderFull/>
           <HomeSull/>
        </div>
    );
}

export default FullStack;
