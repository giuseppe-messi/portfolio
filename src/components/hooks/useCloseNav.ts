import { useEffect, type RefObject } from "react";

export const useCloseNav = (
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!isOpen) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing when inside ref’s element
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handler(event);
    };

    // capture: true so we catch it before stopPropagation inside children
    document.addEventListener("pointerdown", listener, { capture: true });
    return () => {
      document.removeEventListener("pointerdown", listener, { capture: true });
    };
  }, [ref, handler, isOpen]);
};
