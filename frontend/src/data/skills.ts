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
            "Vue.js",
            "Angular",
            "Bootstrap",
            "HTML",
            "CSS",
        ],
    },
    {
        title: "Backend",
        icon: "backend",
        items: [
            "Go",
            "Node.js",
            "C#",
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