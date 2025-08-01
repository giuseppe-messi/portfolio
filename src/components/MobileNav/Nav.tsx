import { useCallback, useMemo, useRef, useState } from "react";
import styles from "./Nav.module.css";
import { useCursorMagnify } from "../../stores/useCursorMagnify";
import { GmLogo } from "../GmLogo/GmLogo";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import clsx from "clsx";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggleIcon } from "../ThemeToggleIcon/ThemeToggleIcon";

type NavItem = {
  label: string;
  link: string;
};

const navItems: NavItem[] = [
  { label: "About", link: "#about" },
  { label: "Works", link: "#works" },
  { label: "Contact", link: "#contact" }
];

export const Nav = () => {
  const [show, setShow] = useState(false);
  const { magnify, setMagnify } = useCursorMagnify();
  const theme = useTheme();
  const navRef = useRef(null);

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

  return (
    <nav
      ref={navRef}
      className={clsx(styles.nav, show && styles.open, styles[`${theme}-nav`])}
    >
      {show && (
        <>
          <div className={styles.logoHeader}>
            <a href="#header" onClick={handleToggleNav} {...magnifyEvents}>
              <GmLogo />
            </a>

            <button
              className={styles.closeIcon}
              onClick={handleToggleNav}
              {...magnifyEvents}
            >
              &times;
            </button>
          </div>
          <div className={styles.navSocialsBox}>
            <ul>
              {navItems.map((i) => (
                <li key={i.label}>
                  <a href={i.link} onClick={handleToggleNav} {...magnifyEvents}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.socialLinksBox}>
              <SocialLinks theme="dark" />
            </div>
          </div>
        </>
      )}
      {!show && (
        <div className={styles.closedNavBox}>
          <a href="#header" onClick={() => setShow(false)} {...magnifyEvents}>
            <GmLogo />
          </a>
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

          <ThemeToggleIcon className={styles.themeIcon} />
        </div>
      )}
    </nav>
  );
};
