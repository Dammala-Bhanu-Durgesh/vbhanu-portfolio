import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["About","Skills","Experience","Projects","Internships","Programs","Research","Achievements","Contact"];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300" style={{
      background: scrolled ? "rgba(6,13,26,0.96)" : "rgba(6,13,26,0.75)",
      backdropFilter: "blur(16px)",
      borderBottom: scrolled ? "1px solid rgba(60,110,80,0.2)" : "1px solid transparent",
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-black tracking-tight">
          <span style={{ color: "#6daa88" }}>Bhanu</span>
          <span className="text-white"> Durgesh</span>
        </a>
        <div className="hidden md:flex gap-7 text-sm text-gray-400 flex-wrap">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link text-gray-400">{link}</a>
          ))}
        </div>
        <a href="/resume.pdf" target="_blank" rel="noreferrer"
          className="btn-primary hidden md:flex items-center gap-2 text-sm px-5 py-2 rounded-lg font-semibold">
          <FaDownload className="text-xs" /> Resume
        </a>
        <button className="md:hidden text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4" style={{ background: "rgba(6,13,26,0.98)", borderTop: "1px solid rgba(60,110,80,0.15)" }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="block py-3 text-gray-300 border-b nav-link"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
              onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            className="btn-primary mt-4 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-sm">
            <FaDownload className="text-xs" /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
