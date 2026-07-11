import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import "./home.css";
import "./home-background.css";
import "./home-card.css";
import "./home-responsive.css";
import "./home-animation.css";
import ScrollVelocity from "../effects/ScrollVelocity/ScrollVelocity";
import CountUp from "../../components/common/countUp/CountUp";

import {
    SiReact,
    SiVuedotjs,
    SiGo,
    SiNodedotjs,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiGithub,
} from "react-icons/si";

const techs = [
    "React • Vue.js • Go • Node.js • PostgreSQL • Docker • Git • GitHub •",
];

export default function Home() {
    return (
        <section id="home" className="home">

            <div className="home-bg">
                <div className="home-grid"></div>
                <div className="scan-line"></div>
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
                <div className="vignette"></div>
            </div>

            <div className="aurora" />
            <div className="home-grid-overlay" />

            <div className="container">

                <div className="home-wrapper">

                    {/* LEFT */}

                    <motion.div
                        className="home-left"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                    >

                        <span className="badge">
                            ● Available for Work
                        </span>

                        <h1 className="home-title">
                            Hi, I'm
                            <br />
                            <span>Rediawan Ibrahim (Bred)</span>
                        </h1>

                        <div className="home-role">

                            <TypeAnimation
                                sequence={[
                                    "Software Engineer",
                                    1500,
                                    "Fullstack Developer",
                                    1500,
                                    "Programmer",
                                    1500,
                                ]}
                                repeat={Infinity}
                            />

                        </div>

                        <p className="home-desc">
                            Building scalable, high-performance web applications with React, Go, and PostgreSQL — 
                            crafted with clean architecture, maintainable code, and user-focused design.
                        </p>

                        {/* Statistics */}

                        <div className="home-stats">

                            <div>
                                <h3>
                                    <CountUp
                                        value={15}
                                        suffix="+"
                                    />
                                </h3>
                                <span>Projects</span>
                            </div>

                            <div>
                                <h3>
                                    <CountUp
                                        value={10}
                                        suffix="+"
                                    />
                                </h3>
                                <span>Technologies</span>
                            </div>

                            <div>
                                <h3>
                                    <CountUp
                                        value={2}
                                        suffix="+"
                                    />
                                </h3>
                                <span>Years of Experience</span>
                            </div>

                        </div>

                        {/* Tech */}

                        <div className="home-tech">
                            <ScrollVelocity
                                texts={techs}
                                velocity={30}
                                className="home-tech-scroll"
                            />
                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className="home-right"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <div className="orbit-wrapper">

                            {/* Orbit luar */}

                            <div className="orbit orbit-1">

                                <div className="orbit-item postgres">
                                    <div className="tech">
                                        <SiPostgresql />
                                    </div>
                                </div>

                                <div className="orbit-item docker">
                                    <div className="tech">
                                        <SiDocker />
                                    </div>
                                </div>

                                <div className="orbit-item git">
                                    <div className="tech">
                                        <SiGit />
                                    </div>
                                </div>

                                <div className="orbit-item github">
                                    <div className="tech">
                                        <SiGithub />
                                    </div>
                                </div>

                            </div>

                            {/* Orbit dalam */}

                            <div className="orbit orbit-2">

                                <div className="orbit-item react">
                                    <div className="tech">
                                        <SiReact />
                                    </div>
                                </div>

                                <div className="orbit-item vuedotjs">
                                    <div className="tech">
                                        <SiVuedotjs />
                                    </div>
                                </div>

                                <div className="orbit-item go">
                                    <div className="tech">
                                        <SiGo />
                                    </div>
                                </div>

                                <div className="orbit-item nodedotjs">
                                    <div className="tech">
                                        <SiNodedotjs />
                                    </div>
                                </div>

                            </div>

                            {/* Foto  */}

                            <div className="profile-wrapper">

                                <img
                                    src="/data/rediawan-ibrahim-bred-fullstack-developer.jpg"
                                    alt="Rediawan Ibrahim (Bred)"
                                    className="profile-image"
                                />

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );

}