import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">

                <div className="footer-top">
                    <h2>Building software with purpose.</h2>

                    <p>
                        Rediawan Ibrahim (Bred)<br />
                        Fullstack Developer<br />
                        Open to Remote Opportunities
                    </p>
                </div>

                <nav className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="footer-tech">
                    React · Go · PostgreSQL
                </div>

                <small className="copyright">
                    © {new Date().getFullYear()} Rediawan Ibrahim (Bred) — All rights reserved
                </small>

            </div>
        </footer>
    );
}