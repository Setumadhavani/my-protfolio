import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import './Chatbot.css';

/* =====================================================
   SETU'S KNOWLEDGE BASE
   Add / edit any info here to "train" the chatbot.
   ===================================================== */
const KNOWLEDGE_BASE = [
    /* ── Identity ── */
    {
        keywords: ['who are you', 'who is setu', 'about setu', 'introduce', 'tell me about'],
        answer: "I'm Setu Madhavani — a Full Stack Developer, UI/UX Designer, and cloud enthusiast from Ahmedabad, India. I'm currently pursuing B.Tech Computer Engineering (Honors in ML & Data Science) at Silver Oak University and actively freelancing since 2023. I lead the AWS Cloud Club and serve as Chairperson of IEEE SOU WIE SB AG.",
    },
    {
        keywords: ['name', 'full name'],
        answer: "My full name is **Setu Madhavani**. Nice to meet you! 👋",
    },
    {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greetings', 'howdy'],
        answer: "Hey there! 👋 I'm Setu's AI assistant. I can tell you everything about Setu — his skills, projects, experience, education, and more. What would you like to know?",
    },
    {
        keywords: ['how are you', 'how r u'],
        answer: "I'm doing great, thanks for asking! 😊 I'm here to help you learn about Setu. What would you like to know?",
    },
    {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'take care'],
        answer: "Goodbye! Feel free to come back anytime if you have more questions about Setu. Have a great day! 👋",
    },
    {
        keywords: ['thank', 'thanks', 'appreciate'],
        answer: "You're welcome! 😊 Feel free to ask anything else about Setu.",
    },

    /* ── Education ── */
    {
        keywords: ['education', 'study', 'degree', 'university', 'college', 'btech', 'b.tech'],
        answer: "Setu is pursuing **B.Tech in Computer Engineering** with Honors in Machine Learning & Data Science at **Silver Oak University**, Ahmedabad (2023–2027). He has a CGPA of **8.9** and is active in the Coding Club, IEEE branch, and multiple research initiatives.",
    },
    {
        keywords: ['cgpa', 'gpa', 'marks', 'grade', 'score'],
        answer: "Setu maintains a strong **CGPA of 8.9** in his B.Tech program at Silver Oak University, specializing in ML & Data Science.",
    },
    {
        keywords: ['silver oak', 'sou', 'socet'],
        answer: "Setu studies at **Silver Oak University (SOC Engineering & Technology)**, Ahmedabad, Gujarat. He is deeply involved in campus activities — leading the AWS Cloud Club and serving as Chairperson of IEEE SOU WIE SB AG.",
    },
    {
        keywords: ['honors', 'specialization', 'machine learning', 'data science'],
        answer: "Setu has taken Honors specialization in **Machine Learning & Data Science** as part of his B.Tech. He's also involved in research projects and the Coding Club.",
    },

    /* ── Skills & Tech Stack ── */
    {
        keywords: ['skill', 'stack', 'technology', 'tech', 'tools', 'language', 'framework', 'know'],
        answer: "Setu's tech toolkit includes:\n\n🖥️ **Frontend:** React.js, Next.js, HTML, CSS, JavaScript\n⚙️ **Backend:** Node.js, Express.js, Python, Flask\n🗄️ **Databases:** MongoDB, MySQL, Firebase\n☁️ **Cloud:** AWS (EC2, S3, Lambda), DevOps\n🤖 **AI/ML:** TensorFlow, scikit-learn, OpenAI API\n🎨 **Design:** Figma, UI/UX, Framer Motion\n🔧 **Tools:** Git, GitHub, Vite, Docker",
    },
    {
        keywords: ['react', 'reactjs'],
        answer: "React.js is Setu's primary frontend framework. He uses it for building interactive UIs, SPAs, custom hooks, and integrates it with Framer Motion for beautiful animations.",
    },
    {
        keywords: ['node', 'nodejs', 'express', 'backend'],
        answer: "Setu builds backends using **Node.js + Express.js**, creating RESTful APIs with MongoDB/MySQL databases. He handles full project lifecycles including auth, deployment, and scaling.",
    },
    {
        keywords: ['python'],
        answer: "Setu uses **Python** for machine learning, data science, scripting, and backend APIs (Flask). It's a key part of his ML & Data Science specialization.",
    },
    {
        keywords: ['aws', 'cloud', 'amazon'],
        answer: "Setu is a certified AWS enthusiast and **Technical Lead of AWS Cloud Club at Silver Oak University**. He works with EC2, S3, Lambda, and CloudFormation, and mentors 50+ students through cloud certifications.",
    },
    {
        keywords: ['mongodb', 'database', 'mysql', 'firebase'],
        answer: "Setu works with **MongoDB** (NoSQL, MERN stack), **MySQL** (relational), and **Firebase** (real-time, auth). He chooses the right DB based on project needs.",
    },
    {
        keywords: ['figma', 'design', 'ui', 'ux', 'ui/ux'],
        answer: "Setu has strong UI/UX skills using **Figma**. He designs user-centered interfaces, wireframes, and prototypes before development — ensuring every project looks premium.",
    },
    {
        keywords: ['next', 'nextjs'],
        answer: "Setu uses **Next.js** for server-side rendering, static site generation, and building production-grade React apps with optimized performance.",
    },

    /* ── Work Experience ── */
    {
        keywords: ['experience', 'work', 'job', 'career', 'role', 'position', 'worked'],
        answer: "Setu's professional journey:\n\n🏢 **Freelancer** (Self-Employed) — 2023–Present | 20+ projects for global clients\n⚡ **Technical Lead** — AWS Cloud Club, Silver Oak University — 2025–Present\n🏛️ **Chairperson IEEE SOU WIE SB AG** — Silver Oak University — 2026–Present\n💻 **Webmaster IEEE SOU SC SBC** — 2024–2025",
    },
    {
        keywords: ['freelance', 'freelancer', 'self employed'],
        answer: "Setu has been **freelancing since 2023**, building scalable web apps for clients worldwide. He handles the full project lifecycle — from discovery and design to development and deployment. Completed **20+ projects** so far!",
    },
    {
        keywords: ['ieee', 'wie', 'sb ag', 'women in engineering'],
        answer: "Setu is the **Chairperson of IEEE SOU WIE SB AG** (Women in Engineering Student Branch Affinity Group) at Silver Oak University since 2026. He drives women in engineering initiatives, community outreach, and cross-disciplinary projects.",
    },
    {
        keywords: ['webmaster', 'ieee website'],
        answer: "Setu served as **Webmaster of IEEE SOU SC SBC** from 2024–2025, designing and maintaining the official IEEE student branch website and managing digital presence across all sub-committees.",
    },
    {
        keywords: ['aws cloud club', 'technical lead', 'cloud club'],
        answer: "Setu is the **Technical Lead at AWS Cloud Club, Silver Oak University** (2025–Present). He organizes workshops, mentors 50+ students through cloud certifications, and leads real-world cloud computing projects.",
    },
    {
        keywords: ['current', 'currently', 'now', 'today'],
        answer: "Currently (Feb 2026), Setu is:\n✅ Pursuing B.Tech at Silver Oak University\n✅ Freelancing (full-stack web development)\n✅ Technical Lead at AWS Cloud Club\n✅ Chairperson of IEEE SOU WIE SB AG\n✅ Open to new opportunities!",
    },

    /* ── Projects ── */
    {
        keywords: ['project', 'projects', 'built', 'made', 'created', 'portfolio'],
        answer: "Setu has built **20+ projects** including:\n\n🛒 **E-Commerce Dashboard** — React, Node.js, MongoDB, Chart.js\n🤖 **AI Image Generator** — React, OpenAI DALL·E API\n📱 **Social Media App** — Next.js, Firebase, Socket.io\n📈 **Crypto Portfolio Tracker** — Vue.js, D3.js, CoinGecko API\n\nCheck the Projects page for full details!",
    },
    {
        keywords: ['ecommerce', 'e-commerce', 'dashboard', 'shop'],
        answer: "The **E-Commerce Dashboard** is a full-stack admin panel built with React, Node.js, MongoDB, and Chart.js. Features real-time analytics, inventory management, order tracking, and CSV/PDF exports.",
    },
    {
        keywords: ['ai image', 'image generator', 'dalle', 'openai'],
        answer: "The **AI Image Generator** uses React and OpenAI's DALL·E API to transform text prompts into stunning visuals. It features a community gallery, collection management, and multiple art style presets.",
    },
    {
        keywords: ['social media', 'social app', 'chat', 'stories'],
        answer: "Setu's **Social Media App** is a real-time platform built with Next.js, Firebase, and Socket.io. Features real-time messaging, 24h disappearing stories, infinite scroll feed, and push notifications.",
    },
    {
        keywords: ['crypto', 'cryptocurrency', 'bitcoin', 'portfolio tracker'],
        answer: "The **Crypto Portfolio Tracker** tracks live crypto prices via CoinGecko API, shows interactive D3.js charts, calculates profit/loss, and supports 100+ cryptocurrencies.",
    },

    /* ── Location & Personal ── */
    {
        keywords: ['location', 'from', 'where', 'city', 'country', 'live', 'ahmedabad', 'india', 'gujarat'],
        answer: "Setu is based in **Ahmedabad, Gujarat, India** 🇮🇳. He works remotely with clients worldwide as a freelancer.",
    },
    {
        keywords: ['age', 'how old', 'born', 'birth'],
        answer: "Setu started his B.Tech in 2023 and is expected to graduate in 2027. He's a young, passionate developer building his career while studying!",
    },
    {
        keywords: ['hobbies', 'interest', 'passion', 'like', 'enjoy', 'love'],
        answer: "Setu is passionate about:\n💻 Building web apps & exploring new tech\n☁️ Cloud computing & AWS\n🤖 AI/ML research\n🎨 UI/UX Design\n🏛️ Community leadership (IEEE, AWS Club)\n📚 Continuous learning!",
    },
    {
        keywords: ['personality', 'describe', 'person', 'character'],
        answer: "Setu is a driven, community-oriented developer who leads by example. He balances technical depth with creative design sensibility, and mentors peers while building real-world products 🚀",
    },

    /* ── Contact & Hire ── */
    {
        keywords: ['contact', 'email', 'reach', 'message', 'connect', 'touch'],
        answer: "You can reach Setu via the **Contact page** on this website. He's responsive and happy to discuss collaborations, freelance work, or opportunities! 📩",
    },
    {
        keywords: ['hire', 'available', 'open to work', 'freelance work', 'opportunity', 'opportunity'],
        answer: "Yes! Setu is **open to opportunities** 🟢 — whether freelance projects, internships, or full-time roles. Head to the Contact page to start a conversation!",
    },
    {
        keywords: ['resume', 'cv', 'download'],
        answer: "You can **download Setu's resume** directly from the Experience page. It covers his education, roles, projects, and skills in full detail.",
    },
    {
        keywords: ['linkedin', 'github', 'social', 'profile'],
        answer: "You can find Setu on **LinkedIn** and **GitHub** — links are available in the contact section of this portfolio. He's active on both platforms!",
    },

    /* ── Achievements ── */
    {
        keywords: ['achievement', 'award', 'accomplishment', 'proud', 'win', 'won'],
        answer: "Some of Setu's key achievements:\n🏆 Technical Lead at AWS Cloud Cloud (mentoring 50+ students)\n🏛️ Chairperson IEEE SOU WIE SB AG\n⭐ 8.9 CGPA with ML & Data Science Honors\n💼 20+ successful freelance projects\n🌐 Webmaster for official IEEE SOU website",
    },
    {
        keywords: ['certification', 'certified', 'certificate', 'course'],
        answer: "Setu is pursuing AWS cloud certifications and has completed courses in full-stack development, ML, and UI/UX design. He actively promotes AWS certifications among students as Technical Lead.",
    },
    {
        keywords: ['research', 'paper', 'publication'],
        answer: "Setu is involved in research initiatives at Silver Oak University as part of his B.Tech Honors program in ML & Data Science. He's working on applied ML projects and research.",
    },
];

/* ─── Fuzzy matcher ─────────────────────────────────── */
const getBotResponse = (input) => {
    const lower = input.toLowerCase().trim();

    // Score each entry by how many keywords match
    let best = null;
    let bestScore = 0;

    for (const entry of KNOWLEDGE_BASE) {
        const score = entry.keywords.reduce((acc, kw) => {
            return lower.includes(kw) ? acc + kw.length : acc; // longer keyword = stronger signal
        }, 0);
        if (score > bestScore) {
            bestScore = score;
            best = entry;
        }
    }

    if (best && bestScore > 0) {
        return best.answer;
    }

    return "Hmm, I'm not sure about that specific topic. Try asking about Setu's **skills**, **projects**, **education**, **experience**, **contact**, or **location**. I'm happy to help! 😊";
};

/* ─── Quick Prompt Chips ────────────────────────────── */
const QUICK_PROMPTS = [
    'Who is Setu?',
    'Skills & Tech Stack',
    'Projects',
    'Experience',
    'Education',
    'Hire Setu',
];

/* ─── Chatbot Component ─────────────────────────────── */
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! 👋 I'm Setu's AI assistant. I know everything about Setu — his skills, projects, experience, education, and more. What would you like to know?",
            sender: 'bot',
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickPrompts, setShowQuickPrompts] = useState(true);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const sendMessage = (text) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        setShowQuickPrompts(false);

        const userMsg = { id: Date.now(), text: trimmed, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const answer = getBotResponse(trimmed);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: answer, sender: 'bot' }]);
            setIsTyping(false);
        }, 700 + Math.random() * 400);
    };

    const handleSend = () => sendMessage(inputValue);
    const handleKeyDown = (e) => { if (e.key === 'Enter') handleSend(); };

    /* Render markdown-like bold (**text**) */
    const renderText = (text) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, i) =>
            i % 2 === 1
                ? <strong key={i}>{part}</strong>
                : part.split('\n').map((line, j, arr) =>
                    j < arr.length - 1 ? <React.Fragment key={j}>{line}<br /></React.Fragment> : line
                )
        );
    };

    return (
        <div className="chatbot-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    >
                        {/* Header */}
                        <div className="chatbot-header">
                            <div className="bot-info">
                                <div className="bot-avatar">
                                    <Bot size={18} />
                                </div>
                                <div className="bot-details">
                                    <h3>Setu's Assistant</h3>
                                    <div className="bot-status">
                                        <span className="status-dot" /> Online · Knows everything about Setu
                                    </div>
                                </div>
                            </div>
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="chatbot-messages">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    className={`message ${msg.sender}`}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {renderText(msg.text)}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="typing-indicator">
                                    <span className="typing-dot" />
                                    <span className="typing-dot" />
                                    <span className="typing-dot" />
                                </div>
                            )}

                            {/* Quick prompt chips */}
                            {showQuickPrompts && (
                                <div className="quick-prompts">
                                    <p className="quick-prompts-label"><Sparkles size={11} /> Quick questions</p>
                                    <div className="quick-prompts-list">
                                        {QUICK_PROMPTS.map(q => (
                                            <button
                                                key={q}
                                                className="quick-chip"
                                                onClick={() => sendMessage(q)}
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="chatbot-input-area">
                            <input
                                ref={inputRef}
                                type="text"
                                className="chatbot-input"
                                placeholder="Ask anything about Setu..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                className="send-btn"
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle button */}
            <motion.button
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 260 }}
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={isOpen ? 'close' : 'open'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                    >
                        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                    </motion.span>
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default Chatbot;
