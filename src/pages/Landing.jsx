import { useOutletContext } from "react-router-dom";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Proyectos";
import Contact from "../sections/Contact";

export default function Landing(){
  const { goToSection } = useOutletContext();
  
  return (
    <>
      <Home goToSection={goToSection} />
      <About />
      <Projects />
      <Contact />
    </>
  );
}


