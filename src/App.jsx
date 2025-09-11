import { useState, useEffect, useRef } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Proyectos";
import Contact from "./sections/Contact";
import logo from "./assets/logo.png";
import logoSolo from "./assets/logoSolo.png";

export default function App() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const handleNavClick = () => setOpen(false);

  
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);
  
   useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (menuRef.current?.contains(e.target)) return;      // clic dentro del menú → no cerrar
      if (toggleRef.current?.contains(e.target)) return;    // clic en el botón → lo maneja su onClick
      setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

useEffect(() => {
  if (!open) return;

  const shouldClose = (e) => {
    if (menuRef.current?.contains(e.target)) return; // gesto dentro del menú → no cerrar
    if (toggleRef.current?.contains(e.target)) return; // en el botón → lo maneja su onClick
    setOpen(false);
  };

  window.addEventListener("wheel", shouldClose, { passive: true });
  window.addEventListener("touchmove", shouldClose, { passive: true });

  return () => {
    window.removeEventListener("wheel", shouldClose);
    window.removeEventListener("touchmove", shouldClose);
  };
}, [open]);

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
  <img className="logo-full" src={logo} alt="Logotipo" />
  <img className="logo-icon" src={logoSolo} alt="" aria-hidden="true" />
  <span className="sr-only">Inicio</span>
</a>

          {/* Botón hamburguesa solo móvil */}
          <button
          ref={toggleRef} 
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
            ref={menuRef}  
            id="primary-menu"
            className={`nav-center ${open ? "open" : ""}`}
          >
            <a href="#home" onClick={handleNavClick}>Home</a>
            <a href="#about" onClick={handleNavClick}>About</a>
            <a href="#projects" onClick={handleNavClick}>Projects</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </div>


          <div className="nav-right">
  {/* De momento apunta a #contact. Cuando tengas el formulario, cambia a #hello (o la ruta que uses) */}
  <a href="#contact" className="btn-cta" aria-label="Say hello">Say Hello!</a>
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