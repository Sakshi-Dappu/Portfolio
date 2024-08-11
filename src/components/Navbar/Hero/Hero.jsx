import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Sakshi Dappu</h1>
        <p className={styles.description}>
          Aspiring Full Stack Developer with MERN stack expertise, seeking an
          internship. Quick learner, adaptable, and
          eager to contribute to innovative projects.
        </p>
        <a href="mailto:dappusakshi@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
