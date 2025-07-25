import React from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@react-lab-mono/ui";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Typography type="h2">We can’t find that page!</Typography>
      <Button
        onClick={() => navigate("/")}
        text="Go Back Home"
        fillMode="outline"
        variant="error"
      />
    </div>
  );
};

export default NotFound;
