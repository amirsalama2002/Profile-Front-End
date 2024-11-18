import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='countact-us'>
               <div className="count">
                  <div className="sd">
                    <h3>Contact Us</h3>
                    <span>Phone : <a>01028975932</a></span>
                    <br/>
                    <span>Email : <a href="https://hamirsalama@gmail.com" target='__blank'>hamirsalama@gmail.com</a></span>
                    <br/>
                    <span>GitHub : <a href="https://GitHub.com/amirsalama2002" target='__blank'>amirsalama2002</a></span>
                    
                     </div>
                  <div className="sd">
                    <h3>Amir Channels  </h3>
                     <a target='__blank' href="https://www.linkedin.com/in/amir-salama-7b3408289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i class="fa-brands fa-linkedin"></i></a>
                     <a target='__blank' href="https://hamirsalama@gmail.com"><i class="fa-brands fa-google"></i></a>
                  
                     <a target='__blank' href="https://GitHub.com/amirsalama2002"><i class="fa-brands fa-github"></i></a>
                     <a target='__blank' href="https://api.whatsapp.com/send/?phone=%2B2001028975932&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i></a>
                     </div>
                     <div className="sd">
                    <h3>Front End</h3>
                  <h4>Html</h4>
                 <h4>CSS</h4>
                 <h4>javaScript</h4>
                 <h4>BootStrap</h4>
                 <h4>Tailwind</h4>
                 <h4>React Js</h4>
                     </div>
                     <div className="sd">
                    <h3>Back End</h3>
                  <h4>PHP</h4>
                 <h4>MySql</h4>
                 <h4>Laravel (MVC)</h4>
                 <h4>RESTful API</h4>
                 <h4>Postman Api</h4>
                     </div>
                  <div className="sd">
                    <h3>Language</h3>
                  <h4>English</h4>
                 <h4>Arab</h4>
                     </div>
               </div>
               <h1> <span>  Amir Salama © </span>جميع الحقوق محفوظة </h1>
        </div>
    );
}

export default Footer;
