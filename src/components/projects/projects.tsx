import React from "react";
import styles from "./projects.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { projects } from "src/_utils/projects";

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className={styles.wrapper}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className={styles.projectSection}
        >
          <h2>Projects experience</h2>
          <div className={styles.projectCard}>
            <Slider {...sliderSettings}>
              {project.images.map((el) => (
                <img
                  src={el}
                  alt="project screenshot"
                  className={styles.projectImage}
                />
              ))}
            </Slider>
            <h3>{project.title}</h3>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url}
            </a>
            <p>{project.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
