import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education & Academics</h3>
              <p>
              Key coursework at McMaster: Machine Learning & AI Applications, Biomedical Data Analysis, Data Structures & Algorithms, Software Testing, Databases, Software Security
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Fun Facts About Me</h3>
              <p>
              I sew my own clothes and love exploring <bold>fashion history</bold>. I speak <bold>four languages</bold>: English, Arabic, French, and Turkish.
            </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>What I'm Looking For</h3>
              <p>
              Open to Summer 2026 internships or research positions in software engineering, machine learning, and biomedical technology. Passionate about projects that combine innovation with real-world impact.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
