import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Sakshi Dappu</h1>
        <p className={styles.description}>
          Hi, I’m Sakshi Dappu! I’m excited to share my Web Development projects
          through this portfolio. Here, you’ll find a blend of my technical
          skills, creative projects, and a glimpse into my passion for coding
          and design.
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
