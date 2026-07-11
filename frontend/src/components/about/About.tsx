import { motion } from "framer-motion";
import { FiMapPin, FiBriefcase, FiCode, FiCpu, FiLayers, FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { skills } from "../../data/skills";
import { experience } from "../../data/experience";

import "./about.css";
import "../background/background.css";
import ElectricBorder from "../effects/ElectricBorder/ElectricBorder";
import CountUp from "../../components/common/countUp/CountUp";

const stats = [
    {
        value: "15+",
        label: "Projects",
    },
    {
        value: "10+",
        label: "Technologies",
    },
    {
        value: "2+",
        label: "Years Learning",
    },
    {
        value: "∞",
        label: "Passion",
    },
];

export default function About() {
    return (
        <section id="about" className="about">

            <div className="about-bg">
                <div className="grid-bg"></div>
                <div className="noise"></div>
                <div className="about-glow glow-left"></div>
                <div className="about-glow glow-right"></div>
            </div>

            <div className="container">

                {/* ========================= */}
                {/* SECTION HEADER */}
                {/* ========================= */}

                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-badge">
                        About Me
                    </span>

                    <h2>
                        Designing and engineering digital products.
                    </h2>

                    <p>
                        Fullstack Developer passionate about building reliable software, intuitive user interfaces, 
                        and scalable backend systems that deliver real business value.
                    </p>
                </motion.div>

                {/* ========================= */}
                {/* PROFILE + STORY */}
                {/* ========================= */}

                <div className="about-grid">

                    {/* LEFT */}

                    <ElectricBorder>
                        <motion.div
                            className="profile-card"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >

                            <div className="avatar">

                                <div className="avatar-ring">

                                    <img
                                        src="/data/rediawan-ibrahim-bred-fullstack-developer.jpg"
                                        alt="Rediawan Ibrahim (Bred)"
                                    />

                                </div>

                                <span className="online-dot"></span>

                            </div>

                            <h3>Bred</h3>

                            <p className="role">
                                Fullstack Developer
                            </p>

                            <div className="profile-info">

                                <div>

                                    <FiMapPin />

                                    Indonesia

                                </div>

                                <div>

                                    <FiBriefcase />

                                    Available for Remote

                                </div>

                            </div>

                            <a
                                href="#contact"
                                className="profile-btn"
                            >
                                Let's Talk

                                <FiArrowUpRight />

                            </a>

                        </motion.div>
                    </ElectricBorder>

                    {/* RIGHT */}

                    <motion.div
                        className="story-card"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <span className="card-title">
                            WHO I AM
                        </span>

                        <h3>
                            Transforming ideas into scalable digital products.
                        </h3>

                        <p>
                            I build web applications that balance intuitive user experiences with scalable system architecture. 
                            My focus is writing clean, maintainable code that performs reliably as products grow.
                        </p>

                        <p>
                            My primary stack includes React, Go, PostgreSQL, and modern cloud technologies. I enjoy designing systems 
                            that are efficient, easy to maintain, and built around best engineering practices.
                        </p>

                        <p>
                            Beyond daily development, I continuously sharpen my skills through personal projects, exploring areas such 
                            as AI-powered applications, automation, scalable backend architecture, and modern software engineering.
                        </p>

                    </motion.div>

                </div>

                {/* ========================= */}
                {/* STATS */}
                {/* ========================= */}

                <motion.div
                    className="stats-grid"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    {stats.map((item) => (

                        <div
                            className="stat-card"
                            key={item.label}
                        >

                            <h3>
                                {item.value === "∞" ? (
                                    item.value
                                ) : (
                                    <CountUp
                                        value={parseInt(item.value)}
                                        suffix={item.value.replace(/\d+/g, "")}
                                    />
                                )}
                            </h3>

                            <p>{item.label}</p>

                        </div>

                    ))}

                </motion.div>

                {/* ========================= */}
                {/* SKILLS */}
                {/* ========================= */}

                <motion.div
                    className="skills-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >

                    <div className="skills-header">

                        <span>
                            Tech Stack
                        </span>

                        <h3>
                            Technologies I use
                        </h3>

                    </div>

                    <div className="skills-wrapper">

                        {skills.map((category) => (

                            <div
                                className="skill-category"
                                key={category.title}
                            >

                                <div className="category-title">

                                    {category.icon === "frontend" && <FiLayers />}
                                    {category.icon === "backend" && <FiCpu />}
                                    {category.icon === "database" && <FiCode />}
                                    {category.icon === "tools" && <FiBriefcase />}

                                    <span>
                                        {category.title}
                                    </span>

                                </div>

                                <div className="skill-list">

                                    {category.items.map((skill) => (

                                        <span
                                            key={skill}
                                            className="skill-chip"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </motion.div>

                {/* ========================= */}
                {/* EXPERIENCE */}
                {/* ========================= */}

                <motion.div
                    className="experience-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >

                    <div className="skills-header">

                        <span>
                            Journey
                        </span>

                        <h3>
                            Experience Timeline
                        </h3>

                    </div>

                    <div className="timeline">

                        {experience.map((item, index) => (

                            <motion.div
                                className="timeline-item"
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >

                                <div className="timeline-content">

                                    <div className="timeline-period">
                                        <FiCalendar />
                                        <span>{item.period}</span>
                                    </div>

                                    <div className="timeline-role">
                                        <h4>{item.role}</h4>
                                    </div>

                                    <div className="timeline-company">
                                        {item.company}
                                    </div>

                                    <div className="timeline-desc">
                                        <ul>
                                            {item.responsibilities.map((responsibility, index) => (
                                                <li key={index}>
                                                    {responsibility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                </div>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </div>

        </section>
    );
}