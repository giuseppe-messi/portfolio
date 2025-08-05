import clsx from "clsx";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header id="header" className={clsx("section", styles.header)}>
      <div className={styles.headingWrap}>
        <div className={styles.blueWall} aria-hidden="true"></div>
        <h1>
          <AnimatedText text="Giuseppe" fontSize="3em" />
          <span className={styles.lastName}>Messina</span>
        </h1>
        <h2>Front-End Without the Noise</h2>
      </div>
    </header>
  );
};
