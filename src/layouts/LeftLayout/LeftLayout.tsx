import { useMemo } from "react";
import { useShowNav } from "../../stores/useShowNav";
import styles from "./LeftLayout.module.css";
import { useCursorMagnify } from "../../stores/useCursorMagnify";
import { GmLogo } from "../../components/GmLogo/GmLogo";
import clsx from "clsx";

export const LeftLayout = () => {
  const { show, setShow } = useShowNav();
  const { setMagnify } = useCursorMagnify();

  const magnifyEvents = useMemo(
    () => ({
      onMouseEnter: () => setMagnify(true),
      onMouseLeave: () => setMagnify(false)
    }),
    [setMagnify]
  );

  return (
    <a
      href="#header"
      onClick={() => setShow(false)}
      {...magnifyEvents}
      className={clsx(show && styles.hide)}
    >
      <div className={styles.logoBox}>
        <GmLogo />
      </div>
    </a>
  );
};
