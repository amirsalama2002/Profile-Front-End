import React from 'react';
import "./Tootal.css";
const Tootal = () => {
    const users = [
        {
          id: 1,
          imgs: "/imgss/Tootal(1).png",
          title: "Joe",
          name: "Html, Css, Javascript, Rectjs",
          free: "180$",
          preview:"https://harshk8853.github.io/rtportfolio/",
        },
        {
          id: 2,
          imgs: "/imgss/Tootal(2).jpg",
          title: "Alex Smith",
          name: "Html, Css, Javascript, Rectjs",
          free: "120$",
          preview:"https://harshk8853.github.io/alex-smith/",
        },
        {
          id: 3,
          imgs: "/imgss/Tootal(3).jpg",
          title: "YouTube Clone",
          name: "Html, Css, Javascript, Rectjs",
          free: "70$",
          preview:"https://harshk8853.github.io/youtubeclone/"
        },
        {
          id: 4,
          imgs: "/imgss/Tootal(4).png",
          title: "Neon Personal Portfolio",
          name: "Html, Css, Javascript, Rectjs",
          free: "30$",
          preview:"https://raw.githubusercontent.com/Harshk8853/portfolio-coding/refs/heads/main/image.png"
        },
        {
          id: 5,
          imgs: "/imgss/Tootal(5).jpg",
          title: "Responsive Website - Free",
          name: "Html, Css, Javascript, Rectjs",
          free: "150$",
          preview:"https://themewagon.github.io/aznews/"
        },
        {
          id: 6,
          imgs: "/imgss/Tootal(6).png",
          title: "News Website Template",
          name: "Html, Css, Javascript, Rectjs",
          free: "199$",
          preview:"https://themewagon.github.io/builerz/"
        },
        {
            id: 7,
            imgs: "/imgss/Tootal(7).jpg",
            title: "Professional Builder ",
            name: "Html, Css, Javascript, Rectjs",
            free: "120$",
            preview:"https://themewagon.github.io/cozastore/"
          },
          {
            id: 8,
            imgs: "/imgss/Tootal(8).jpg",
            title: "Cozastore – eCommerce  ",
            name: "Html, Css, Javascript, Rectjs",
            free: "199$",
            preview:"https://themewagon.github.io/personalportfolio/"
          },
      ];
    return (
        <div className='tootal'>
            <h2>All Templetes</h2>
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
       <a className='button32' href="/" target='__blank'>Downlod</a>
      </div>
      </div>
    </div>
    ))}
  </div>
        </div>
    );
}

export default Tootal;
