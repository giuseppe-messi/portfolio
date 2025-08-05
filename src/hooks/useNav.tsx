import { useCallback, useMemo } from "react";
import { useCursorMagnify } from "../stores/useCursorMagnify";
import { useShowNav } from "../stores/useShowNav";

export type NavItem = {
  label: string;
  link: string;
};

export const useNav = () => {
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

  const navItems: NavItem[] = [
    { label: "About", link: "#about" },
    { label: "Works", link: "#works" },
    { label: "Contact", link: "#contact" }
  ];

  return {
    navItems,
    show,
    handleToggleNav,
    magnifyEvents
  };
};
