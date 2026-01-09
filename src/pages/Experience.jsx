import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Download } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        period: "2023 - Present",
        type: "work",
        description: "Leading the development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing code quality standards."
    },
    {
        id: 2,
        role: "Frontend Developer",
        company: "Creative Digital Agency",
        period: "2021 - 2023",
        type: "work",
        description: "Built interactive and responsive user interfaces for high-profile clients. Optimized website performance and improved SEO rankings."
    },
    {
        id: 3,
        role: "Chairperson IEEE SOU SIGHT SBG",
        company: "Silver Oak University IEEE Student Branch",
        period: "2026 - PRESENT",
        type: "education",
        description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Graduated with Honors."
    },
    {
        id: 4,
        role: "Webmaster IEEE SOU SC SBC",
        company: "Silver Oak University IEEE Student Branch",
        period: "2024 - 2025",
        type: "work",
        description: "Collaborated with various startups to deliver custom web solutions. Managed full client lifecycle from requirement gathering to deployment."
    },
    {
        id: 5,
        role: "Bachelor of Technology",
        company: "Silver Oak University University",
        period: "2023 - 2027",
        type: "education",
        description: "Foundation in Computer Science engineering. Active member of the Coding Club and IEEE student branch."
    }
];

const Experience = () => {
    return (
        <div className="page-container">
            <div className="container">
                <div className="page-header">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="page-title"
                    >
                        My <span className="gradient-text">Journey</span>
                    </motion.h1>

                    <motion.a
                        href="/resume.png"
                        download="Setu_Madhavani_Resume.png"
                        className="btn-primary"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <Download size={20} />
                        Resume
                    </motion.a>
                </div>

                <div className="timeline">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">
                                    <Calendar size={14} className="mr-1" /> {item.period}
                                </div>
                                <h3 className="timeline-title">{item.role}</h3>
                                <h4 className="timeline-company">
                                    {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                                    {item.company}
                                </h4>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
