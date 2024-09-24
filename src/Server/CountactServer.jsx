import React from 'react';
import './CountactServer.css';
const CountactServer = () => {
    const users = [
        {
          id: 1,
          title: "Server Auction",
          name: "Prices drop & excitement mounts. Place bids in our Server Auction!",
          imgs: "/imgss/web-design.png",
           price:"Starting at € 35.70"
        },
        {
          id: 2,
          title: "Dedicated Server",
          name: "Dedicated root servers to meet any need. Top performance with an excellent connection.",
          imgs: "/imgss/app-dev.png",
           price:"Starting at € 54.74"
        },
        {
          id: 3,
          title: "Cloud",
          name: "A little money gets you lots of cloud. Flexible cloud servers with high-end-hardware.",
          imgs: "/imgss/custom.png",
           price:"Starting at € 4.51"
        },
        {
          id: 4,
          title: "Managed Servers",
          name: "Stress-free server connection. We‘ll take care of the technical stuff.",
          imgs: "/imgss/erp.png",
           price:"Starting at € 40.46"
        },
        {
          id: 5,
          title: "Web hosting",
          name: "The quick and cheap way to your own homepage. Prices for beginners and businesses.",
          imgs: "/imgss/outsourcing.png",
           price:"Starting at € 2.09"
        },
        {
          id: 6,
          title: "Storage Share",
          name: "Easily store and share files. Access your data at any time and from any place with Storage Share.",
          imgs: "/imgss/ecommerce.png",
          price:"Starting at € 5.11"
        },
      ];

    return (
        <div className='countactserver'>
             <div className="cen">
             <h1>Product overview</h1>
             </div>
             <div className="hed">
         {users.map(user => (
         <div key={user.id} className="card">
         <img src={user.imgs} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{user.title}</h5>
        <p className="card-text">{user.name}</p>
        <div className="price">
            <h3>{user.price}</h3>
            <button  className='btn btn-danger'>OverView</button>
        </div>
      </div>
    </div>
    ))}
  </div>
        </div>
    );
}

export default CountactServer;
