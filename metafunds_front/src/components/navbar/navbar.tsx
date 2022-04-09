import React from 'react';
import { useMediaQuery } from 'react-responsive'
import SecondaryNavbar from './secondaryNavbar';
import PrimaryNavbar from './primaryNavbar';
import '../../stylesheets/global.css';
import '../../stylesheets/navbar.css';

function Navbar() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 992px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 992px) and (min-width: 768px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return (
        <header>
            {(isDesktop || isTablet) && <PrimaryNavbar />}
            {isMobile && <SecondaryNavbar />}
        </header>
    );
}

export default Navbar;
