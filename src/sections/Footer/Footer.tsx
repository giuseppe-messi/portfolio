import clsx from "clsx";
import { SocialLinks } from "../../components/SocialLinks/SocialLinks";
import styles from "./Footer.module.css";
import { useTheme } from "../../contexts/ThemeContext";

export const Footer = () => {
  const theme = useTheme();

  return (
    <section id="about" className={clsx("section whiteSection", styles.footer)}>
      <div className="sectionBox">
        <SocialLinks theme={theme} />
      </div>
      <p className={styles.copyright}>@ 2025 Giuseppe Messina</p>
    </section>
  );
};
