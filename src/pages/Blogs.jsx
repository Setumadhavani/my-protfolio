import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, ArrowRight } from 'lucide-react';
import './Blogs.css';

const blogPosts = [
    {
        id: 1,
        title: "Mastering React Hooks",
        excerpt: "A deep dive into useEffect, useState, and custom hooks to write cleaner React code.",
        date: "Oct 12, 2023",
        author: "Admin",
        category: "Development",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "The Future of AI in Web Dev",
        excerpt: "How AI tools like Copilot and ChatGPT are changing the landscape of frontend development.",
        date: "Nov 05, 2023",
        author: "Admin",
        category: "AI",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "CSS Grid vs Flexbox",
        excerpt: "Understanding when to use Grid and when to use Flexbox for modern layouts.",
        date: "Dec 01, 2023",
        author: "Admin",
        category: "Design",
        readTime: "4 min read"
    },
    {
        id: 4,
        title: "Building Scalable Node APIs",
        excerpt: "Best practices for structuring your Express applications for growth and maintainability.",
        date: "Jan 10, 2024",
        author: "Admin",
        category: "Backend",
        readTime: "10 min read"
    }
];

const Blogs = () => {
    return (
        <div className="page-container">
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="page-title center-title"
                >
                    Latest <span className="gradient-text">Insights</span>
                </motion.h1>

                <div className="blogs-grid">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="blog-card"
                        >
                            <div className="blog-category">{post.category}</div>
                            <h2 className="blog-title">{post.title}</h2>
                            <p className="blog-excerpt">{post.excerpt}</p>

                            <div className="blog-meta">
                                <span className="meta-item"><User size={14} /> {post.author}</span>
                                <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                                <span className="meta-read-time">{post.readTime}</span>
                            </div>

                            <a href="#" className="read-more">Read Article <ArrowRight size={16} /></a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
