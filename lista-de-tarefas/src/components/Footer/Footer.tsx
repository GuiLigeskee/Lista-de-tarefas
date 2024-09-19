import styles from "./Footer.module.css";

// images
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

const Footer = () => {
  return (
    <div className={styles.contact} id="contact">
      <h2 className={styles.contact_title}>Meus contatos</h2>
      <div className={styles.card}>
        <a
          className={styles.social_link1}
          href="https://www.instagram.com/guiligeski_/"
          target="_blank"
        >
          <img src={Instagram} alt="instagram" />
        </a>
        <a
          className={styles.social_link2}
          href="https://www.linkedin.com/in/guilherme-ligeski-saldanha/"
          target="_blank"
        >
          <img src={Linkedin} alt="Linkedin" />
        </a>
        <a
          className={styles.social_link3}
          href="https://github.com/GuiLigeskee"
          target="_blank"
        >
          <img src={Github} alt="Github" />
        </a>
        <a
          className={styles.social_link4}
          href="https://wa.me/5541987240654"
          target="_blank"
        >
          <img src={Whatsapp} alt="Whatsapp" />
        </a>
      </div>
      <p className={styles.copy}>Feito por Guilherme L. Saldanha &copy; 2024</p>
    </div>
  );
};

export default Footer;
