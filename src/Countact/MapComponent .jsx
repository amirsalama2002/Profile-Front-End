import React from 'react';
import './Map.css';
const MapComponent = () => {
    return (
        <div className='mapp'>
            <div className="mapps">
                <div className="data">
                <h1>Web site amir salama</h1>
                <span><i class="fa-solid fa-calendar-days"></i>1 January - 31 December</span>
                <p>8.00 AM - 10.00 PM</p>
                </div>
                <div className="data">
                <span><i class="fa-solid fa-location-dot"></i>Abu Kibir Al Sharqiya +20, EG</span>
                <p>Event Address</p>
                </div>
                <div className="data">
                <span><i class="fa-solid fa-phone"></i>01028975932</span>
                <p>Phone Number</p>
                </div>
                </div>
                <div className="mapps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13719.647521602821!2d31.66135024241815!3d30.720877590004513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f820e19984f66f%3A0x7a5420de223ad515!2sAbu%20Kibir%2C%20Abu%20Kabir%2C%20Al-Sharqia%20Governorate%207234183!5e0!3m2!1sen!2seg!4v1725650498102!5m2!1sen!2seg" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
    );
}

export default MapComponent;
