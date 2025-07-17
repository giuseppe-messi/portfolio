import React from "react";
import styles from "./Home.module.css";
import { ParticlesBackground } from "../../components/ParticlesBackground/ParticlesBackground";
import { Header } from "../../sections/header/Header";
import { CustomCursor } from "../../components/CustomCursor/CustomCursor";
import { Nav } from "../../components/Nav/Nav";

const Home: React.FC = () => (
  <div className={styles.container}>
    <Nav />
    <CustomCursor />
    <Header />
    <ParticlesBackground />
  </div>
);

export default Home;
