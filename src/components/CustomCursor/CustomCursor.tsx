import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";
import { useCursorMagnify } from "../../stores/useCursorMagnify";
import clsx from "clsx";

export const CustomCursor = () => {
  const { magnify } = useCursorMagnify();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const handle = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.top = `${y}px`;
          cursorRef.current.style.left = `${x}px`;
        }
      });
    };

    window.addEventListener("mousemove", handle);

    return () => {
      window.removeEventListener("mousemove", handle);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={clsx(styles.cursor, magnify && styles.magnify)}
      aria-hidden="true"
    >
      <div />
    </div>
  );
};
