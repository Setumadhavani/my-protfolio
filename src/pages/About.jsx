import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Palette, Rocket } from 'lucide-react'; // Added import for Lucide icons
import './About.css';

// Using direct image URL
const profileImg = 'https://in3700.wordpress.com/wp-content/uploads/2026/02/setu.jpeg';

const About = () => {
    return (
        <div className="page-container about-page">
            <div className="container">

                <div className="about-header">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="about-visual"
                    >
                        <img src={profileImg} alt="Profile" className="profile-img-large" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="about-intro"
                    >
                        <h4 className="sub-heading">About Me</h4>
                        <h1 className="main-heading">Turning complex problems into <span className="gradient-text">elegant solutions</span></h1>
                        <p className="intro-text">
                           Hi, I’m Setu Madhavani, a Full Stack Developer and UI/UX Designer passionate about building scalable, user-friendly web applications. I enjoy combining clean design with efficient code to create high-performing digital experiences. I’m always exploring new technologies and continuously improving my skills through real-world projects and collaboration.                        </p>
                        <p className="intro-text">
                            When I'm not coding, you can find me exploring new tech trends, contributing to open source, or designing user interfaces.
                        </p>

                        <div className="code-snippet-card">
                            <div className="code-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <pre className="code-content">
                                <code>
                                    <span className="keyword">const</span> <span className="variable">developer</span> = &#123;
                                    <span className="key">name</span>: <span className="string">'Setu Madhavani'</span>,
                                    <span className="key">stack</span>: [<span className="string">'MERN'</span>, <span className="string">'Next.js'</span>],
                                    <span className="key">passions</span>: [<span className="string">'Build'</span>, <span className="string">'Innovate'</span>],
                                    <span className="key">status</span>: <span className="string">'Open to work'</span>
                                    &#125;;
                                </code>
                            </pre>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="focus-section"
                >
                    <div className="focus-grid">
                        {[
                            {
                                icon: <Code2 size={32} />,
                                title: "Full Stack Dev",
                                desc: "Building end-to-end solutions.",
                                tags: ["React", "Node.js", "PostgreSQL"]
                            },
                            {
                                icon: <Brain size={32} />,
                                title: "AI & ML",
                                desc: "Integrating intelligence into apps.",
                                tags: ["OpenAI API", "TensorFlow", "Python"]
                            },
                            {
                                icon: <Palette size={32} />,
                                title: "UI/UX Design",
                                desc: "Crafting intuitive interfaces.",
                                tags: ["Figma", "Prototyping", "User Research"]
                            },
                            {
                                icon: <Rocket size={32} />,
                                title: "Problem Solving",
                                desc: "Optimizing performance & logic.",
                                tags: ["Algorithms", "System Design", "Optimization"]
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                className="focus-card"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="card-icon">{card.icon}</div>
                                <h3>{card.title}</h3>
                                <p className="card-desc">{card.desc}</p>
                                <ul className="card-tags">
                                    {card.tags.map(tag => <li key={tag}>{tag}</li>)}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
