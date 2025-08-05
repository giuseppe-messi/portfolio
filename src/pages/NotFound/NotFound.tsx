import React from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>This page doesn't exist!</h2>
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default NotFound;
