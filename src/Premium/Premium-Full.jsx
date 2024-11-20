import React from 'react';
import "./Premium-Full.css";
import { Link } from 'react-router-dom';
const PremiumFull = () => {
    const users = [
        {
          id: 1,
          imgs: "/imgss/Tootal(1).png",
          title: "Joe",
          name: "Html, Css, Javascript, Rectjs",
          free: "180$",
          descount: "149$",
          slide:"1",
          preview:"https://harshk8853.github.io/rtportfolio/",
        },
        {
          id: 2,
          imgs: "/imgss/Tootal(2).jpg",
          title: "Alex Smith",
          name: "Html, Css, Javascript, Rectjs",
          free: "120$",
          descount: "99$",
          slide:"2",
          preview:"https://harshk8853.github.io/alex-smith/",
        },
        {
          id: 3,
          imgs: "/imgss/Tootal(3).jpg",
          title: "YouTube Clone",
          name: "Html, Css, Javascript, Rectjs",
          free: "70$",
          descount: "49$",
          slide:"3",
          preview:"https://harshk8853.github.io/youtubeclone/"
        },
        {
          id: 4,
          imgs: "/imgss/Tootal(4).png",
          title: "Neon Personal Portfolio",
          name: "Html, Css, Javascript, Rectjs",
          free: "30$",
          descount: "19$",
          slide:"4",
          preview:"https://raw.githubusercontent.com/Harshk8853/portfolio-coding/refs/heads/main/image.png"
        },
        {
          id: 5,
          imgs: "/imgss/Tootal(5).jpg",
          title: "Responsive Website - Free",
          name: "Html, Css, Javascript, Rectjs",
          free: "150$",
          descount: "129$",
          slide:"5",
          preview:"https://themewagon.github.io/aznews/"
        },
        {
          id: 6,
          imgs: "/imgss/Tootal(6).png",
          title: "News Website Template",
          name: "Html, Css, Javascript, Rectjs",
          free: "199$",
          descount: "149$",
          slide:"6",
          preview:"https://themewagon.github.io/builerz/"
        },
        {
            id: 7,
            imgs: "/imgss/Tootal(7).jpg",
            title: "Professional Builder ",
            name: "Html, Css, Javascript, Rectjs",
            free: "120$",
            descount: "99$",
            slide:"7",
            preview:"https://themewagon.github.io/cozastore/"
          },
          {
            id: 8,
            imgs: "/imgss/Tootal(8).jpg",
            title: "Cozastore – eCommerce  ",
            name: "Html, Css, Javascript, Rectjs",
            free: "199$",
            descount: "169$",
            slide:"8",
            preview:"https://themewagon.github.io/personalportfolio/"
          },
      ];
    return (
        <div className='tootal'>
            <h2>Discount Templetes</h2>
    <div className="hoop">
    {users.map(user => (
      <div key={user.id} className="card">
      <img src={user.imgs} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5>{user.title}</h5>
        <p>{user.name}</p>
        <h4><del>₹ {user.free}</del>  ₹ {user.descount} </h4>
      <div className="butt">
       <a className='hoog' href={user.preview} target='__blank'>Preview</a>
       <Link className='button32' to="/countactus" target='__blank'>Downlod ({user.slide})</Link>
      </div>
      </div>
    </div>
    ))}
  </div>
        </div>
    );
}

export default PremiumFull;
