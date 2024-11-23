import React from 'react';
import './HomeMore.css';
import ServerData from './ServerData';
import SlideServer from './SlideServer';
import HedeMore from './HedeMore';
const HomeMore = () => {
    return (
        <div className='HomeMore'>
            <ServerData/>
            <SlideServer/>
          <HedeMore/>
        </div>
    );
}

export default HomeMore;
