import React from 'react';
import { motion } from 'framer-motion';
import './Activities.css';

const activitiesData = [
    {
        id: 1,
        image: "https://in3700.wordpress.com/wp-content/uploads/2026/01/img_9540-1.jpg",
        title: "Coding Hackathon",
        desc: "Building solutions in 24 hours."
    },
    {
        id: 2,
        image: "https://in3700.wordpress.com/wp-content/uploads/2026/01/img20250227105927.jpg",
        title: "Tech Workshop",
        desc: "Sharing knowledge with the community."
    },
    {
        id: 3,
        image: "https://in3700.wordpress.com/wp-content/uploads/2026/01/img_1338.jpg",
        title: "Office Setup",
        desc: "Where the magic happens."
    },
    {
        id: 4,
        image: "https://in3700.wordpress.com/wp-content/uploads/2026/01/img_2346.jpg",
        title: "Team Collaboration",
        desc: "Brainstorming the next big thing."
    }
];

const Activities = () => {
    // Duplicate data to create seamless loop
    const marqueeItems = [...activitiesData, ...activitiesData, ...activitiesData];

    return (
        <section className="activities-section">
            <div className="container-fluid">
                <motion.div
                    className="section-header container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-heading">MY <span className="gradient-text">ACTIVITIES</span></h2>
                    <p className="section-subheading">A glimpse into my professional life and community involvement.</p>
                </motion.div>

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {marqueeItems.map((activity, index) => (
                            <div className="item" key={`${activity.id}-${index}`}>
                                <img src={activity.image} alt={activity.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
