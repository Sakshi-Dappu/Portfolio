import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";
export const Skills = () => {
  return (
    <section className={styles.container}>
      <p className={styles.skills}>Skills</p>

      <div className={styles.skills}>
        <br />

        <br />
        <div className={styles.skill}>
          <img src={getImageUrl("skills/html.png")} alt="HTML" />
          <br />
          HTML
        </div>
        <div className={styles.skill}>
          <img src={getImageUrl("skills/css.png")} alt="CSS" />
          <br />
          CSS
        </div>
        <div className={styles.skill}>
          <img src={getImageUrl("skills/mongodb.png")} alt="MongoDB" />
          <br />
          MongoDB
        </div>
        <div className={styles.skill}>
          <img src={getImageUrl("skills/node.png")} alt="Node" />
          <br />
          Node.js
        </div>
        <div className={styles.skill}>
          <img src={getImageUrl("skills/react.png")} alt="React" />
          <br />
          React.js
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};
