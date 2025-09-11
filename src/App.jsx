import { useState, useEffect } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Proyectos";
import Contact from "./sections/Contact";
import logo from "./assets/logo.png";
import logoSolo from "./assets/logoSolo.png";

export default function App() {
  const [open, setOpen] = useState(false);

  // Cierra el menú al navegar a una sección
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Añade/quita la clase .scrolled al header según el scroll
  useEffect(() => {
    const header = document.querySelector("header");
    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header>
        <nav className="container nav-wrap" aria-label="Menú principal">
          {/* Logo izquierda */}
          <a className="brand" href="#home" aria-label="Inicio">
            <picture>
              <source srcSet={logoSolo} media="(max-width: 900px)" />
              <img src={logo} alt="Logotipo" />
            </picture>
            <span className="sr-only">Inicio</span>
          </a>

          {/* Botón hamburguesa solo móvil */}
          <button
            className="menu-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((s) => !s)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Enlaces */}
          <div
            id="primary-menu"
            className={`nav-center ${open ? "open" : ""}`}
          >
            <a href="#home">Inicio</a>
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </div>
        </nav>
      </header>

      {/* Empuje para header fijo */}
      <div style={{ height: "var(--header-h)" }} />

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="container" style={{ padding: "24px 0" }}>
        © {new Date().getFullYear()} Gonzalo Martí Peirats
      </footer>
    </>
  );
}