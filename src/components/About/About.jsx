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
              <h3>Full Stack Development</h3>
              <p>
              Experienced in HTML/CSS, JavaScript, Python, Java, and C by developing object-oriented software, user interface, and data pipelines.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Testing</h3>
              <p>
              Experienced in software testing, development and troubleshooting, in individual and team-setting environments.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Interpersonally Skilled</h3>
              <p>
              Strong interpersonal skills, including: leadership, communication, organization and time-management
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
