import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World!</h1>
        <p className={styles.description}>
          I'm Sama, a Software & Biomedical Engineering Student @ McMaster University
        </p>
        <a href="mailto:samaaloda27@gmail.com" className={styles.contactBtn}>
          More about me!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Animated image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
