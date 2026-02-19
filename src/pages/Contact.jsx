import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Sparkles, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const SERVICE_ID = 'service_lqz0u2r';
        const TEMPLATE_ID = 'template_4z4zc8a';
        const PUBLIC_KEY = 'rQNCh17OQt9Lsdu5O';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    const contactItems = [
        { icon: <Mail size={18} />, label: 'Email', value: 'setumadhavani@gmail.com', href: 'mailto:setumadhavani@gmail.com', accent: '#a855f7', rgb: '168,85,247' },
        { icon: <Phone size={18} />, label: 'Phone', value: '+91 9426554060', href: 'tel:+919426554060', accent: '#0ea5e9', rgb: '14,165,233' },
        { icon: <MapPin size={18} />, label: 'Location', value: 'Ahmedabad, Gujarat', href: null, accent: '#10b981', rgb: '16,185,129' },
    ];

    return (
        <div className="page-container">
            {/* Ambient orbs */}
            <div className="contact-orb contact-orb-1" aria-hidden />
            <div className="contact-orb contact-orb-2" aria-hidden />
            {/* Grid overlay */}
            <div className="contact-grid-bg" aria-hidden />
            {/* Watermark */}
            <div className="contact-bg-watermark" aria-hidden>CONTACT</div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* ── Page Header ── */}
                <div className="contact-page-header">
                    <motion.div
                        className="contact-eyebrow"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Sparkles size={12} /> Get in Touch
                    </motion.div>

                    <motion.h1
                        className="contact-page-title"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Let's <span className="contact-title-accent">Talk</span>
                    </motion.h1>

                    <motion.p
                        className="contact-page-subtitle"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
                    </motion.p>
                </div>

                {/* ── Two-column layout ── */}
                <div className="contact-layout">

                    {/* ── Left: Info Panel ── */}
                    <motion.div
                        className="contact-info-panel"
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Availability badge */}
                        <div className="contact-availability">
                            <span className="avail-dot" />
                            <span>Available for freelance & full-time opportunities</span>
                        </div>

                        <p className="contact-info-desc">
                            Feel free to reach out — whether it's a quick question, a collaboration idea, or a project you want to build together.
                        </p>

                        {/* Contact Items */}
                        <div className="contact-items">
                            {contactItems.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    className="contact-item"
                                    style={{ '--ci-accent': item.accent, '--ci-rgb': item.rgb }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="ci-icon-wrap" style={{ background: `rgba(${item.rgb},0.1)`, borderColor: `rgba(${item.rgb},0.22)` }}>
                                        <span style={{ color: item.accent }}>{item.icon}</span>
                                    </div>
                                    <div className="ci-content">
                                        <span className="ci-label">{item.label}</span>
                                        {item.href
                                            ? <a href={item.href} className="ci-value" style={{ color: item.accent }}>{item.value}</a>
                                            : <span className="ci-value">{item.value}</span>
                                        }
                                    </div>
                                    <div className="ci-arrow">
                                        <ArrowRight size={14} style={{ color: item.accent, opacity: 0.4 }} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative line */}
                        <motion.div
                            className="contact-side-line"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </motion.div>

                    {/* ── Right: Form Panel ── */}
                    <motion.div
                        className="contact-form-panel"
                        initial={{ opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Top accent bar */}
                        <div className="form-panel-bar" />
                        {/* Corner accents */}
                        <div className="form-corner form-tl" />
                        <div className="form-corner form-br" />

                        <h2 className="form-panel-title">Send a Message</h2>
                        <p className="form-panel-subtitle">I'll get back to you within 24 hours.</p>

                        <form ref={form} onSubmit={sendEmail} className="contact-form-inner">
                            {/* Hidden fields */}
                            <input type="hidden" name="to_name" value="Setu Madhavani" />
                            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                            <div className="form-row">
                                <div className="cf-group">
                                    <label className="cf-label">Your Name</label>
                                    <input type="text" name="user_name" placeholder="John Doe" className="cf-input" required />
                                </div>
                                <div className="cf-group">
                                    <label className="cf-label">Your Email</label>
                                    <input type="email" name="user_email" placeholder="john@example.com" className="cf-input" required />
                                </div>
                            </div>

                            <div className="cf-group">
                                <label className="cf-label">Subject</label>
                                <input type="text" name="subject" placeholder="Project Inquiry / Collaboration / Hello..." className="cf-input" required />
                            </div>

                            <div className="cf-group">
                                <label className="cf-label">Message</label>
                                <textarea name="message" rows="5" placeholder="Tell me about your project, idea, or just say hi..." className="cf-input cf-textarea" required />
                            </div>

                            <button
                                type="submit"
                                className="cf-submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <span className="cf-spinner" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} /> Send Message
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.div
                                    className="cf-feedback cf-success"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <CheckCircle size={16} /> Message sent successfully! I'll reply soon.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    className="cf-feedback cf-error"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <XCircle size={16} /> Failed to send. Please try again.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
