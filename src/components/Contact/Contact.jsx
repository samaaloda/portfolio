import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me</h2>
        <h3 className={styles.coffee}>I love coffee, let's chat!</h3>
      </div>
      <ul className={styles.links}>
      
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sama-al-oda/">linkedin.com/sama-al-oda</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/samaaloda">github.com/samaaloda</a>
        </li>
      </ul>
    </footer>
  );
};
