import { useShowNav } from "../../stores/useShowNav";
import styles from "./LeftLayout.module.css";
import { GmLogo } from "../../components/GmLogo/GmLogo";
import clsx from "clsx";
import { useNav } from "../../hooks/useNav";

export const LeftLayout = () => {
  const { show, setShow } = useShowNav();
  const { magnifyEvents } = useNav();

  return (
    <a
      href="#header"
      aria-label="Go to top of page"
      onClick={() => setShow(false)}
      {...magnifyEvents}
      className={clsx(show && styles.hide)}
    >
      <GmLogo />
    </a>
  );
};
