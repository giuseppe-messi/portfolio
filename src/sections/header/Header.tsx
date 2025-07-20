import clsx from "clsx";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import styles from "./Header.module.css";

import { memo } from "react";

export const Header = memo(() => (
  <header className={clsx("section", styles.header)}>
    <div className={styles.headingWrap}>
      <h1>
        <AnimatedText text="Giuseppe" />
        <span className={styles.lastName}>Messina</span>
      </h1>
      <h2>
        A Web Developer's Playground <span></span>
      </h2>
      <div className={styles.headingParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est quam,
        bibendum a magna ac, sollicitudin ultricies eros. Mauris eu leo sed
        sapien hendrerit porttitor
      </div>
    </div>

    <div className={styles.arrowBox}>
      <div className={styles.arrow} />
    </div>
  </header>
));
