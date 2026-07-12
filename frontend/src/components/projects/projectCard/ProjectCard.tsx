import "./projectCard.css";

import { motion } from "framer-motion";

import { ExternalLink } from "lucide-react";

import { SiGithub } from "react-icons/si";

type Props = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    year: string;
    status: string;
    category: string;
    tags: string[];
    features: string[];
    github: string;
    demo: string;
    featured: boolean;
};

export default function ProjectCard({
    title,
    description,
    image,
    status,
    category,
    tags,
    github,
    demo,
}: Props) {
    return (
        <motion.article
            className="project-card"
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: .25,
            }}
        >

            <div className="image-wrapper">

                <img
                    src={image}
                    alt={title}
                />

                <div className="image-overlay" />

                <div className="project-top">

                    <span className="status">
                        {status}
                    </span>

                    <span className="category">
                        {category}
                    </span>

                </div>

                <div className="image-actions">

                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiGithub />
                        Code
                    </a>

                    <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ExternalLink
                            size={16}
                        />
                        Live
                    </a>

                </div>

            </div>

            <div className="content">

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="tags">

                    {tags.map((tag) => (

                        <span key={tag}>
                            {tag}
                        </span>

                    ))}

                </div>

            </div>

        </motion.article>
    );
}