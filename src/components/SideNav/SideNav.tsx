import styles from "./SideNav.module.css";
import { SocialLinks } from "../../components/SocialLinks/SocialLinks";
import clsx from "clsx";
import { GmLogo } from "../../components/GmLogo/GmLogo";
import { useNav } from "../../hooks/useNav";

export const SideNav = () => {
  const { navItems, show, handleToggleNav, magnifyEvents } = useNav();

  return (
    <nav className={clsx(styles.nav, show && styles.open)}>
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
      )}
    </nav>
  );
};
