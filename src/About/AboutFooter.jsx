import React from 'react';
import './AboutFooter.css';
const AboutFooter = () => {
    return (
        <div className='aboutfot'>
              <div className="flk">
                <div className="monn">
                    <div className="toglr">
                    <i class="fa-solid fa-paperclip"></i>
                    <p>90%</p>
                    <h6>Front End</h6>
                    </div>
                    <div className="toglr">
                    <i class="fa-solid fa-code"></i>
                    <p>85%</p>
                    <h6>Back End</h6>
                    </div>
                    <div className="toglr">
                    <i class="fa-solid fa-paperclip"></i>
                    <p>80%</p>
                    <h6>Full Stack</h6>
                  </div>
                </div>
                <div className="mon">
                    <h3>Servers</h3>
                    <h5>We provide the best service to the website, including free hosting and code skills. We are a team and we love to help companies</h5>
                    <h4> We provide code Frontendusing html, css, javascript ,Tailwind, bootstrap reactjs backend php and mysql and Laravel (MVC) and RESTful API and Postman Api</h4>
                </div>
              </div>
        </div>
    );
}

export default AboutFooter;
