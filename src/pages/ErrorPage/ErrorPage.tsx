import React from "react";
import styles from "./ErrorPage.module.css";
import { Button } from "@react-lab-mono/ui";

type Props = {
  onClearError?: () => void;
};

export const ErrorPage: React.FC<Props> = ({ onClearError }) => {
  const handleBackHome = () => {
    onClearError?.();
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <h2>Something is not right!</h2>
      <Button onClick={handleBackHome} text="Go Back Home" />
    </div>
  );
};
