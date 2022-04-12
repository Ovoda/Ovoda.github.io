import React from 'react';
import './landing_section.scss';
import GridSection from '../grid_section/grid_section';
import '../../stylesheets/button.scss';
import logo from "./Metafunds_logo.svg";

function LandingSection() {
    return (
        <GridSection>
            <div className='main_title'>
                <h1>
                    <span>Impact the </span>
                    <span> world with AI</span>
                    <span> generated NFTs</span>
                </h1>
                <p>Become part of the revolution of donation <br />through blockchain and AI.</p>
            </div>
            <div className='call_to_action'>
                <a href="#" className="button metadonate">Metadonate</a>
                <a href="#" className="button choose_a_cause">Choose a cause</a>
            </div>
        </GridSection >
    );
}

export default LandingSection;