import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section id="projects">
      <p className={styles.Title}>Projects</p>
      <div className={styles.card}>
        <div className={styles.ProjectCard}>
          <b className={styles.Title}>CampusConnect</b>
          <img
            src={getImageUrl("projects/CampusConnect.png")}
            className={styles.ProjectImg}
            alt="CampusConnect"
          />
          <br />
          Your gateway to campus life—connect with events, clubs, and community
          updates to enhance your student experience.
          <br />
          <br />
          <br />
          <a
            href="https://campusconnect-uzcy.onrender.com/Listings"
            className={styles.DemoBtn}
          >
            Demo
          </a>
          <a
            href="https://github.com/Sakshi-Dappu/CampusConnect"
            className={styles.DemoBtn}
          >
            Source
          </a>
        </div>

        <div className={styles.ProjectCard}>
          <b className={styles.Title}>SIMON says </b> <br />
          <img
            src={getImageUrl("projects/SimonSays.png")}
            className={styles.ProjectImg}
            alt="Simon Say"
          />
          <br />
          <br />
          Simon, the virtual game leader, will display a sequence of buttons
          that light up.
          <br />
          <br />
          <br />
          <a
            href="https://memory-booster.netlify.app/"
            className={styles.DemoBtn}
          >
            Demo
          </a>
          <a
            href="https://github.com/Sakshi-Dappu/SIMON-says-Game"
            className={styles.DemoBtn}
          >
            Source
          </a>
        </div>
<br />
        <div className={styles.ProjectCard}>
          <b className={styles.Title}>CraftedBySakshi </b> <br />
          <img
            src={getImageUrl("projects/Portfolio.png")}
            className={styles.ProjectImg}
            alt="Simon Say"
          />
          <br />
          <br />
          Check out my Portfolio Website.
          <br />
          <br />
          <br />
          <a
            href="https://craftedbysakshi.netlify.app/"
            className={styles.DemoBtn}
          >
            Demo
          </a>
          <a
            href="https://github.com/Sakshi-Dappu/Portfolio"
            className={styles.DemoBtn}
          >
            Source
          </a>
        </div>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
