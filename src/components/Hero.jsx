import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">

                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hero-badge"
                    >
                        <span>Available for freelance</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hero-title"
                    >
                        Crafting Digital <br />
                        <span className="gradient-text">Experiences</span> That Matter
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        I'm a Full Stack Developer specializing in building exceptional digital products.
                        Currently focused on building accessible, human-centered products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="hero-actions"
                    >
                        <Link to="/projects" className="btn-primary">
                            View Projects <ArrowRight size={18} className="ml-2" />
                        </Link>
                        <div className="social-links">
                            <a href="https://github.com/Setumadhavani" className="social-icon"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/setumadhavani1410/" className="social-icon"><Linkedin size={20} /></a>
                            <a href="https://x.com/madhavani_setu" className="social-icon"><Twitter size={20} /></a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-visual"
                >
                    {/* Abstract glowing sphere or card */}
                    <div className="glowing-card">
                        <div className="code-snippet-card">
                            <div className="code-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <pre className="code-content">
                                <code>
                                    <span className="keyword">const</span> <span className="variable">future</span> = <span className="keyword">async</span> () =&gt; &#123;
                                    <span className="keyword">await</span> <span className="variable">innovate</span>();
                                    <span className="keyword">await</span> <span className="variable">build</span>();
                                    <span className="keyword">return</span> <span className="string">'Impact'</span>;
                                    &#125;;
                                </code>
                            </pre>
                        </div>
                        <div className="glow-effect"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
