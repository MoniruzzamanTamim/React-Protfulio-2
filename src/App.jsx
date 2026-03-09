import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import WorkProcessTimeline from "./components/WorkProcessTimeline";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const navLinks = useMemo(
    () => [
      { label: "HOME", href: "#home" },
      { label: "ABOUT", href: "#about" },
      { label: "SKILLS", href: "#skills" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Services", href: "#services" },
      { label: "WorkProcess", href: "#workprocess" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} navLinks={navLinks} />
      <main>
        <Banner />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <WorkProcessTimeline />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
