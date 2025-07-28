import clsx from "clsx";
import { SocialLinks } from "../../components/SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

export const Footer = () => (
  <section id="about" className={clsx("section whiteSection", styles.footer)}>
    <div className="sectionBox">
      <SocialLinks />
    </div>
    <p className={styles.copyright}>@ 2025 Giuseppe Messina</p>
  </section>
);
