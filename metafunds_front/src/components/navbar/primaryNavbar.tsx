import React from 'react';
import { listPages } from './content';
import '../../stylesheets/global.scss';
import '../../stylesheets/navbar.scss';
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import logo from './metafunds_logo.svg';

function PrimaryNavbar() {

    return (
        <div className="navbar">
            {/* <img src={logo} alt="logo"></img> */}

            <ul id="header_links">
                {listPages}
            </ul>
            <div className="social_media_icons">
                <FaTwitter href="#" className="primary_icon" />
                <FaInstagram className="primary_icon" />
                <FaDiscord className="primary_icon" />
            </div>
        </div >
    );
}

export default PrimaryNavbar;
