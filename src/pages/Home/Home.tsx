import React from "react";
import { ParticlesBackground } from "../../components/ParticlesBackground/ParticlesBackground";
import { Header } from "../../sections/header/Header";
import { CustomCursor } from "../../components/CustomCursor/CustomCursor";
import { Works } from "../../sections/Works/Works";
import { Contact } from "../../sections/Contact/Contact";
import { About } from "../../sections/About/About";
import { Toaster } from "@react-lab-mono/ui";
import { Footer } from "../../sections/Footer/Footer";
import { Nav } from "../../components/MobileNav/Nav";

const Home: React.FC = () => (
  <>
    <CustomCursor />
    <Nav />
    <Header />
    <About />
    <Works />
    <Contact />
    <Footer />
    <ParticlesBackground />
    <Toaster />
  </>
);

export default Home;
