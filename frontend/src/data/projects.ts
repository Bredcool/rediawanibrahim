export type Project = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    year: string;
    status: "Featured" | "Personal";
    category: "Frontend" | "Backend" | "Fullstack";
    tags: string[];
    features: string[];
    github: string;
    demo: string;
    featured: boolean;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Bred Developer 1.0",
        subtitle: "Personal Portfolio",
        description: "A modern portfolio showcasing interactive UI, smooth animations, and immersive 3D experiences with a strong focus on performance and user experience.",
        image: "/projects/portofolio-1.0.png",
        year: "2025",
        status: "Personal",
        category: "Frontend",
        tags: [
            "Vue.js",
        ],
        features: [
            "Responsive",
            "Animation",
            "Dark Mode",
            "SEO",
        ],
        github: "https://github.com/Bredcool/bred-developer",
        demo: "https://bred-developer.pages.dev",
        featured: true,
    },
    {
        id: 2,
        title: "Bred AI Workspace",
        subtitle: "AI Platform",
        description: "An AI-powered productivity platform that unifies intelligent chat, notes, file management, and collaborative workspaces into a seamless experience.",
        image: "/projects/work_in_progress.jpg",
        year: "2026",
        status: "Featured",
        category: "Fullstack",
        tags: [
            "React",
            "Go",
            "PostgreSQL",
        ],
        features: [
            "AI Chat",
            "Authentication",
            "Workspace",
            "File Manager",
            "Dashboard",
        ],
        github: "https://github.com/",
        demo: "https://",
        featured: false,
    },
    {
        id: 3,
        title: "Bred AI Studio",
        subtitle: "AI Productivity",
        description: "A powerful AI creation platform for building, testing, and managing prompts, workflows, and AI-powered applications from a single workspace.",
        image: "/projects/work_in_progress.jpg",
        year: "2025",
        status: "Featured",
        category: "Fullstack",
        tags: [
            "React",
            "Go",
            "PostgreSQL",
        ],
        features: [
            "JWT",
            "REST API",
            "Redis",
            "Docker",
        ],
        github: "https://github.com/",
        demo: "https://",
        featured: false,
    },
    {
        id: 4,
        title: "SaaS Dashboard",
        subtitle: "SaaS Dashboard",
        description: "A scalable SaaS dashboard featuring secure authentication, role-based access control, analytics, reporting system, and real-time business insights.",
        image: "/projects/work_in_progress.jpg",
        year: "2025",
        status: "Personal",
        category: "Fullstack",
        tags: [
            "Vue.js",
            "Go",
            "PostgreSQL",
        ],
        features: [
            "Charts",
            "Role",
            "Reports",
            "Analytics",
        ],
        github: "https://github.com/",
        demo: "https://",
        featured: false,
    },
];