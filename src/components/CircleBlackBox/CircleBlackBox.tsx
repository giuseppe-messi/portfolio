import clsx from "clsx";
import styles from "./CircleBlackBox.module.css";
import type { ReactNode } from "react";

type CircleBlackBoxProps = {
  className?: string;
  children: ReactNode;
};

export const CircleBlackBox = ({
  className,
  children
}: CircleBlackBoxProps) => {
  return <div className={clsx(className, styles.box)}>{children}</div>;
};
