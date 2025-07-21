import { useCallback, useMemo, useState } from "react";
import styles from "./MobileNav.module.css";
import type { NavItem } from "../../NavContainer/NavContainer";
import { useCursorMagnify } from "../../stores/useCursorMagnify";

type MobileNavProps = {
  navItems: NavItem[];
};

export const MobileNav = ({ navItems }: MobileNavProps) => {
  const [show, setShow] = useState(true);
  const { magnify, setMagnify } = useCursorMagnify();

  const handleToggleNav = useCallback(() => {
    setShow((s) => !s);
    setMagnify(!magnify);
  }, [magnify, setMagnify]);

  const magnifyEvents = useMemo(
    () => ({
      onMouseEnter: () => setMagnify(true),
      onMouseLeave: () => setMagnify(false)
    }),
    [setMagnify]
  );

  return show ? (
    <nav className={styles.mobileNav}>
      <div className={styles.logoHeader}>
        <a href="#">
          <span className={styles.logo}>Gm</span>
        </a>

        <span
          className={styles.closeIcon}
          onClick={handleToggleNav}
          {...magnifyEvents}
        >
          X
        </span>
      </div>
      <ul>
        {navItems.map((i) => (
          <li>
            <a href={i.link} {...magnifyEvents}>
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <button
      className={styles.hamburger}
      onClick={handleToggleNav}
      {...magnifyEvents}
      aria-label="Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
