import styles from "./SideNav.module.css";
import { SocialLinks } from "../../components/SocialLinks/SocialLinks";
import clsx from "clsx";
import { GmLogo } from "../../components/GmLogo/GmLogo";
import { useNav } from "../../hooks/useNav";

export const SideNav = () => {
  const { navItems, show, handleToggleNav, magnifyEvents } = useNav();

  return (
    <nav
      className={clsx(styles.nav, show && styles.open)}
      aria-label="Desktop navigation"
    >
      {show && (
        <>
          <div className={styles.logoHeader}>
            <div className={styles.logoBox}>
              <a href="#header" onClick={handleToggleNav} {...magnifyEvents}>
                <GmLogo />
              </a>
            </div>

            <button
              className={styles.closeIcon}
              onClick={handleToggleNav}
              {...magnifyEvents}
              aria-expanded={show}
              aria-label="Open menu"
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
              <SocialLinks />
            </div>
          </div>
        </>
      )}

      {!show && (
        <button
          className={styles.hamburger}
          onClick={handleToggleNav}
          {...magnifyEvents}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </nav>
  );
};
