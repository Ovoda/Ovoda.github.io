import React from 'react';
import './_grid_section.scss';
import logo from "./Metafunds_logo.svg";

function GridSection(props: any) {
    return (
        <section className="grid_section">
            {props.children}
        </section >
    );
}

export default GridSection;