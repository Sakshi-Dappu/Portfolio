import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <>

    <section id="about" className={styles.AboutContainer}>
    <h2 className={styles.title}>About</h2>
     
      <div className={styles.My_img}>
        <img className={styles.My_img}  src={getImageUrl("about/aboutImage.png")} alt="myimg" />
      </div>
      <div className={styles.About_Description}>
        <ul className={styles.About_Item}>
          <li className={styles.About_Items}>
            <div>
              <p>
                <h1 className={styles.title}> Frontend Technologies</h1>
                "Skilled in Bootstrap, Tailwind, HTML5, CSS, and JavaScript,
                crafting responsive and dynamic web applications."
              </p>
            </div>
          </li>
          <br />
          <br />

          <li className={styles.About_Items}>
            <p>
              <h1 className={styles.title}>Backend Technologies</h1>
              "Proficient in Node.js, Express.js, and MongoDB for building
              robust backend systems."
            </p>
          </li>
          <br />
          <br />

          <li className={styles.About_Items}>
            <p>
              <h1 className={styles.title}>DataBase</h1>
              I’m skilled in the basics of SQL and MongoDB, managing data
              efficiently with both relational and non-relational databases. I
              enjoy working with queries, updates, and filters, always eager to
              learn more.
            </p>
          </li>
        </ul>
      </div>
    </section>
    </>
   
  );
};
