import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <h1>Dmitry Lebedev</h1>
      <p>Middle+ Frontend Developer | React JS / Next JS Specialist</p>
      <div className={styles.socialIcons}>
        <a
          href="https://github.com/GooseDimkin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gustav-lebedev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://t.me/real_gustav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
      </div>
    </section>
  );
};

export default Hero;
