import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // You can get these from https://dashboard.emailjs.com/
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

    return (
        <div className="page-container">
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="contact-info"
                >
                    <h1 className="contact-title">Let's <span className="gradient-text">Talk</span></h1>
                    <p className="contact-subtitle">
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="info-item">
                        <div className="icon-box"><Mail /></div>
                        <div>
                            <h3>Email Me</h3>
                            <p>setumadhavani@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-box"><Phone /></div>
                        <div>
                            <h3>Call Me</h3>
                            <p>+91 9426554060</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-box"><MapPin /></div>
                        <div>
                            <h3>Location</h3>
                            <p>Ahmedabad, Gujarat</p>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="contact-form"
                >
                    {/* Hidden fields for better email formatting */}
                    <input type="hidden" name="to_name" value="Setu Madhavani" />
                    <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                    <div className="form-group">
                        <input type="text" name="user_name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="user_email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" rows="5" placeholder="Message" required></textarea>
                    </div>

                    <button
                        className="btn-primary"
                        type="submit"
                        disabled={status === 'sending'}
                        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p style={{ color: '#4ade80', marginTop: '1rem', textAlign: 'center' }}>
                            Message sent successfully!
                        </p>
                    )}
                    {status === 'error' && (
                        <p style={{ color: '#f87171', marginTop: '1rem', textAlign: 'center' }}>
                            Failed to send message. Please try again.
                        </p>
                    )}
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;

