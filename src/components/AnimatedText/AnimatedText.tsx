import { useCallback, useEffect, useState } from "react";
import styles from "./AnimatedText.module.css";
import clsx from "clsx";

interface AnimatedHeadingProps {
  text: string;
}

export const AnimatedText = ({ text }: AnimatedHeadingProps) => {
  const [letters, setLetters] = useState<boolean[]>(
    Array(text.length).fill(false)
  );

  const handleStart = useCallback(
    (index: number) =>
      setLetters((prev) => {
        const curr = [...prev];
        curr[index] = true;
        return curr;
      }),
    []
  );

  const handleStop = useCallback(
    (index: number) =>
      setLetters((prev) => {
        const curr = [...prev];
        curr[index] = false;
        return curr;
      }),
    []
  );

  useEffect(() => {
    const random = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * text.length);
      handleStart(randomIndex);
    }, 5000);

    return () => clearInterval(random);
  }, [handleStart, text.length]);

  return (
    <>
      <span className={styles.wrapper}>
        {text.split("").map((letter, index) => {
          const delay = (index + 1) * 180;

          return (
            <span
              key={index}
              style={{ "--delay": `${delay}ms` } as React.CSSProperties}
              className={styles.letterBox}
            >
              <span
                className={clsx(
                  styles.letter,
                  letters[index] && styles.animate
                )}
                onMouseEnter={() => handleStart(index)}
                onAnimationEnd={() => handleStop(index)}
              >
                {letter}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
};
