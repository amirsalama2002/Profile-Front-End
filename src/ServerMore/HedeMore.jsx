import React from 'react';
import "./HedMore.css";
const HedeMore = () => {
    return (
        <div className='moredata'>
             <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                <i className="fas fa-code"></i>
                                </span>
                                <h3 className="title"> Web Development</h3>
                                <p className="description">Custom websites tailored to your business needs. From responsive designs to user-friendly interfaces, we build websites that perform.</p>
                                <a href="#" className="learn-more">Learn More</a>
                            </div>
                            <span className="circle-before"></span>
              </div>
              {/* 2 */}
              <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                <i class="fas fa-globe"></i>
                                </span>
                                <h3 className="title"> Free Domain + Hosting</h3>
                                <p className="description">Get started online with a free domain and hosting package, including a responsive website and mobile app for your business needs.</p>
                                <a href="#" className="learn-more">Learn More</a>
                            </div>
                            <span className="circle-before"></span>
              </div>
              {/* 2 */}
              {/* 3 */}
              <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                <i class="fas fa-chart-line"></i>
                                </span>
                                <h3 className="title">SEO & Digital Marketing</h3>
                                <p className="description">Boost your online visibility with our SEO and digital marketing strategies designed for measurable results.</p>
                                <a href="#" className="learn-more">Learn More</a>
                            </div>
                            <span className="circle-before"></span>
              </div>
              {/* 3 */}
              {/* 4 */}
              <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                <i class="fas fa-palette"></i>
                                </span>
                                <h3 className="title"> Graphic & UI/UX Design</h3>
                                <p className="description">Delivering eye-catching graphics and intuitive UI/UX designs to enhance user engagement and brand identity.</p>
                                <a href="#" className="learn-more">Learn More</a>
                            </div>
                            <span className="circle-before"></span>
              </div>
              {/* 4 */}
        </div>
    );
}

export default HedeMore;
