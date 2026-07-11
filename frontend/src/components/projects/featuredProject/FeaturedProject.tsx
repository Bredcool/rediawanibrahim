import "./featuredProject.css";

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
};

export default function FeaturedProject({
    title,
    subtitle,
    description,
    image,
    year,
    status,
    category,
    tags,
    features,
    github,
    demo,
}: Props) {
    return (
        <motion.section
            className="featured-project"
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
            <div className="featured-image">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="featured-content">

                <div className="featured-top">

                    <span className="featured-badge">
                        ⭐ {status}
                    </span>

                    <span className="featured-year">
                        {year}
                    </span>

                </div>

                <span className="featured-category">
                    {category}
                </span>

                <h2>
                    {title}
                </h2>

                <h4>
                    {subtitle}
                </h4>

                <p>
                    {description}
                </p>

                <div className="feature-list">

                    {features.map((feature) => (

                        <div
                            key={feature}
                            className="feature-item"
                        >
                            ✔ {feature}
                        </div>

                    ))}

                </div>

                <div className="featured-tags">

                    {tags.map((tag) => (

                        <span key={tag}>
                            {tag}
                        </span>

                    ))}

                </div>

                <div className="featured-actions">

                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiGithub />

                        Source Code
                    </a>

                    <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ExternalLink
                            size={18}
                        />

                        Live Demo
                    </a>

                </div>

            </div>
        </motion.section>
    );
}