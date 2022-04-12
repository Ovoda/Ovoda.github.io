import React, { useState } from 'react';
import { pages, listPages } from './content';
import '../../stylesheets/global.scss';
import '../../stylesheets/navbar.scss';
import { FaGripLines } from "react-icons/fa";

function SecondaryNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuClass, setMenuClass] = useState("mobile_header");

    function handleMenu(event: any) {
        event.preventDefault();
        if (isOpen) {
            setMenuClass("mobile_header slide-out");
        } else {
            setMenuClass("mobile_header slide-in");
        }
        setIsOpen(!isOpen);
    }

    return (
        <div className="mobile_navbar">
            <a id="menu_btn" onClick={handleMenu}><FaGripLines className="hamburger" /></a>
            <div className={menuClass}>
                <ul id="mobile_header_links">
                    {
                        pages.map((page: any) => (
                            <li key={page.id.toString()}>
                                <a href={page.href}>{page.icon} {page.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="social_media">Social media</div>
            </div>
        </div >
    );
}

export default SecondaryNavbar;
