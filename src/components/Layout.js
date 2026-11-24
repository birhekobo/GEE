import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

const Layout = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <button
        type="button"
        className={`back-to-top${showBackToTop ? " back-to-top--visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
      >
        ↑
      </button>
    </div>
  );
};

export default Layout;
