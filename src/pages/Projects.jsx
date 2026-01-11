import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        category: 'Full Stack',
        description: 'A comprehensive dashboard for managing products, orders, and analytics. Built with React, Node.js, and MongoDB.',
        tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        links: { github: '#', live: '#' },
        image: 'https://in3700.wordpress.com/wp-content/uploads/2026/01/download-2.jpg'
    },
    {
        id: 2,
        title: 'AI Image Generator',
        category: 'AI / Web App',
        description: 'Generates unique images based on text prompts using OpenAI API. Features a community gallery.',
        tech: ['React', 'OpenAI API', 'Tailwind', 'Vite'],
        links: { github: '#', live: '#' },
        image: 'https://in3700.wordpress.com/wp-content/uploads/2026/01/download.jpg'
    },
    {
        id: 3,
        title: 'Social Media App',
        category: 'Mobile / Web',
        description: 'Real-time social platform with chat, stories, and feed. Optimized for performance and scalability.',
        tech: ['Next.js', 'Firebase', 'Socket.io'],
        links: { github: '#', live: '#' },
        image: 'https://in3700.wordpress.com/wp-content/uploads/2026/01/download-1.jpg'
    },
    {
        id: 4,
        title: 'Crypto Portfolio Tracker',
        category: 'Fintech',
        description: 'Track your cryptocurrency assets in real-time with detailed charts and profit/loss calculation.',
        tech: ['Vue.js', 'D3.js', 'CoinGecko API'],
        links: { github: '#', live: '#' },
        image: 'https://in3700.wordpress.com/wp-content/uploads/2026/01/download-3.jpg'
    }
];

const Projects = () => {
    return (
        <div className="page-container">
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="page-title"
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h1>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="project-card"
                        >
                            <div className="card-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="card-content">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                </div>
                                <div className="card-links">
                                    <a href={project.links.github} className="link-btn"><Github size={18} /> Code</a>
                                    <a href={project.links.live} className="link-btn"><ExternalLink size={18} /> Live Demo</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
