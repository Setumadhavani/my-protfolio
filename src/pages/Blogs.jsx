import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { User, Calendar, ArrowRight, Sparkles, Clock, Tag, BookOpen } from 'lucide-react';
import './Blogs.css';

const blogPosts = [
    {
        id: 1,
        title: "Mastering React Hooks",
        excerpt: "A deep dive into useEffect, useState, and custom hooks to write cleaner React code.",
        date: "Oct 12, 2023",
        author: "Admin",
        category: "Development",
        readTime: "5 min read",
        accent: '#a855f7',
        accentRgb: '168,85,247',
    },
    {
        id: 2,
        title: "The Future of AI in Web Dev",
        excerpt: "How AI tools like Copilot and ChatGPT are changing the landscape of frontend development.",
        date: "Nov 05, 2023",
        author: "Admin",
        category: "AI",
        readTime: "8 min read",
        accent: '#0ea5e9',
        accentRgb: '14,165,233',
    },
    {
        id: 3,
        title: "CSS Grid vs Flexbox",
        excerpt: "Understanding when to use Grid and when to use Flexbox for modern layouts.",
        date: "Dec 01, 2023",
        author: "Admin",
        category: "Design",
        readTime: "4 min read",
        accent: '#10b981',
        accentRgb: '16,185,129',
    },
    {
        id: 4,
        title: "Building Scalable Node APIs",
        excerpt: "Best practices for structuring your Express applications for growth and maintainability.",
        date: "Jan 10, 2024",
        author: "Admin",
        category: "Backend",
        readTime: "10 min read",
        accent: '#f59e0b',
        accentRgb: '245,158,11',
    },
];

const categoryColors = {
    Development: { color: '#a855f7', rgb: '168,85,247' },
    AI: { color: '#0ea5e9', rgb: '14,165,233' },
    Design: { color: '#10b981', rgb: '16,185,129' },
    Backend: { color: '#f59e0b', rgb: '245,158,11' },
};

/* ─── Blog Card ──────────────────────────────────────── */
const BlogCard = ({ post, index, featured }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    const cat = categoryColors[post.category] || { color: post.accent, rgb: post.accentRgb };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
    };

    return (
        <motion.article
            ref={ref}
            className={`blog-card ${featured ? 'blog-card-featured' : ''}`}
            style={{ '--accent': cat.color, '--accent-rgb': cat.rgb }}
            initial={{ opacity: 0, y: 44 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
        >
            {/* Shimmer */}
            <div
                className="blog-shimmer"
                style={{
                    background: hovered
                        ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(${cat.rgb},0.13) 0%, transparent 55%)`
                        : 'none',
                }}
            />

            {/* Top accent bar */}
            <motion.div
                className="blog-top-bar"
                style={{ background: cat.color }}
                animate={{ scaleX: hovered ? 1 : 0.22 }}
                transition={{ duration: 0.35 }}
            />

            {/* Corner accents */}
            <div className="blog-corner blog-tl" style={{ borderColor: cat.color }} />
            <div className="blog-corner blog-br" style={{ borderColor: cat.color }} />

            {/* Category badge */}
            <div className="blog-header">
                <span
                    className="blog-category-badge"
                    style={{ color: cat.color, background: `rgba(${cat.rgb},0.1)`, borderColor: `rgba(${cat.rgb},0.25)` }}
                >
                    <Tag size={10} />
                    {post.category}
                </span>

                <span className="blog-read-time">
                    <Clock size={10} />
                    {post.readTime}
                </span>
            </div>

            {/* Index number watermark */}
            <div className="blog-index" style={{ color: cat.color }}>
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Content */}
            <div className="blog-body">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
            </div>

            {/* Footer */}
            <div className="blog-footer">
                <div className="blog-meta">
                    <span className="blog-meta-item"><User size={11} />{post.author}</span>
                    <span className="blog-meta-item"><Calendar size={11} />{post.date}</span>
                </div>
                <a href="#" className="blog-read-more" style={{ color: cat.color, borderColor: `rgba(${cat.rgb},0.25)` }}>
                    Read Article <ArrowRight size={13} />
                </a>
            </div>

            {/* Bottom glow */}
            <div
                className="blog-glow-bar"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}55, transparent)`, opacity: hovered ? 1 : 0 }}
            />
        </motion.article>
    );
};

/* ─── Main Component ────────────────────────────────── */
const Blogs = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const allCategories = ['All', ...Object.keys(categoryColors)];
    const filtered = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(p => p.category === activeCategory);

    return (
        <div className="blog-page">
            {/* Ambient orbs */}
            <div className="blog-orb blog-orb-1" aria-hidden />
            <div className="blog-orb blog-orb-2" aria-hidden />

            {/* Grid */}
            <div className="blog-grid-bg" aria-hidden />

            {/* BG watermark */}
            <div className="blog-bg-watermark" aria-hidden>BLOG</div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* ── Header ── */}
                <div className="blog-page-header">
                    <motion.div
                        className="blog-eyebrow"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <BookOpen size={12} /> Articles &amp; Insights
                    </motion.div>

                    <motion.h1
                        className="blog-page-title"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Latest <span className="blog-title-accent">Insights</span>
                    </motion.h1>

                    <motion.p
                        className="blog-page-subtitle"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        Thoughts on development, design, and the future of tech.
                    </motion.p>
                </div>

                {/* ── Stats ── */}
                <motion.div
                    className="blog-stats-bar"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {[
                        { label: 'Articles', value: `${blogPosts.length}` },
                        { label: 'Categories', value: `${Object.keys(categoryColors).length}` },
                        { label: 'Total Reads', value: '27 min' },
                        { label: 'Topics', value: '4+' },
                    ].map((s, i) => (
                        <div key={i} className="blog-stat-item">
                            <span className="blog-stat-value">{s.value}</span>
                            <span className="blog-stat-label">{s.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* ── Filters ── */}
                <motion.div
                    className="blog-filters"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {allCategories.map(cat => (
                        <button
                            key={cat}
                            className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {activeCategory === cat && (
                                <motion.span
                                    className="blog-filter-active-bg"
                                    layoutId="blogFilterBg"
                                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                                />
                            )}
                            {cat}
                            <span className="blog-filter-count">
                                {cat === 'All' ? blogPosts.length : blogPosts.filter(p => p.category === cat).length}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* ── Cards Grid ── */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeCategory}
                        className="blogs-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {filtered.map((post, index) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                                index={index}
                                featured={index === 0 && activeCategory === 'All'}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* ── Footer divider ── */}
                <motion.div
                    className="blog-footer-line"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="blog-footer-icon"><Sparkles size={13} /></span>
                </motion.div>

            </div>
        </div>
    );
};

export default Blogs;
