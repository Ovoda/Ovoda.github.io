import React from 'react';
import { listPages } from './content';
import '../../stylesheets/global.css';
import '../../stylesheets/navbar.css';
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";


function PrimaryNavbar() {

    return (
        <div className="navbar">
            <p></p>
            <ul id="header_links">
                {listPages}
            </ul>
            <div className="social_media_icons"><FaTwitter href="#" /><FaInstagram /><FaDiscord /></div>
        </div >
    );
}

export default PrimaryNavbar;
