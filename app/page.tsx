"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ProjectStepsDesktop from "./components/ProjectSteps_Desktop";
import ProjectStepsMobile from "./components/ProjectSteps_Mobile";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function LandingPage() {
  const [typedText, setTypedText] = useState("");
  const [showText, setShowText] = useState(true);

  const scripts = [
    `const developer = {
  name: "Danilo Campioni",
  skills: ["Frontend", "Backend", "UI/UX", "Performance"],
  specialization: "Soluções digitais escaláveis",
  objective: "Criar experiências impactantes"
};`,
  ];

  const typingSpeed = 30;
  const displayTime = 3000;

  useEffect(() => {
    let timeoutId;

    const startTyping = () => {
      const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
      setTypedText("");
      setShowText(true);

      let current = 0;
      const typeInterval = setInterval(() => {
        setTypedText((prev) => prev + randomScript[current]);
        current++;
        if (current >= randomScript.length) {
          clearInterval(typeInterval);
          timeoutId = setTimeout(() => {
            setShowText(false);
            timeoutId = setTimeout(() => {
              startTyping();
            }, 500);
          }, displayTime);
        }
      }, typingSpeed);
    };

    startTyping();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Hero typedText={typedText} showText={showText} />
      <Technologies />
      <Services />
      <Projects />
      <Testimonials />
      <ProjectStepsMobile />
      <ProjectStepsDesktop />
      <About />
      <Pricing />
      <Contact />
    </>
  );
}
