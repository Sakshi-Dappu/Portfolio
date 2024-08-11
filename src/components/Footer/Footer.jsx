import { getImageUrl } from "../../utils";
import styles from "../Footer/Footer.module.css";

export const Footer = () => {
  return (
    <section id="contact">  

<footer className={styles.footer_container}>
      <div className={styles.first_div}>
        <h3>Contact</h3>
         <p>Feel free to reach out!</p>
      </div>
      <div className={styles.second_div}>
        <ul>
          <li className={styles.second_div_items}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
            <a href="mailto:dappusakshi@gmail.com">dappusakshi@gmail.com</a>
          </li>

          <li className={styles.second_div_items}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
            <br />
            <a href="https://github.com/Sakshi-Dappu">My GitHub Account</a>
          </li>

          <li className={styles.second_div_items}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkdin" />

            <a href="https://www.linkedin.com/in/sakshi-dappu/">
              My GitHub Account
            </a>
          </li>
        </ul>
      </div>
    </footer>
    </section>
   
  );
};
