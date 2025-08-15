import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.titleRow}>
        <a className={styles.title} href="/">
          Sama Al-Oda
        </a>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          <img 
            className={styles.toggleIcon}
            src={darkMode ? getImageUrl("nav/brightness.png") : getImageUrl("nav/night-mode.png")}
            alt="toggle theme"
          />
        </button>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="https://drive.google.com/file/d/1XfEpQ8iwQ7FRdjc0ewb9CQP1YKu24IB3/view?usp=sharing">
              <img className={styles.image} src={getImageUrl("nav/resume.png")}></img>
              Resume</a>
          </li>
          <li>
            
            <a href="#about">
              <img className={styles.image} src={getImageUrl("nav/user.png")}></img>
              About</a>
          </li>
          <li>
            <div>
            <a href="#experience">
              <img className={styles.image} src={getImageUrl("nav/experience.png")}></img>
              Experience</a>
              </div>
          </li>
          <li>
            <a href="#projects">
              <img className={styles.image} src={getImageUrl("nav/projects.png")}></img>
              Projects</a>
          </li>
          <li>
            <a href="#contact">
              <img className={styles.image} src={getImageUrl("nav/contact.png")}></img>
              Contact</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
