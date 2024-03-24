import React from "react";
import './styles.css'
import Logo from "./Logo";
import Subscribe from "./btn_components/Subscribe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faFacebook, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="footer">
            <div className="section1">
                <Logo />
                <p className="section-elements">Our vision to to equip modern explorers with cutting edge,functional, and stylish bags that elevate every adventure</p>
                <p className="copyright">@2024 Horizone. All rights reserved.</p>
            </div>
            <div className="section2">
                <p className="section-title">About</p>
                <p className="section-elements">About Us</p>
                <p className="section-elements">Blog</p>
                <p className="section-elements">Career</p>
            </div>
            <div className="section3">
                <p className="section-title">Support</p>
                <p className="section-elements">Contact Us</p>
                <p className="section-elements">Return</p>
                <p className="section-elements">FAQ</p>
            </div>
            <div className="section4">
                <p className="section-title">Get Updates</p>
                <p><Subscribe /></p>
                <p>
                    <span><FontAwesomeIcon className="footer-icons" icon={faXTwitter} /></span>
                    <span><FontAwesomeIcon className="footer-icons" icon={faInstagram} /></span>
                    <span><FontAwesomeIcon className="footer-icons" icon={faFacebook} /></span>
                    <span><FontAwesomeIcon className="footer-icons" icon={faDiscord} /></span>
                    <span><FontAwesomeIcon className="footer-icons" icon={faTiktok} /></span>
                </p>
                <p className="agreement"><span>Privacy Policy </span> <span> Terms of Service</span></p>
            </div>
        </div>
    )
}

export default Footer;