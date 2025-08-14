import React from "react";
import Masonry from "react-masonry-css";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    600: 1,
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.projects}
        columnClassName={styles.projectsColumn}
      >
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </Masonry>
    </section>
  );
};
