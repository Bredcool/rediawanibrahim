import { useMemo } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../../data/projects";
import FeaturedProject from "./featuredProject/FeaturedProject";
import ProjectCard from "./projectCard/ProjectCard";

import "./projects.css";
import "../background/background.css";
import ElectricBorder from "../effects/ElectricBorder/ElectricBorder";
import CountUp from "../../components/common/countUp/CountUp";

export default function Projects() {

    const featuredProject = useMemo(() => {
        return projects.find((p) => p.featured);
    }, []);

    const projectList = projects
        .filter((project) => !project.featured)
        .sort((a, b) => Number(b.year) - Number(a.year));

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="projects" className="projects">
            <div className="projects-bg">
                <div className="grid-bg"></div>
                <div className="noise"></div>
                <div className="project-glow glow-left"></div>
                <div className="project-glow glow-right"></div>
            </div>

            <div className="container">

                {/* Header */}

                <motion.div
                    className="projects-header"
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    <span className="section-badge">
                        MY PROJECT
                    </span>

                    <h2 className="section-title">
                        Featured Work
                    </h2>

                    <p className="section-desc">
                        A selection of projects demonstrating scalable architecture, clean design, and modern software engineering.
                    </p>
                </motion.div>

                {/* Stats */}

                <motion.div
                    className="project-stats"
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    <div className="stat-card">
                        <h3>
                            <CountUp
                                value={
                                    projects.filter(
                                        (p) => p.status === "Featured"
                                    ).length
                                }
                                color="#00ff9d"
                            />
                        </h3>

                        <span>Featured Project</span>
                    </div>

                    <div className="stat-card">
                        <h3>
                            <CountUp
                                value={
                                    projects.filter(
                                        (p) => p.status === "Personal"
                                    ).length
                                }
                            />
                        </h3>

                        <span>Personal Project</span>
                    </div>

                    <div className="stat-card">
                        <h3>
                            <CountUp
                                value={
                                    projects.length
                                }
                            />
                        </h3>

                        <span>Total Project</span>
                    </div>
                </motion.div>

                {/* Featured */}

                {featuredProject && (
                    <>
                        <div className="featured-title">
                            ⭐ Featured Project
                        </div>

                        <ElectricBorder>

                            <FeaturedProject
                                {...featuredProject}
                            />
                        </ElectricBorder>
                    </>
                )}

                {/* Grid */}

                <motion.div
                    className="grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {projectList.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                        >
                            <Tilt
                                tiltMaxAngleX={8}
                                tiltMaxAngleY={8}
                                glareEnable
                                glareMaxOpacity={0.15}
                            >
                                <ProjectCard {...project} />
                            </Tilt>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}