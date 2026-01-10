import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const location = useLocation();

    // Only show on Home (1st page) and Contact (considered last page)
    const shouldShow = location.pathname === '/' || location.pathname === '/contact';

    if (!shouldShow) {
        return (
            <footer className="footer-minimal">
                <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p>&copy; 2026 All rights reserved by Setu Madhavani</p>
                    <Link to="/admin/login" style={{ color: "rgba(255,255,255,0.1)", textDecoration: "none", fontSize: "0.8rem" }}>Admin</Link>
                </div>
            </footer>
        );
    }

    return (
        <footer className="footer-section">
            <div className="footer-cta-card">
                <div className="footer-content">
                    <h2 className="footer-heading">
                        Upgrade your web<br />
                        presence with Setu
                    </h2>

                    <a href="https://www.linkedin.com/in/setumadhavani1410/" target="_blank" rel="noopener noreferrer" className="footer-cta-btn">
                        <span className="btn-icon">✨</span>
                        <span>Hire Me for Project</span>
                    </a>

                    <div className="footer-profile">
                        <div className="profile-img-container">
                            {/* Placeholder for profile image - using a generic avatar or initials if image not available */}
                            <div className="profile-avatar">SM</div>
                        </div>
                        <div className="profile-info">
                            <span className="profile-name">Setu Madhavani</span>
                            <span className="profile-role">Full Stack Developer</span>
                        </div>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="footer-bg-pattern"></div>
            </div>
            <div style={{ textAlign: "center", marginTop: "1rem", opacity: 0.2 }}>
                <Link to="/admin/login" style={{ color: "white", textDecoration: "none", fontSize: "0.8rem" }}>Admin Login</Link>
            </div>
        </footer>
    );
};

export default Footer;
