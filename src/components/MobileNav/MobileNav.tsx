import { useCallback, useMemo, useRef, useState } from "react";
import styles from "./MobileNav.module.css";
import type { NavItem } from "../NavContainer/NavContainer";
import { useCursorMagnify } from "../../stores/useCursorMagnify";

type MobileNavProps = {
  navItems: NavItem[];
};

export const MobileNav = ({ navItems }: MobileNavProps) => {
  const [show, setShow] = useState(false);
  const { magnify, setMagnify } = useCursorMagnify();
  const navRef = useRef(null);

  const handleToggle = useCallback(() => {
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

  return (
    <nav ref={navRef} className={styles.mobileNav}>
      {show && (
        <>
          <div className={styles.logoHeader}>
            <a href="#header" onClick={handleToggle} {...magnifyEvents}>
              <span className={styles.logo}>gm</span>
            </a>

            <button
              className={styles.closeIcon}
              onClick={handleToggle}
              {...magnifyEvents}
            >
              🗙
            </button>
          </div>
          <ul>
            {navItems.map((i) => (
              <li key={i.label}>
                <a href={i.link} onClick={handleToggle} {...magnifyEvents}>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      {!show && (
        <button
          className={styles.hamburger}
          onClick={handleToggle}
          {...magnifyEvents}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </nav>
  );
};
