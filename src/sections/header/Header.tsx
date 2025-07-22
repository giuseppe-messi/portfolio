import clsx from "clsx";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header id="header" className={clsx("section", styles.header)}>
      <div className={styles.headingWrap}>
        <h1>
          <AnimatedText text="Giuseppe" />
          <span className={styles.lastName}>Messina</span>
        </h1>
        <h2>Front-End Without the Noise</h2>
        <p className={styles.headingParagraph}>
          I care about writing clear, maintainable code and building user
          interfaces that feel smooth and reliable. This space is where I share
          my approach to front-end development through open-source projects and
          practical demos.
        </p>
      </div>
    </header>
  );
};
