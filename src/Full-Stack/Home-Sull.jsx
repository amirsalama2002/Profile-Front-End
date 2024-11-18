import React, { useState } from 'react';
import "./Home-Full.css";
function HomeSull() {
     // Initial slider value (1)
  const [value, setValue] = useState(90);
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };
    // Initial slider value (2)
    const [amir, setamir] = useState(85);
    const falcon = (event) => {
      setamir(event.target.value);
    };
     // Initial slider value (3)
     const [salama, setsalama] = useState(80);
     const mero = (event) => {
       setsalama(event.target.value);
     };

  return (
    <div className='full'>
        <div className="full-value">
            <div className="nm">
      <h2>Front-End Developer ?</h2>
      <input  type="range" min="0" max="100" value={value} onChange={handleSliderChange}style={{ width: '100%' }}/>
      <div className='vo'>Value : {value}%</div>
      </div>
      <div className="nm">
      <h2>Back-End Developer ?</h2>
      <input  type="range" min="0" max="100" value={amir} onChange={falcon}style={{ width: '100%' }}/>
      <div className='vo'>Value : {amir}%</div>
         </div>
         <div className="nm">
      <h2>Full-Stack Developer ?</h2>
      <input  type="range" min="0" max="100" value={salama} onChange={mero}style={{ width: '100%' }}/>
      <div className='vo'>Value : {salama}%</div>
         </div>
      </div>
      {/* <div className="full-name">
        <img src="/imgss/WhatsApp Image 2024-05-30 at 7.11.09 AM.jpeg" alt="" />
      </div> */}
    </div>
  );
}

export default HomeSull;
