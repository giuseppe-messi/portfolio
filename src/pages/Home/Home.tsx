import React from "react";
import styles from "./Home.module.css";
import { ParticlesBackground } from "../../components/ParticlesBackground/ParticlesBackground";

const Home: React.FC = () => (
  <div className={styles.container}>
    <ParticlesBackground />
  </div>
);

export default Home;
