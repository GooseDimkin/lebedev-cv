import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import styles from "./App.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profilePicture from "src/assets/profilePicture.jpg";

import leadQuiz1 from "src/assets/projects/leadQuiz/leadQuiz1.jpg";
import leadQuiz2 from "src/assets/projects/leadQuiz/leadQuiz2.jpg";
import leadQuiz3 from "src/assets/projects/leadQuiz/leadQuiz3.jpg";
import leadQuiz4 from "src/assets/projects/leadQuiz/leadQuiz4.jpg";
import leadQuiz5 from "src/assets/projects/leadQuiz/leadQuiz5.jpg";
import leadQuiz6 from "src/assets/projects/leadQuiz/leadQuiz6.jpg";
import leadQuiz7 from "src/assets/projects/leadQuiz/leadQuiz7.jpg";
import leadQuiz8 from "src/assets/projects/leadQuiz/leadQuiz8.jpg";
import leadQuiz9 from "src/assets/projects/leadQuiz/leadQuiz9.jpg";
import leadQuiz10 from "src/assets/projects/leadQuiz/leadQuiz10.jpg";

import untapped1 from "src/assets/projects/untapped/untapped1.jpg";
import untapped2 from "src/assets/projects/untapped/untapped2.jpg";
import untapped3 from "src/assets/projects/untapped/untapped3.jpg";
import untapped4 from "src/assets/projects/untapped/untapped4.jpg";
import untapped5 from "src/assets/projects/untapped/untapped5.jpg";
import untapped6 from "src/assets/projects/untapped/untapped6.jpg";
import untapped7 from "src/assets/projects/untapped/untapped7.jpg";
import untapped8 from "src/assets/projects/untapped/untapped8.jpg";
import untapped9 from "src/assets/projects/untapped/untapped9.jpg";
import untapped10 from "src/assets/projects/untapped/untapped10.jpg";

const projects = [
  {
    images: [
      leadQuiz1,
      leadQuiz2,
      leadQuiz3,
      leadQuiz4,
      leadQuiz5,
      leadQuiz6,
      leadQuiz7,
      leadQuiz8,
      leadQuiz9,
      leadQuiz10,
    ],
    title: "LeadQuiz",
    url: "https://leadquiz.com",
    description:
      "I developed a website that allows users to generate survey forms. Buy subscriptions. And the owner of the site has administrator rights and access to the admin page to edit and add new templates for forms, create or edit new plans for subscriptions. The stack of technologies that I used: JavaScript, TypeScript, Redux, REST API, Stripe.",
  },
  {
    images: [
      untapped1,
      untapped2,
      untapped3,
      untapped4,
      untapped5,
      untapped6,
      untapped7,
      untapped8,
      untapped9,
      untapped10,
    ],
    title: "Untapped",
    url: "https://untapped-global.com",
    description:
      "I created a react components for project. As always, I worked with the team, and we are used GitHub for version controls of project. At that stage of developing, there wasn't any backend connections, so main tasks was making front side styling. For styling the components, client wanted us to use Styled Components technology. All technologies that was included to the project: React.js, TypeScript, Styled components.",
  },
];

const skills = [
  "English: upper intermediate (B2)",
  "React.js",
  "React Native",
  "React-Router",
  "Redux",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Socket.io",
  "HTML",
  "CSS",
  "module CSS",
  "SCSS",
  "Tailwind CSS",
  "Flux architecture",
  "SPA",
  "Git",
  "REST API",
  "react-force-fraph",
  "Strapi",
  "BEM",
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

      <section className={styles.about}>
        <img
          src={profilePicture}
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

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <section className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </motion.div>

      <section className={styles.projects}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
    </div>
  );
}

export default App;
