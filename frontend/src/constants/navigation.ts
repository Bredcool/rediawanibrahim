export const navigation = [
    {
        id: "home",
        label: "Home",
        href: "#home",
    },
    {
        id: "projects",
        label: "Projects",
        href: "#projects",
    },
    {
        id: "about",
        label: "About",
        href: "#about",
    },
    {
        id: "contact",
        label: "Contact",
        href: "#contact",
    },
] as const;

export type NavigationSection = (typeof navigation)[number]["id"];