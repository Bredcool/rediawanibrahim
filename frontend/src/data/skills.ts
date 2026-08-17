export interface SkillCategory {
    title: string;
    icon: "frontend" | "backend" | "database" | "tools";
    items: string[];
}

export const skills: SkillCategory[] = [
    {
        title: "Frontend",
        icon: "frontend",
        items: [
            "React",
            "TypeScript",
            "Vue.js",
            "Angular",
            "HTML",
            "CSS",
            "Bootstrap",
        ],
    },
    {
        title: "Backend",
        icon: "backend",
        items: [
            "Go (Fiber)",
            "JavaScript (Node.js, Express.js)",
            "C# (.NET)",
        ],
    },
    {
        title: "Database",
        icon: "database",
        items: [
            "PostgreSQL",
            "MySQL",
            "Microsoft SQL",
        ],
    },
    {
        title: "Tools",
        icon: "tools",
        items: [
            "Git",
            "GitHub",
            "Docker",
            "Cloudflare",
            "Postman",
        ],
    },
];