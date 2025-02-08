import React from "react";
import styles from "./about.module.scss";
import profilePicture from "src/assets/profilePicture.jpg";

const About = () => {
  return (
    <section className={styles.wrapper}>
      <img
        src={profilePicture}
        alt="Dmitry Lebedev"
        className={styles.profilePhoto}
      />
      <h2>About me</h2>
      <p>
        I'm a Front End developer with 5 years experience in JavaScript coding
        and using React.js technologies. I'm constantly developing and learning
        new technologies in IT.
        <br />
        I'm open to projects and vacancies.
      </p>
    </section>
  );
};

export default About;
