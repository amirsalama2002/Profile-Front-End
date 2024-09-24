import React from "react";
import './Count.css';
const Count = () => {
  const users = [
    {
      id: 1,
      title: "Website Design",
      name: "We offer you a website design service that combines creativity and modern technology. Whether you are starting new projects or want to improve your site, we provide you with a customized solution that reflects your brand identity and meets the needs of your .",
      email: "john.doe@example.com",
      imgs: "/imgss/web-design.png"
    },
    {
      id: 2,
      title: "Application Development",
      name: "One of the main services provided by It Legend Company, smart phone applications are considered one of the most important and best means of communication and interaction with customers and users in the current digital age.",
      email: "jane.smith@example.com",
      imgs: "/imgss/app-dev.png"
    },
    {
      id: 3,
      title: "Information Technology",
      name: "it legend company provides information technology consulting services, which is an important service aimed at helping customers understand and analyze their technological challenges and provide them with appropriate solutions.",
      email: "bob.johnson@example.com",
      imgs: "/imgss/custom.png"
    },
    {
      id: 4,
      title: "Corporate management",
      name: "We provide integrated software systems that help companies manage and organize all their operations, from planning to implementation, using the Odoo system, which is distinguished by its ability to adapt to different businesses.",
      email: "bob.johnson@example.com",
      imgs: "/imgss/erp.png"
    },
    {
      id: 5,
      title: "programming Development",
      name: "We provide specialized software development service as an innovative and specialized software solution that meets the basics accurately and effectively by creating customized application programs according to the client’s requirements.",
      email: "bob.johnson@example.com",
      imgs: "/imgss/outsourcing.png"
    },
    {
      id: 6,
      title: "Electronic store design",
      name: "It provides the service of designing and developing electronic stores, which is the process of creating and preparing an online platform that enables companies and individuals to display and sell all their products or services via the web",
      email: "bob.johnson@example.com",
      imgs: "/imgss/ecommerce.png"
    },
  ];
  return (
    <div className="count">
    <div className="hed">
    {users.map(user => (
      <div key={user.id} className="card">
      <img src={user.imgs} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{user.title}</h5>
        <p className="card-text">{user.name}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    ))}
  </div>
  </div>
  );
};

export default Count;
