import { useState } from "react";
import { Menu, X } from "lucide-react";
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Course Work", href: "#coursework" },
    { name: "Contact", href: "#contact" },
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
