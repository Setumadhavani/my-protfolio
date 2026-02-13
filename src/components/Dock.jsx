import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Home,
    User,
    Folder,
    Briefcase,
    FileText,
    ArrowUpRight,
    File
} from 'lucide-react';
import './Dock.css';

const Dock = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'About', path: '/about', icon: <User size={18} /> },
        { name: 'Projects', path: '/projects', icon: <Folder size={18} /> },
        { name: 'Experience', path: '/experience', icon: <Briefcase size={18} /> },
        { name: 'Blogs', path: '/blogs', icon: <FileText size={18} /> },
    ];

    return (
        <div className="dock-container">
            <motion.div
                className="dock-bar"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                {/* Brand / Name */}
                <div className="dock-brand">
                    <span className="dock-name">Setu Madhavani</span>
                </div>

                {/* Navigation Links */}
                <div className="dock-links">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`dock-item ${isActive ? 'active' : ''}`}
                            >
                                <span className="dock-icon">{item.icon}</span>
                                <span className="dock-text">{item.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="dock-active-bg"
                                        className="dock-active-bg"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Actions */}
                <div className="dock-actions">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="dock-resume-btn">
                        <File size={16} />
                        <span>Resume</span>
                    </a>
                    <Link to="/contact" className="dock-contact-btn">
                        <span>Let's Build</span>
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Dock;
