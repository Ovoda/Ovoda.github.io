import React from 'react';
import '../stylesheets/global.css';
import '../stylesheets/navbar.css';

const pages = [
    {
        id: "0",
        name: "Metadonate",
        href: "#",
    },
    {
        id: "1",
        name: "About Us",
        href: "#",
    },
    {
        id: "2",
        name: "Gallery",
        href: "#",
    }
];

const listPages = pages.map((page) =>
    <li key={page.id.toString()}>
        <a href={page.href} className="header_link">{page.name}</a>
    </li>
);

function Navbar() {

    return (
        <header>
            <div className="navbar">
                <p>Logo</p>
                <ul id="header_links">
                    {listPages}
                </ul>
                <p>Social Media</p>
            </div >
        </header>
    );
}

export default Navbar;
