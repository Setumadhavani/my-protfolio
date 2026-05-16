import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Github, ExternalLink, X, Layers, Calendar,
    Users, Star, Sparkles, ArrowUpRight, Code2,
    Zap, Globe, ChevronRight
} from 'lucide-react';
import './Projects.css';

/* ─── Data ─────────────────────────────────────────── */
const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        category: 'Full Stack',
        description: 'A comprehensive dashboard for managing products, orders, and analytics. Built with React, Node.js, and MongoDB.',
        tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        links: { github: 'https://github.com/Setumadhavani', live: 'https://github.com/Setumadhavani' },
        image: 'https://in3700.wordpress.com/wp-content/uploads/2026/05/asd.png',
        detailedDescription: `This E-Commerce Dashboard is a full-featured admin panel designed to streamline online store management. It provides real-time analytics, inventory tracking, and order management in one unified interface.`,
        features: [
            'Real-time sales analytics with interactive Chart.js graphs',
            'Product inventory management with bulk edit support',
            'Order tracking and status updates with email notifications',
            'Customer management with purchase history',
            'Revenue reports with export to CSV/PDF',
        ],
        duration: '3 Months',
        role: 'Full Stack Developer',
        status: 'Completed',
        accent: '#a855f7',
        accentRgb: '168,85,247',
        featured: true,
    },
    {
        id: 2,
        title: 'AI Image Generator',
        category: 'AI / Web App',
        description: 'Generates unique images based on text prompts using OpenAI API. Features a community gallery.',
        tech: ['React', 'OpenAI API', 'Tailwind', 'Vite'],
        links: { github: 'https://github.com/Setumadhavani', live: 'https://github.com/Setumadhavani' },
        image: 'https://in3700.wordpress.com/wp-content/uploads/2026/05/asdsa.jpg',
        detailedDescription: `An AI-powered image generation platform that transforms text descriptions into stunning visuals using OpenAI's DALL·E API. Users can explore a community gallery of AI-generated artwork and share their own creations.`,
        features: [
            'Text-to-image generation using OpenAI DALL·E API',
            'Community gallery with likes and sharing features',
            'Image history and personal collection management',
            'Multiple art style presets for guided generation',
            'High-resolution image download support',
        ],
        duration: '2 Months',
        role: 'Frontend & AI Integration',
        status: 'Live',
        accent: '#0ea5e9',
        accentRgb: '14,165,233',
        featured: false,
    },
    {
        id: 3,
        title: 'Social Media App',
        category: 'Mobile / Web',
        description: 'Real-time social platform with chat, stories, and feed. Optimized for performance and scalability.',
        tech: ['Next.js', 'Firebase', 'Socket.io'],
        links: { github: 'https://github.com/Setumadhavani', live: 'https://github.com/Setumadhavani' },
        image: 'https://in3700.wordpress.com/wp-content/uploads/2026/01/download-1.jpg',
        detailedDescription: `A full-featured social media platform built for real-time interaction. Users can post updates, share stories, chat with friends, and explore trending content — all with a smooth, mobile-first experience.`,
        features: [
            'Real-time messaging with Socket.io and typing indicators',
            '24-hour disappearing stories with view tracking',
            'Infinite scroll news feed with lazy loading',
            'Push notifications for likes, comments, and messages',
            'User authentication with Google and email/password via Firebase',
        ],
        duration: '4 Months',
        role: 'Full Stack Developer',
        status: 'In Progress',
        accent: '#10b981',
        accentRgb: '16,185,129',
        featured: false,
    },
    {
        id: 4,
        title: 'Crypto Portfolio Tracker',
        category: 'Fintech',
        description: 'Track your cryptocurrency assets in real-time with detailed charts and profit/loss calculation.',
        tech: ['Vue.js', 'D3.js', 'CoinGecko API'],
        links: { github: 'https://github.com/Setumadhavani', live: 'https://github.com/Setumadhavani' },
        image: 'https://in3700.wordpress.com/wp-content/uploads/2026/05/1234.png',
        detailedDescription: `A powerful cryptocurrency portfolio tracker that pulls live market data from CoinGecko API. Users can monitor their holdings, visualize price trends with D3.js charts, and calculate real-time profit and loss.`,
        features: [
            'Live crypto prices from CoinGecko API with auto-refresh',
            'Interactive D3.js candlestick and line charts',
            'Portfolio P&L calculation with cost basis tracking',
            'Price alerts via browser notifications',
            'Support for 100+ cryptocurrencies with search and filter',
        ],
        duration: '2.5 Months',
        role: 'Frontend Developer',
        status: 'Completed',
        accent: '#f59e0b',
        accentRgb: '245,158,11',
        featured: false,
    },
];

const categories = ['All', 'Full Stack', 'AI / Web App', 'Mobile / Web', 'Fintech'];

const statusConfig = {
    'Completed': { color: '#10b981', rgb: '16,185,129' },
    'Live': { color: '#6366f1', rgb: '99,102,241' },
    'In Progress': { color: '#f59e0b', rgb: '245,158,11' },
};

/* ─── Project Card ──────────────────────────────────── */
const ProjectCard = ({ project, index, onOpen, featured }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
    };

    const status = statusConfig[project.status];

    return (
        <motion.div
            ref={ref}
            className={`proj-card ${featured ? 'proj-card-featured' : ''}`}
            style={{ '--accent': project.accent, '--accent-rgb': project.accentRgb }}
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
        >
            {/* Shimmer */}
            <div
                className="proj-shimmer"
                style={{
                    background: hovered
                        ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(${project.accentRgb},0.13) 0%, transparent 55%)`
                        : 'none',
                }}
            />

            {/* Top bar */}
            <motion.div
                className="proj-top-bar"
                style={{ background: project.accent }}
                animate={{ scaleX: hovered ? 1 : 0.2 }}
                transition={{ duration: 0.35 }}
            />

            {/* Corner accents */}
            <div className="proj-corner proj-tl" style={{ borderColor: project.accent }} />
            <div className="proj-corner proj-br" style={{ borderColor: project.accent }} />

            {/* Image */}
            <div className="proj-img-wrap">
                <img src={project.image} alt={project.title} className="proj-img" />
                <div className="proj-img-overlay" style={{ background: `linear-gradient(to bottom, transparent 30%, rgba(8,8,16,0.95) 100%)` }} />

                {/* Status badge over image */}
                <div
                    className="proj-status"
                    style={{ color: status.color, background: `rgba(${status.rgb},0.12)`, borderColor: `rgba(${status.rgb},0.28)` }}
                >
                    <span className="proj-status-dot" style={{ background: status.color }} />
                    {project.status}
                </div>

                {/* Featured badge */}
                {featured && (
                    <div className="proj-featured-badge">
                        <Star size={10} /> Featured
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="proj-body">
                <span className="proj-category" style={{ color: project.accent }}>
                    {project.category}
                </span>
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-desc">{project.description}</p>

                {/* Tech tags */}
                <div className="proj-tags">
                    {project.tech.map(t => (
                        <span key={t} className="proj-tag" style={{ '--tag-rgb': project.accentRgb, '--tag-accent': project.accent }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="proj-footer">
                <div className="proj-links">
                    <a href={project.links.github} className="proj-link-btn" onClick={e => e.stopPropagation()}>
                        <Github size={14} /> Code
                    </a>
                    <a href={project.links.live} className="proj-link-btn proj-link-live" style={{ color: project.accent, borderColor: `rgba(${project.accentRgb},0.3)` }} onClick={e => e.stopPropagation()}>
                        <Globe size={14} /> Live
                    </a>
                </div>
                <button className="proj-detail-btn" onClick={() => onOpen(project)} style={{ '--btn-rgb': project.accentRgb, '--btn-accent': project.accent }}>
                    Details <ChevronRight size={13} />
                </button>
            </div>

            {/* Bottom glow */}
            <div
                className="proj-glow-bar"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}55, transparent)`, opacity: hovered ? 1 : 0 }}
            />
        </motion.div>
    );
};

/* ─── Detail Modal ──────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
    const status = statusConfig[project.status];
    return (
        <motion.div
            className="proj-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
        >
            <motion.div
                className="proj-modal"
                style={{ '--accent': project.accent, '--accent-rgb': project.accentRgb }}
                initial={{ opacity: 0, scale: 0.88, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 40 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                onClick={e => e.stopPropagation()}
            >
                {/* Close */}
                <button className="proj-modal-close" onClick={onClose}>
                    <X size={16} />
                </button>

                {/* Image */}
                <div className="proj-modal-img-wrap">
                    <img src={project.image} alt={project.title} className="proj-modal-img" />
                    <div className="proj-modal-img-overlay" />
                    <div className="proj-modal-img-bar" style={{ background: project.accent }} />
                </div>

                {/* Content */}
                <div className="proj-modal-body">
                    <div className="proj-modal-header">
                        <div>
                            <span className="proj-modal-category" style={{ color: project.accent }}>{project.category}</span>
                            <h2 className="proj-modal-title">{project.title}</h2>
                        </div>
                        <div
                            className="proj-modal-status"
                            style={{ color: status.color, background: `rgba(${status.rgb},0.1)`, borderColor: `rgba(${status.rgb},0.25)` }}
                        >
                            <span className="proj-status-dot" style={{ background: status.color }} />
                            {project.status}
                        </div>
                    </div>

                    {/* Meta */}
                    <div className="proj-modal-meta">
                        <div className="proj-meta-item">
                            <Calendar size={13} />
                            <span>{project.duration}</span>
                        </div>
                        <div className="proj-meta-item">
                            <Users size={13} />
                            <span>{project.role}</span>
                        </div>
                        <div className="proj-meta-item">
                            <Layers size={13} />
                            <span>{project.tech.length} Technologies</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="proj-modal-desc">{project.detailedDescription}</p>

                    {/* Features */}
                    <div className="proj-modal-section">
                        <h4 className="proj-modal-section-title">
                            <Star size={14} style={{ color: '#f59e0b' }} /> Key Features
                        </h4>
                        <ul className="proj-modal-features">
                            {project.features.map((f, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <span className="proj-feature-dot" style={{ background: project.accent }} />
                                    {f}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="proj-modal-section">
                        <h4 className="proj-modal-section-title">
                            <Code2 size={14} style={{ color: project.accent }} /> Tech Stack
                        </h4>
                        <div className="proj-modal-tags">
                            {project.tech.map(t => (
                                <span key={t} className="proj-modal-tag" style={{ color: project.accent, background: `rgba(${project.accentRgb},0.1)`, borderColor: `rgba(${project.accentRgb},0.25)` }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="proj-modal-actions">
                        <a href={project.links.github} className="proj-modal-btn proj-modal-btn-outline">
                            <Github size={16} /> View Code
                        </a>
                        <a href={project.links.live} className="proj-modal-btn proj-modal-btn-primary" style={{ background: project.accent }}>
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ─── Main Component ────────────────────────────────── */
const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="proj-page">
            {/* Ambient orbs */}
            <div className="proj-orb proj-orb-1" aria-hidden />
            <div className="proj-orb proj-orb-2" aria-hidden />

            {/* Grid overlay */}
            <div className="proj-grid-bg" aria-hidden />

            {/* BG watermark */}
            <div className="proj-bg-watermark" aria-hidden>PROJECTS</div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* ── Header ── */}
                <div className="proj-header">
                    <motion.div
                        className="proj-eyebrow"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Sparkles size={12} /> Selected Work
                    </motion.div>

                    <motion.h1
                        className="proj-page-title"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Featured <span className="proj-title-accent">Projects</span>
                    </motion.h1>

                    <motion.p
                        className="proj-subtitle"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        A curated collection of things I've built — from full-stack apps to AI integrations.
                    </motion.p>
                </div>

                {/* ── Stats ── */}
                <motion.div
                    className="proj-stats-bar"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {[
                        { label: 'Total Projects', value: `${projects.length}` },
                        { label: 'Live', value: `${projects.filter(p => p.status === 'Live').length}` },
                        { label: 'Completed', value: `${projects.filter(p => p.status === 'Completed').length}` },
                        { label: 'In Progress', value: `${projects.filter(p => p.status === 'In Progress').length}` },
                    ].map((s, i) => (
                        <div key={i} className="proj-stat-item">
                            <span className="proj-stat-value">{s.value}</span>
                            <span className="proj-stat-label">{s.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* ── Category Filters ── */}
                <motion.div
                    className="proj-filters"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`proj-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {activeCategory === cat && (
                                <motion.span
                                    className="proj-filter-bg"
                                    layoutId="projFilterBg"
                                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                                />
                            )}
                            {cat}
                            <span className="proj-filter-count">
                                {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* ── Grid ── */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeCategory}
                        className="proj-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {filtered.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                featured={project.featured && activeCategory === 'All'}
                                onOpen={setSelectedProject}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* ── Footer divider ── */}
                <motion.div
                    className="proj-footer-line"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="proj-footer-icon"><Sparkles size={13} /></span>
                </motion.div>

            </div>

            {/* ── Modal ── */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
