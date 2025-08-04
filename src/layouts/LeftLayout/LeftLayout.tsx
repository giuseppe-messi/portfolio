import { useMemo } from "react";
import { useShowNav } from "../../stores/useShowNav";
import styles from "./LeftLayout.module.css";
import { useCursorMagnify } from "../../stores/useCursorMagnify";
import { GmLogo } from "../../components/GmLogo/GmLogo";

export const LeftLayout = () => {
  const { setShow } = useShowNav();
  const { setMagnify } = useCursorMagnify();

  const magnifyEvents = useMemo(
    () => ({
      onMouseEnter: () => setMagnify(true),
      onMouseLeave: () => setMagnify(false)
    }),
    [setMagnify]
  );

  return (
    <a href="#header" onClick={() => setShow(false)} {...magnifyEvents}>
      <div className={styles.logoBox}>
        <GmLogo />
      </div>
    </a>
  );
};
