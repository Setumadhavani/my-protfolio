
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Folder, Briefcase, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'About', path: '/about', icon: <User size={18} /> },
        { name: 'Projects', path: '/projects', icon: <Folder size={18} /> },
        { name: 'Experience', path: '/experience', icon: <Briefcase size={18} /> },
        { name: 'Blogs', path: '/blogs', icon: <FileText size={18} /> },
    ];

    return (
        <div className={`navbar-wrapper ${scrolled ? 'scrolled-wrapper' : ''}`}>
            <motion.nav
                className={`navbar-pill ${scrolled ? 'scrolled' : ''}`}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <div className="nav-content">
                    {/* Logo Section */}
                    <Link to="/" className="logo-container">
                        <motion.div layout className="logo-text">
                            {scrolled ? (
                                <span className="logo-initials">SM</span>
                            ) : (
                                <span className="logo-full">Setu Madhavani</span>
                            )}
                        </motion.div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links desktop-only">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-item ${location.pathname === link.path ? 'active' : ''} ${scrolled ? 'icon-only' : ''}`}
                            >
                                <span className="nav-icon">{link.icon}</span>
                                {!scrolled && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: 'auto' }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="nav-text"
                                    >
                                        {link.name}
                                    </motion.span>
                                )}
                                {location.pathname === link.path && !scrolled && (
                                    <motion.div layoutId="underline" className="nav-underline" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="nav-actions desktop-only">
                        {!scrolled && (
                            <a href="/resume.png" target="_blank" rel="noopener noreferrer" className="nav-resume-link">
                                <FileText size={18} />
                                <span>Resume</span>
                            </a>
                        )}

                        <Link to="/contact" className={`btn-primary-pill ${scrolled ? 'icon-btn' : ''}`}>
                            {scrolled ? (
                                <ArrowUpRight size={20} />
                            ) : (
                                <>
                                    <span>Let's Build</span>
                                    <ArrowUpRight size={18} />
                                </>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="mobile-toggle mobile-only" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu mobile-only"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="mobile-link"
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="mobile-link highlight">
                            Let's Build
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
