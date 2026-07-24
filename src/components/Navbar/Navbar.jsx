import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import './Navbar.css'

const Navbar = ({ toggleDark, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Course Work", href: "#coursework" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "https://drive.google.com/file/d/1C55-fAPrIVAjd58TLp6B0X-A7apEvDEF/view?usp=sharing" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <h1 className="logo">
          Mahima<span>.Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button className="theme-toggle-btn" onClick={toggleDark} aria-label="Toggle theme">
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
