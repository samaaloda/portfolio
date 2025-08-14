import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      
        <div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
        <br></br>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
        
        <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.box}>
            <div className={styles.flower}>
              <div className={`${styles.petal} ${styles.one}`}></div>
              <div className={`${styles.petal} ${styles.two}`}></div>
              <div className={`${styles.petal} ${styles.three}`}></div>
              <div className={`${styles.petal} ${styles.four}`}></div>
              <div className={`${styles.petal} ${styles.five}`}></div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          </div>
        ))}
        </div>
        </div>
      
    </section>
  );
};
