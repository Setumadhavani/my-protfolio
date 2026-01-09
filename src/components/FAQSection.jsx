import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './FAQSection.css';
import { Link } from 'react-router-dom';

const FAQSection = () => {
    const items = [
        {
            id: 1,
            title: "WEB DEVELOPMENT",
            description: "Crafting blazing fast, responsive, and SEO-friendly web applications using React, Next.js and modern CSS.",
            link: "/projects"
        },
        {
            id: 2,
            title: "UI/UX DESIGN",
            description: "Designing intuitive, user-centric interfaces with a focus on aesthetics and seamless user experience.",
            link: "/projects"
        },
        {
            id: 3,
            title: "BACKEND SYSTEMS",
            description: "Building robust, scalable server-side architectures to power your applications with security and efficiency.",
            link: "/experience"
        },
        {
            id: 4,
            title: "CONSULTING",
            description: "Providing expert advice and technical strategy to help you make informed decisions for your digital products.",
            link: "/contact"
        }
    ];

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <motion.div
                        className="gold-line"
                        initial={{ width: 0 }}
                        whileInView={{ width: '60px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    ></motion.div>
                    <motion.h2
                        className="section-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
                    </motion.h2>
                </div>

                <div className="faq-list">
                    {items.map((item, index) => (
                        <motion.div
                            className="faq-item"
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                            <div className="faq-left">
                                <h3 className="faq-title">{item.title}</h3>
                            </div>
                            <div className="faq-middle">
                                <p className="faq-desc">{item.description}</p>
                            </div>
                            <div className="faq-right">
                                <Link to={item.link} className="faq-arrow-btn">
                                    <ArrowUpRight size={24} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
