import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function MainLayout() {
    return (
        <div className="app-wrapper">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}