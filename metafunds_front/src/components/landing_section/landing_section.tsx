import React from 'react';
import './landing_section.css';
import '../../stylesheets/button.css';

function LandingSection() {
    return (
        <section>
            <div className="section_content">
                <div className='main_title'>
                    <h1>
                        <span>Impact the</span>
                        <span> world with AI</span>
                        <span>generated NFTs</span>
                    </h1>
                    <p>The revolution of donation through blockchain and AI.</p>
                </div>
                <div className='call_to_action'>
                    <a href="#" className="button metadonate">Metadonate</a>
                    <a href="#" className="button choose_a_cause">Choose a cause</a>
                </div>
            </div>
        </section>
    );
}

export default LandingSection;