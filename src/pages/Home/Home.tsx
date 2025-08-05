import React from "react";
import { ParticlesBackground } from "../../components/ParticlesBackground/ParticlesBackground";
import { CustomCursor } from "../../components/CustomCursor/CustomCursor";
import { Toaster } from "@react-lab-mono/ui";
import { LeftLayout } from "../../layouts/LeftLayout/LeftLayout";
import { RightLayout } from "../../layouts/RightLayout/RightLayout";
import styles from "./Home.module.css";
import { Header } from "../../sections/header/Header";
import { About } from "../../sections/About/About";
import { Works } from "../../sections/Works/Works";
import { Contact } from "../../sections/Contact/Contact";
import { Footer } from "../../sections/Footer/Footer";
import { MobileNav } from "../../components/MobileNav/MobileNav";
import { useShowNav } from "../../stores/useShowNav";
import clsx from "clsx";

const Home: React.FC = () => {
  const { show } = useShowNav();

  return (
    <>
      <CustomCursor />

      <div className={styles.layout}>
        <div className={styles.leftSide}>
          <LeftLayout />
        </div>

        <MobileNav />

        <main className={clsx(styles.main, show && styles.hideMain)}>
          <Header />
          <About />
          <Works />
          <Contact />
          <Footer />
        </main>

        <div className={styles.righttSide}>
          <RightLayout />
        </div>
      </div>

      <ParticlesBackground />
      <Toaster />
    </>
  );
};

export default Home;
