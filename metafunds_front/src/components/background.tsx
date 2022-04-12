import React from 'react';
import '../stylesheets/global.scss';
import '../stylesheets/background.scss';

function Background() {
    return (
        <div id="background">
            <div id="big-blur">
                <div className='blur' id="blur-2"></div>
                <div className='blur' id="blur-3"></div>
                <div className='blur' id="blur-4"></div>
                <div className='blur' id="blur-1"></div>
            </div>
        </div>
    );
}

export default Background;
