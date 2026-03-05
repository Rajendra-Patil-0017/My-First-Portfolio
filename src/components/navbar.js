import "../Pages/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/certificates", label: "Certificates" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-glass">
        {/* Left */}
        <div className="navbar-left">
          <div className="avatar">RP</div>
          <div className="name">
            <strong>Rajendra Patil</strong>
            <span>Data Analyst | Frontend Developer</span>
          </div>
        </div>

        {/* Center Menu — Desktop */}
        <ul className={`navbar-center ${menuOpen ? "open" : ""}`}>
          {navLinks.map(({ to, label }) => (
            <li
              key={to}
              className={location.pathname === to ? "active" : ""}
              onClick={closeMenu}
            >
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="navbar-right">
          <span className="status-dot"></span>
          <span className="status-text">Available</span>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Navigation menu">
          <ul>
            {navLinks.map(({ to, label }) => (
              <li
                key={to}
                className={location.pathname === to ? "active" : ""}
                onClick={closeMenu}
              >
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="mobile-status">
            <span className="status-dot"></span>
            <span className="status-text">Available for work</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
