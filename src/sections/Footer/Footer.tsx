import clsx from "clsx";
import { SocialLinks } from "../../components/SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={clsx("section darkSection", styles.footer)}>
      <div className="sectionBox">
        <SocialLinks theme="light" />
      </div>
      <p className={styles.copyright}>@ 2025 Giuseppe Messina</p>
    </section>
  );
};
