import React from 'react';
import HomeSull from './Home-Sull';
import './Full-Stack.css';
import Hede from './Hede';
import All from "../All/All";
const FullStack = () => {
    return (
        <div className='full-stack'>
            <Hede/>
            <All/>
           <HomeSull/>
        </div>
    );
}

export default FullStack;
