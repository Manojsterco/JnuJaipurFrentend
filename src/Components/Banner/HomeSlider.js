import React from 'react';
import bannerimages1 from '../../Images/33hbanner_33hbanner_banner2.webp'
import naacLogoNew from '../../Images/naac-logo-new1.png'
// import OwlCarousel from 'react-owl-carousel2';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


function HomeSlider() {
   
    return (
        <>
           
                <div className="item video-item">
                    <div className="home-video">
                        <img src={bannerimages1} />
                        <div className="banner-content">
                            <div className="c-text-box">
                                <span>Experience</span>
                                <h2>Life</h2>
                                <p>A place which is enriched with holistic cultural growth and Ethics</p>
                            </div>
                            <img alt="naac logo" className="naaclogo" src={naacLogoNew} />
                        </div>
                    </div>
                </div>
              
    


        </>
    )
} export default HomeSlider;