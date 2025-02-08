import React from "react";
import styles from "./skills.module.scss";
import skillsArray from "src/_utils/skills.json";

const Skills = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Skills</h2>
      <div className={styles.skillsList}>
        {skillsArray.skills.map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
