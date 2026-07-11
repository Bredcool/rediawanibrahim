import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiMail,
    FiCopy,
    FiCheckCircle,
    FiSend,
    FiMapPin,
} from "react-icons/fi";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import "./contact.css";
import "../background/background.css";

export default function Contact() {
    const email = "rediawanibrahim15@gmail.com";

    const [copied, setCopied] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const copyEmail = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = email;

                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";

                document.body.appendChild(textArea);

                textArea.focus();
                textArea.select();

                document.execCommand("copy");

                document.body.removeChild(textArea);
            }

            setCopied(true);
            setShowToast(true);

            setTimeout(() => {
                setCopied(false);
                setShowToast(false);
            }, 2000);

        } catch (error) {
            console.error(error);
        }
    };

    const sendEmail = () => {
        const subject = encodeURIComponent(
            "Let's Work Together"
        );

        const body = encodeURIComponent(`Hi Rediawan Ibrahim (Bred),

I found your portfolio and would like to connect regarding a potential opportunity.

Here are a few details:

Company:
Position:
Project / Opportunity:
Preferred Start Date:

Looking forward to your response.

Best regards,
`);

        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=rediawanibrahim15@gmail.com&su=${subject}&body=${body}`,
            "_blank"
        );
    };

    return (
        <section id="contact" className="contact">

            <div className="contact-bg">
                <div className="grid-bg"></div>
                <div className="noise"></div>
                <div className="glow glow-left"></div>
                <div className="glow glow-right"></div>
            </div>

            <div className="contact-glow glow-left" />
            <div className="contact-glow glow-right" />

            <div className="container">

                {/* ================= HEADER ================= */}

                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >
                    <span className="contact-badge">
                        CONTACT
                    </span>

                    <h2>
                        Let's Create Something
                        <span> Exceptional.</span>
                    </h2>

                    <p>
                        I'm always open to discussing new opportunities, challenging projects, and
                        collaborations focused on building high-quality digital products.
                    </p>
                </motion.div>

                {/* ================= GRID ================= */}

                <div className="contact-grid">

                    {/* LEFT */}

                    <motion.div
                        className="contact-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        {/* EMAIL */}

                        <div className="contact-card">

                            <div className="card-title">

                                <FiMail />

                                <h3>Email</h3>

                            </div>

                            <p className="card-desc">
                                Have a project, opportunity, or question? I'd be glad to hear from you.
                            </p>

                            <div className="email-box">

                                <span>{email}</span>

                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    className="copy-btn"
                                >
                                    {copied ? <FiCheckCircle /> : <FiCopy />}
                                </button>

                            </div>

                        </div>

                        {/* AVAILABILITY */}

                        <div className="contact-card">

                            <div className="card-title">

                                <FiCheckCircle />

                                <h3>Availability</h3>

                            </div>

                            <ul className="availability-list">

                                <li>
                                    ✅ Open to Remote Opportunities
                                </li>

                                <li>
                                    ✅ Available for Fullstack Development
                                </li>

                                <li>
                                    ✅ Open to Long-Term, Contract & Freelance Projects
                                </li>

                                <li>
                                    ✅ Response Within 24 Hours
                                </li>

                            </ul>

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className="contact-right"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        {/* SOCIAL */}

                        <div className="contact-card">

                            <div className="card-title">

                                <FiMapPin />

                                <h3>Connect</h3>

                            </div>

                            <a
                                href="https://github.com/Bredcool"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                            >
                                <FaGithub />

                                <div>

                                    <strong>GitHub</strong>

                                    <span>
                                        Explore my projects and open-source work.
                                    </span>

                                </div>

                            </a>

                            <a
                                href="https://www.linkedin.com/in/rediawan-ibrahim-760b0a232"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                            >
                                <FaLinkedin />

                                <div>

                                    <strong>LinkedIn</strong>

                                    <span>
                                        Let's connect and discuss new opportunities.
                                    </span>

                                </div>

                            </a>

                        </div>

                        {/* CTA */}

                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={sendEmail}
                            className="contact-cta"
                        >
                            <div>
                                <small>AVAILABLE FOR NEW OPPORTUNITIES</small>

                                <h3>Let's Build Something Exceptional</h3>
                            </div>

                            <FiSend size={22} />
                        </motion.button>

                    </motion.div>

                </div>
            </div>

            <AnimatePresence>
                {showToast && (
                    <motion.div
                        className="toast"

                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: .9
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}

                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: .95
                        }}

                        transition={{
                            duration: .25
                        }}
                    >
                        <FiCheckCircle />

                        <span>
                            Email copied successfully
                        </span>

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}