import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { RiHome4Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
// import { IoCodeSlashOutline  } from "react-icons/io5";
import { GiAngelOutfit } from "react-icons/gi";

import { MdOutlineWifiCalling3 } from "react-icons/md";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const wrapperRef = useRef();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  //  Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navlogo">
        <Link to="/" onClick={closeMenu}>
          <h2>NJ</h2>
        </Link>
      </div>

      {/*  Wrap both menu + hamburger in same ref */}
      <div ref={wrapperRef} className="navmenu-wrapper">
        <ul className={`navitems ${menuOpen ? "open" : ""}`}>
          <li className="navitem">
            <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}> <RiHome4Line/> Home</Link>
          </li>
          <li className="navitem">
            <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={closeMenu}><FaRegUser/> About</Link>
          </li>
          {/* <li className="navitem">
            <Link to="/project" className={isActive("/project") ? "active" : ""} onClick={closeMenu}><IoCodeSlashOutline/>Project</Link>
          </li> */}
          <li className="navitem">
            <Link to="/project" className={isActive("/project") ? "active" : ""} onClick={closeMenu}><GiAngelOutfit/> Project</Link>
          </li>
          <li className="navitem">
            <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu}><MdOutlineWifiCalling3/> Contact</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}
