import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm Setu's AI assistant. Ask me anything about his skills, projects, or experience!", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleToggle = () => setIsOpen(!isOpen);

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();
        
        if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
            return "Hello! How can I help you learn more about Setu today?";
        }
        if (lowerInput.includes('who are you') || lowerInput.includes('about')) {
            return "I represent Setu Madhavani, a Full Stack Developer and UI/UX Designer passionate about building scalable web applications. He studies Computer Engineering with honors in ML & Data Science.";
        }
        if (lowerInput.includes('skills') || lowerInput.includes('stack') || lowerInput.includes('technology') || lowerInput.includes('tech')) {
            return "Setu works with the MERN stack, Next.js, Python, TensorFlow, and AWS. He also excels in UI/UX design using Figma.";
        }
        if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
            return "Setu has been a freelancer since 2023. He is also the Tech Lead at AWS Cloud Club Silver Oak University and holds key positions at IEEE.";
        }
        if (lowerInput.includes('project')) {
            return "Setu has worked on impressive projects like an E-Commerce Platform, an AI Chatbot, and a Crypto Dashboard. Check out the Projects page for more!";
        }
        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
            return "You can reach Setu via the Contact page on this site. He is currently open to work opportunities!";
        }
        if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
            return "You can download Setu's resume from the Experience page.";
        }
        
        return "I'm not sure about that, but I can tell you about Setu's skills, projects, or experience. What would you like to know?";
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate network delay
        setTimeout(() => {
            const botResponseText = getBotResponse(newUserMessage.text);
            const newBotMessage = {
                id: Date.now() + 1,
                text: botResponseText,
                sender: 'bot'
            };
            setMessages(prev => [...prev, newBotMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="chatbot-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="chatbot-header">
                            <div className="bot-info">
                                <div className="bot-avatar">
                                    <Bot size={20} />
                                </div>
                                <div className="bot-details">
                                    <h3>Setu's Assistant</h3>
                                    <div className="bot-status">
                                        <span className="status-dot"></span> Online
                                    </div>
                                </div>
                            </div>
                            <button className="close-btn" onClick={handleToggle}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="chatbot-messages">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="typing-indicator">
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chatbot-input-area">
                            <input
                                type="text"
                                className="chatbot-input"
                                placeholder="Ask about Setu..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button 
                                className="send-btn" 
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="chatbot-toggle"
                onClick={handleToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
