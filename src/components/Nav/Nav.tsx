import { useCallback, useMemo } from "react";
import { useCursorMagnify } from "../../stores/useCursorMagnify";
import { useShowNav } from "../../stores/useShowNav";
import { SideNav } from "../SideNav/SideNav";
import styles from "./Nav.module.css";

export type NavItem = {
  label: string;
  link: string;
};

const navItems: NavItem[] = [
  { label: "About", link: "#about" },
  { label: "Works", link: "#works" },
  { label: "Contact", link: "#contact" }
];

export const Nav = () => {
  const { show, setShow } = useShowNav();
  const { magnify, setMagnify } = useCursorMagnify();

  const handleToggleNav = useCallback(() => {
    setShow(!show);
    setMagnify(!magnify);
  }, [magnify, setMagnify, show, setShow]);

  const magnifyEvents = useMemo(
    () => ({
      onMouseEnter: () => setMagnify(true),
      onMouseLeave: () => setMagnify(false)
    }),
    [setMagnify]
  );

  return (
    <>
      <div className={styles.sideNav}>
        <SideNav
          items={navItems}
          show={show}
          onToggleNav={handleToggleNav}
          magnifyEvents={magnifyEvents}
        />
      </div>

      <div className={styles.mobileNav}></div>
    </>
  );
};
