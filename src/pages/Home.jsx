import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import { Code, Server, Database, Layout, Terminal, Cpu, Globe, Layers, Box, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';
import FAQSection from '../components/FAQSection';
import Activities from '../components/Activities';

const Home = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const techStackRow1 = [
        { icon: <Code size={20} />, name: 'React' },
        { icon: <Layout size={20} />, name: 'Tailwind CSS' },
        { icon: <Layers size={20} />, name: 'Next.js' },
        { icon: <Code size={20} />, name: 'TypeScript' },
        { icon: <Box size={20} />, name: 'Framer Motion' },
        { icon: <Globe size={20} />, name: 'Vite' },
    ];

    const techStackRow2 = [
        { icon: <Terminal size={20} />, name: 'Node.js' },
        { icon: <Database size={20} />, name: 'MongoDB' },
        { icon: <Server size={20} />, name: 'AWS' },
        { icon: <Cpu size={20} />, name: 'Python' },
        { icon: <Box size={20} />, name: 'Docker' },
        { icon: <GitBranch size={20} />, name: 'Git' },
    ];

    return (
        <div className="home-page">
            <Hero />

            {/* Unique Tech Stack / Trusted Technologies */}
            <motion.div
                className="tech-scroll-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <div className="tech-label">Trusted Technologies</div>

                {/* Row 1 - Left Scroll */}
                <div className="tech-scroll-wrapper">
                    <div className="tech-scroll-track track-left">
                        {[...techStackRow1, ...techStackRow1, ...techStackRow1, ...techStackRow1].map((tech, i) => (
                            <div key={`r1-${i}`} className="tech-pill">
                                <span className="tech-icon">{tech.icon}</span>
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right Scroll */}
                <div className="tech-scroll-wrapper">
                    <div className="tech-scroll-track track-right">
                        {[...techStackRow2, ...techStackRow2, ...techStackRow2, ...techStackRow2].map((tech, i) => (
                            <div key={`r2-${i}`} className="tech-pill">
                                <span className="tech-icon">{tech.icon}</span>
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Featured Preview Section */}
            <section className="section-preview">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="section-heading">Selected <span className="gradient-text">Works</span></h2>
                        <Link to="/projects" className="view-all-link">View All Projects →</Link>
                    </motion.div>

                    <motion.div
                        className="preview-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div className="preview-card main" variants={fadeInUp}>
                            <img
                                src="https://in3700.wordpress.com/wp-content/uploads/2026/01/download-2.jpg"
                                alt="E-Commerce Platform"
                                className="card-bg-image"
                            />
                            <div className="preview-overlay"></div>
                            <div className="preview-content">
                                <h3>E-Commerce Platform</h3>
                                <p>Full stack solution for modern retail.</p>
                            </div>
                        </motion.div>
                        <motion.div className="preview-card sub" variants={fadeInUp}>
                            <img
                                src="https://in3700.wordpress.com/wp-content/uploads/2026/01/download.jpg"
                                alt="AI Chatbot"
                                className="card-bg-image"
                            />
                            <div className="preview-overlay"></div>
                            <div className="preview-content">
                                <h3>AI Chatbot</h3>
                                <p>Natural Language Processing interface.</p>
                            </div>
                        </motion.div>
                        <motion.div className="preview-card sub" variants={fadeInUp}>
                            <img
                                src="https://in3700.wordpress.com/wp-content/uploads/2026/01/download-3.jpg"
                                alt="Crypto Dashboard"
                                className="card-bg-image"
                            />
                            <div className="preview-overlay"></div>
                            <div className="preview-content">
                                <h3>Crypto Dashboard</h3>
                                <p>Real-time analytics tracking.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Activities Section */}
            <Activities />

            {/* About Brief */}
            <section className="section-brief">
                <div className="container">
                    <motion.div
                        className="brief-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="section-heading">Why <span className="gradient-text">Hire Me?</span></h2>
                        <p>
                            I don't just write code; I build solutions. With a strong foundation in algorithmic problem solving and a keen eye for design, I bridge the gap between back-end logic and front-end aesthetics.
                        </p>
                        <motion.div className="stats-row" variants={staggerContainer} initial="hidden" whileInView="visible">
                            <motion.div className="stat-item" variants={fadeInUp}>
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Years Exp.</span>
                            </motion.div>
                            <motion.div className="stat-item" variants={fadeInUp}>
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Projects</span>
                            </motion.div>
                            <motion.div className="stat-item" variants={fadeInUp}>
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Dedication</span>
                            </motion.div>
                            <motion.div className="stat-item" variants={fadeInUp}>
                                <span className="stat-number infinity-anim">∞</span>
                                <span className="stat-label">Learning Journey</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />


        </div>
    );
};

export default Home;
