import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Briefcase, GraduationCap, Calendar,
    MapPin, Sparkles, Download, ArrowUpRight,
    Zap, Star, Code2, Users
} from 'lucide-react';
import './Experience.css';

/* ─── Data ─────────────────────────────────────────── */
const experiences = [
    {
        id: 1,
        role: 'Freelancer',
        company: 'Self Employed',
        period: '2023 – Present',
        year: '2023',
        type: 'work',
        image: '/freelance.png',
        location: 'Remote',
        description:
            'Building scalable web applications for clients worldwide using React, Node.js, and AWS. Handling full project lifecycle — from discovery to deployment.',
        tags: ['React', 'Node.js', 'AWS', 'MongoDB'],
        accent: '#a855f7',
        accentRgb: '168,85,247',
        current: true,
        StatIcon: Code2,
        stat: '20+ Projects',
    },
    {
        id: 2,
        role: 'Technical Lead',
        company: 'AWS Cloud Club · Silver Oak University',
        period: '2025 – Present',
        year: '2025',
        type: 'work',
        image: 'http://ieee.socet.edu.in/wp-content/uploads/2026/01/Copy-of-Cloud-Club-Color-White-Transparent.png',
        location: 'Silver Oak University',
        description:
            'Leading cloud computing initiatives, organizing AWS workshops, and mentoring students through hands-on cloud projects and certification paths.',
        tags: ['AWS', 'Cloud', 'Leadership', 'DevOps'],
        accent: '#f59e0b',
        accentRgb: '245,158,11',
        current: true,
        StatIcon: Zap,
        stat: '50+ Students',
    },
    {
        id: 3,
        role: 'Chairperson IEEE SOU WIE SB AG',
        company: 'IEEE SOU SB',
        period: '2026 – Present',
        year: '2025',
        type: 'work',
        image: 'http://ieee.socet.edu.in/wp-content/uploads/2025/09/Vector.png',
        location: 'Silver Oak University',
        description:
            'Leading the Women in Engineering affinity group, empowering women in technology through workshops, mentorship programs, and inspiring initiatives at Silver Oak University.',
        tags: ['IEEE', 'WIE', 'Leadership', 'Empowerment'],
        accent: '#e879f9',
        accentRgb: '232,121,249',
        current: true,
        StatIcon: Users,
        stat: '80+ Members',
    },
    {
        id: 4,
        role: 'Chairperson IEEE SOU SIGHT SBG',
        company: 'IEEE SOU SB',
        period: '2026 – JAN TO MARCH',
        year: '2026',
        type: 'work',
        image: 'http://ieee.socet.edu.in/wp-content/uploads/2025/09/Vector.png',
        location: 'Silver Oak University',
        description:
            'Heading the SIGHT student branch group, driving humanitarian technology events, community outreach programs, and cross-disciplinary collaborations.',
        tags: ['IEEE', 'Leadership', 'Community', 'HCI'],
        accent: '#10b981',
        accentRgb: '16,185,129',
        current: true,
        StatIcon: Users,
        stat: '100+ Members',
    },
    {
        id: 5,
        role: 'Webmaster IEEE SOU CS SBC',
        company: 'IEEE SOU SB',
        period: '2025 – 2026',
        year: '2024',
        type: 'work',
        image: 'http://ieee.socet.edu.in/wp-content/uploads/2025/09/Vector.png',
        location: 'Silver Oak University',
        description:
            'Designed and maintained the official IEEE student branch website. Managed digital presence, event pages, and collaborated with multiple sub-committees.',
        tags: ['Web Dev', 'IEEE', 'UI/UX', 'Design'],
        accent: '#0ea5e9',
        accentRgb: '14,165,233',
        current: false,
        StatIcon: Code2,
        stat: '5 Sub-sites',
    },
    {
        id: 6,
        role: 'B.Tech Computer Engineering',
        company: 'Silver Oak University',
        period: '2023 – 2027',
        year: '2023',
        type: 'education',
        image: 'http://ieee.socet.edu.in/wp-content/uploads/2025/04/Vector.png',
        location: 'Ahmedabad, Gujarat',
        description:
            'Pursuing B.Tech with Honors in Machine Learning & Data Science. Active in Coding Club, IEEE branch, and multiple research initiatives.',
        tags: ['ML', 'Data Science', 'Engineering', 'Research'],
        accent: '#ec4899',
        accentRgb: '236,72,153',
        current: true,
        StatIcon: Star,
        stat: '8.9 CGPA',
    },
];

/* ─── Timeline Item ──────────────────────────────── */
const TimelineItem = ({ item, index, isLeft }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [hovered, setHovered] = useState(false);

    const { StatIcon } = item;

    return (
        <motion.div
            ref={ref}
            className={`timeline-item ${isLeft ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Timeline Node */}
            <motion.div
                className="timeline-node"
                style={{ '--accent': item.accent, '--accent-rgb': item.accentRgb }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 + 0.2, type: 'spring', stiffness: 200 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="node-ring" />
                <div className="node-core" style={{ background: item.accent }}>
                    {item.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                </div>
                <motion.div
                    className="node-pulse"
                    style={{ borderColor: item.accent }}
                    animate={hovered ? { scale: [1, 1.5], opacity: [0.5, 0] } : {}}
                    transition={{ duration: 1, repeat: hovered ? Infinity : 0 }}
                />
            </motion.div>

            {/* Content Card */}
            <motion.div
                className="timeline-card"
                style={{ '--accent': item.accent, '--accent-rgb': item.accentRgb }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
            >
                {/* Year Badge */}
                <div className="timeline-year" style={{ background: item.accent }}>
                    {item.year}
                </div>

                {/* Card Header */}
                <div className="timeline-card-header">
                    <div className="timeline-logo" style={{ borderColor: `rgba(${item.accentRgb},0.3)` }}>
                        <img src={item.image} alt={item.company} />
                    </div>
                    <div className="timeline-badges">
                        {item.current && (
                            <span className="badge-live">
                                <span className="live-dot" />
                                Active
                            </span>
                        )}
                    </div>
                </div>

                {/* Card Body */}
                <div className="timeline-card-body">
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company" style={{ color: item.accent }}>
                        {item.company}
                    </p>

                    <div className="timeline-meta">
                        <span><Calendar size={12} />{item.period}</span>
                        <span><MapPin size={12} />{item.location}</span>
                    </div>

                    <p className="timeline-desc">{item.description}</p>

                    {/* Tags */}
                    <div className="timeline-tags">
                        {item.tags.map(tag => (
                            <span
                                key={tag}
                                className="timeline-tag"
                                style={{
                                    background: `rgba(${item.accentRgb},0.1)`,
                                    borderColor: `rgba(${item.accentRgb},0.25)`,
                                    color: item.accent
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Stat */}
                    <div
                        className="timeline-stat"
                        style={{
                            background: `rgba(${item.accentRgb},0.1)`,
                            borderColor: `rgba(${item.accentRgb},0.3)`,
                            color: item.accent
                        }}
                    >
                        <StatIcon size={14} />
                        {item.stat}
                    </div>
                </div>

                {/* Accent Line */}
                <div className="card-accent-line" style={{ background: item.accent }} />
            </motion.div>
        </motion.div>
    );
};

/* ─── Main Component ────────────────────────────────── */
const Experience = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filtered = activeFilter === 'all'
        ? experiences
        : experiences.filter(e => e.type === activeFilter);

    return (
        <div className="exp-page">
            {/* Ambient orbs */}
            <div className="exp-orb exp-orb-1" aria-hidden />
            <div className="exp-orb exp-orb-2" aria-hidden />

            {/* Grid overlay */}
            <div className="exp-grid" aria-hidden />

            {/* BG watermark */}
            <div className="exp-bg-watermark" aria-hidden>JOURNEY</div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* ── Header ── */}
                <div className="exp-header">
                    <div className="exp-header-left">
                        <motion.div
                            className="exp-eyebrow"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Sparkles size={12} />
                            Career &amp; Education
                        </motion.div>

                        <motion.h1
                            className="exp-title"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            My{' '}
                            <span className="exp-title-accent">Journey</span>
                        </motion.h1>

                        <motion.p
                            className="exp-subtitle"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.38 }}
                        >
                            Roles, responsibilities &amp; milestones that shaped me as a developer.
                        </motion.p>
                    </div>

                    <motion.a
                        href="/resume.png"
                        download="Setu_Madhavani_Resume.png"
                        className="exp-resume-btn"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <Download size={15} />
                        Download Resume
                        <ArrowUpRight size={13} />
                    </motion.a>
                </div>

                {/* ── Stats bar ── */}
                <motion.div
                    className="exp-stats-bar"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                >
                    {[
                        { label: 'Years Active', value: '2+' },
                        { label: 'Roles Held', value: '6' },
                        { label: 'Projects', value: '20+' },
                        { label: 'Mentored', value: '50+' },
                    ].map((s, i) => (
                        <div key={i} className="exp-stat-item">
                            <span className="exp-stat-value">{s.value}</span>
                            <span className="exp-stat-label">{s.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* ── Filters ── */}
                <motion.div
                    className="exp-filters"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                >
                    {[
                        { key: 'all', label: 'All', icon: <Sparkles size={12} /> },
                        { key: 'work', label: 'Work', icon: <Briefcase size={12} /> },
                        { key: 'education', label: 'Education', icon: <GraduationCap size={12} /> },
                    ].map(f => (
                        <button
                            key={f.key}
                            className={`exp-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f.key)}
                        >
                            {activeFilter === f.key && (
                                <motion.span
                                    className="filter-active-bg"
                                    layoutId="filterBg"
                                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                                />
                            )}
                            <span className="filter-icon">{f.icon}</span>
                            {f.label}
                            <span className="filter-count">
                                {f.key === 'all'
                                    ? experiences.length
                                    : experiences.filter(e => e.type === f.key).length}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* ── Timeline ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        className="timeline-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Central Line */}
                        <motion.div
                            className="timeline-line"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        />

                        {/* Timeline Items */}
                        {filtered.map((item, index) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                index={index}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* ── Footer divider ── */}
                <motion.div
                    className="exp-footer-line"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="exp-footer-icon"><Sparkles size={13} /></span>
                </motion.div>

            </div>
        </div>
    );
};

export default Experience;
