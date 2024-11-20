import React from 'react';
import "./Full-Free.css";
import { Link } from 'react-router-dom';
const FullFree = () => {
    const users = [
        {
          id: 1,
          imgs: "/imgss/free(1).jpg",
          title: "Joe",
          name: "Html, Css",
          free: "Free",
          slide:"15",
          preview:"https://themewagon.github.io/marvel/",
        },
        {
          id: 2,
          imgs: "/imgss/free(2).png",
          title: "Alex Smith",
          name: "Html, Css, Javascript",
          free: "Free",
          slide:"16",
          preview:"https://themewagon.github.io/lighten/index.html",
        },
        {
          id: 3,
          imgs: "/imgss/free(3).jpeg",
          title: "YouTube Clone",
          name: "Html, Css, Javascript",
          free: "Free",
          slide:"17",
          preview:"https://themewagon.github.io/patrix/"
        },
        {
          id: 4,
          imgs: "/imgss/free(4).jpeg",
          title: "Neon Personal Portfolio",
          name: "Html, Css",
          free: "Free",
          slide:"18",
          preview:"https://aslicecode.com/assets/images/products/portfolio3.jpeg"
        },
        {
          id: 5,
          imgs: "/imgss/free(5).png",
          title: "Responsive Website - Free",
          name: "Html, Css, Javascript",
          free: "Free",
          slide:"19",
          preview:"https://themewagon.github.io/proman/"
        },
        {
          id: 6,
          imgs: "/imgss/free(6).png",
          title: "News Website Template",
          name: "Html, Css",
          free: "Free",
          slide:"20",
          preview:"https://themewagon.github.io/clyde/"
        },
        {
            id: 7,
            imgs: "/imgss/free(7).jpg",
            title: "Professional Builder ",
            name: "Html, Css, Javascript",
            free: "Free",
            slide:"21",
            preview:"https://themewagon.github.io/clark/"
          },
          {
            id: 8,
            imgs: "/imgss/free(8).png",
            title: "Cozastore – eCommerce  ",
            name: "Html, Css",
            free: "Free",
            slide:"22",
            preview:"https://themewagon.github.io/meyawo/"
          },
      ];
    return (
        <div className='tootal'>
            <h2>Free Templetes</h2>
    <div className="hoop">
    {users.map(user => (
      <div key={user.id} className="card">
      <img src={user.imgs} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5>{user.title}</h5>
        <p>{user.name}</p>
        <h4> ₹ {user.free}</h4>
      <div className="butt">
       <a className='hoog' href={user.preview} target='__blank'>Preview</a>
       <Link className='button32' to="/countactus" target='__blank'>Downlod {user.slide}</Link>
      </div>
      </div>
    </div>
    ))}
  </div>
        </div>
    );
}

export default FullFree;
