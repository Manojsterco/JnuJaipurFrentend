import React from "react";
import jnulogo from '../../Images/jnu-logo.png';
import mjnulogo from '../../Images/m-jnu-logo.png';
// import whatsapp from '../../Images/whatsapp.'
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <header className="main-section scrolling-navbar" id="mainNav">
                <div className="container-fluid">
                    <div className="wed-logo mainlogo_withnaac">
                        <Link to="/" className="main_logo">
                            <img src={jnulogo} alt="Jaipur National University" className="desktop-logo" />
                            <img src={mjnulogo} alt="Jaipur National University" className="mobile-logo" />
                        </Link>
                    </div>
                    <div className="main-menu">
                        <div className="whatsupicon">
                            <span className="about-menu apply_btn wp-icon1">
                                <Link to="#" target="_blank" className="mm-arr applyOnline wp-icon whatsapp">
                                    {/* <img alt="whats app" src={whatsapp} /> */}
                                </Link>
                            </span>
                            <ul className="wpicon">
                                <li className="drop-down_menu about-menu ">
                                    <Link to="javascript:void(0)" className="mm-arr Admissions-menu"> Admissions <b> 2024</b></Link> </li>
                                <li className="drop-down_menu about-menu"><Link to="programmes/ug-programmes" className="mm-arr"> Academics</Link></li>
                                <li className="drop-down_menu about-menu "><Link to="javascript:void(0)" className="mm-arr"> Life @ JNU</Link></li>
                                <li className="drop-down_menu about-menu "><Link to="javascript:void(0)" className="mm-arr"> About Us</Link>
                                </li>

                                <li className="about-menu inform"><Link to="javascript:void(0)" className="mm-arr">Information Under<br />Clause B.1.11</Link> </li>
                                <li className="about-menu apply_btn"><a className="mm-arr" href="javascript:void(0)">Contact us</a> </li>
                                <li className="option searchnav" id="show_search"><Link to="#" className="showsearch">Search</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;