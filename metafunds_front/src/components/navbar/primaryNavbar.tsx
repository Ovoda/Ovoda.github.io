import React from 'react';
import { listPages } from './content';
import '../../stylesheets/global.css';
import '../../stylesheets/navbar.css';

function PrimaryNavbar() {

    return (
        <div className="navbar">
            <p>Logo</p>
            <ul id="header_links">
                {listPages}
            </ul>
            <p>Social Media</p>
        </div >
    );
}

export default PrimaryNavbar;
