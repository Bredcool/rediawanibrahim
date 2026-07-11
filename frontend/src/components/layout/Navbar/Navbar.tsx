import { useEffect, useState } from "react";
import { navigation, type NavigationSection } from "../../../constants/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";

type Section = NavigationSection;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<Section>("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            setScrolled(scrollY > 20);

            const sections = navigation.map(
                (item) => item.id
            ) as Section[];

            let current: Section = "home";

            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (!el) return;

                const rect = el.getBoundingClientRect();

                // lebih stabil dari sebelumnya (center detection)
                if (rect.top <= 150 && rect.bottom >= 150) {
                    current = section;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMobileOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    // smooth scroll + close mobile menu
    const scrollToSection = (section: Section) => {
        const el = document.getElementById(section);

        if (!el) return;

        // tinggi navbar
        const navbarHeight = 90;

        const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });

        setMobileOpen(false);
    };

    // improved CV download (clean + fallback safe)
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/data/CV Rediawan Ibrahim (English).pdf";
        link.setAttribute("download", "CV Rediawan Ibrahim.pdf");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-container">

                    {/* LOGO */}
                    <div
                        className="logo"
                        onClick={() => scrollToSection("home")}
                    >
                        <span className="logo-bracket">&lt;</span>
                        Bred
                        <span className="logo-bracket">/&gt;</span>
                    </div>

                    {/* DESKTOP NAV */}
                    <nav className="nav-links">
                        {navigation.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-item ${activeSection === item.id ? "active" : ""
                                    }`}
                            >
                                {item.label}
                                <span className="indicator" />
                            </button>
                        ))}
                    </nav>

                    {/* ACTIONS */}
                    <div className="nav-actions">

                        <button
                            className="cv-btn"
                            onClick={downloadCV}
                        >
                            CV
                        </button>

                        <button
                            className="hamburger"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? (
                                <FiX size={28} />
                            ) : (
                                <FiMenu size={28} />
                            )}
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
                        {navigation.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`mobile-item ${activeSection === item.id ? "active" : ""
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        <button
                            className="mobile-cv"
                            onClick={downloadCV}
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </header>

            {/* BACKDROP */}
            {mobileOpen && (
                <div
                    className="backdrop"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    );
}