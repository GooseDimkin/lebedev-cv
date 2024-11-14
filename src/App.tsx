import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./App.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    images: [
      "assets/projects/leadQuiz/leadQuiz1.jpg",
      "assets/projects/leadQuiz/leadQuiz2.jpg",
    ],
    title: "LeadQuiz",
    description:
      "https://leadquiz.com/ As a front-end developer, I developed a website that allows users to generate survey forms. Buy subscriptions. And the owner of the site has administrator rights and access to the admin page to edit and add new templates for forms, create or edit new plans for subscriptions. The stack of technologies that I used is: JavaScript, TypeScript, Redux, REST API, Stripe.",
  },
  {
    images: [
      "assets/projects/leadQuiz/leadQuiz1.jpg",
      "assets/projects/leadQuiz/leadQuiz2.jpg",
    ],
    title: "",
    description: "",
  },
  {
    images: [
      "assets/projects/leadQuiz/leadQuiz1.jpg",
      "assets/projects/leadQuiz/leadQuiz2.jpg",
    ],
    title: "",
    description: "",
  },
];

const skills = [
  "JavaScript",
  "React",
  "Redux",
  "HTML",
  "CSS",
  "Node.js",
  "Git",
];

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

function App() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <h1>Dmitry Lebedev</h1>
        <p>Middle+ Frontend Developer | React JS / Next JS Specialist</p>
        <div className={styles.socialIcons}>
          <a href="https://github.com/yourprofile">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourprofile">
            <FaTwitter />
          </a>
        </div>
      </section>

      <section className={styles.about}>
        <img
          src="assets/profilePicture.jpg"
          alt="Dmitry Lebedev"
          className={styles.profilePhoto}
        />
        <h2>About me</h2>
        <p>
          I'm a Front End developer with 5 years experience in JavaScript coding
          and using React.js technologies. I'm constantly developing and
          learning new technologies in IT.
          <br />
          I'm open to projects and vacancies.
        </p>
      </section>

      <section className={styles.projects}>
        <h2>Projects experience</h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
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
            <p>{project.description}</p>
          </motion.div>
        ))}
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <section className={styles.skills}>
          <h2>Навыки</h2>
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </motion.div>

      <footer className={styles.footer}>
        <p>© 2024 Dmitry Lebedev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
