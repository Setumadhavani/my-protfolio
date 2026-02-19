import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [showName, setShowName] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // 1. "BUILDING" phase (2.5s)
        // 2. Name Reveal (2s)
        // 3. Fade out

        const timer1 = setTimeout(() => {
            setShowName(true);
        }, 2800);

        const timer2 = setTimeout(() => {
            setFade(true);
        }, 5000);

        const timer3 = setTimeout(() => {
            onComplete();
        }, 5500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    return (
        <div className={`preloader-container ${fade ? 'fade-out' : ''}`}>
            {!showName ? (
                <div className="loader-stage">
                    <div className="hex-loader">
                        <div className="hex-inner"></div>
                    </div>
                    <div className="loader-text">
                        <span>I</span>
                        <span>N</span>
                        <span>I</span>
                        <span>T</span>
                        <span>I</span>
                        <span>A</span>
                        <span>L</span>
                        <span>I</span>
                        <span>Z</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill"></div>
                    </div>
                </div>
            ) : (
                <div className="identity-reveal">
                    <div className="name-wrapper">
                        <div className="first-name">SETU</div>
                        <div className="last-name">MADHAVANI</div>
                    </div>
                    <div className="title-tag">PORTFOLIO.2026</div>
                </div>
            )}
        </div>
    );
};

export default Preloader;
