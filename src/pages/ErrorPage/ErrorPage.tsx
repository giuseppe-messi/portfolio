import React from "react";
import styles from "./ErrorPage.module.css";

export const testLocators = {
  root: "error-page"
};

type Props = {
  onClearError?: () => void;
};

export const ErrorPage: React.FC<Props> = ({ onClearError }) => {
  const handleBackHome = () => {
    onClearError?.();
    window.location.href = "/";
  };

  return (
    <div className={styles.container} data-testid={testLocators.root}>
      <h2>Something is not right!</h2>
      <button onClick={handleBackHome}>Go Back Home</button>
    </div>
  );
};
