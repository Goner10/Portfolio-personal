import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import logo from "./assets/logo.png";
import logoSolo from "./assets/logoSolo.png";

export default function App() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const handleNavClick = () => setOpen(false);
  const navigate = useNavigate();
  const location = useLocation();

  function goToSection(sectionId){
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Espera a que se pinte la landing antes de hacer scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  
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

        <a className="brand" href="#home" aria-label="Inicio" onClick={(e)=>{e.preventDefault(); goToSection('home');}}>
  <img className="logo-full" src={logo} alt="Logotipo" />
  <img className="logo-icon" src={logoSolo} alt="" aria-hidden="true" />
  <span className="sr-only">Inicio</span>
</a>

          {/* CTA centrado solo móvil */}
          <div className="nav-cta-mobile">
            <Link to="/hello" className="btn-cta" aria-label="Say hello">Say Hello!</Link>
          </div>

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
            <a href="#home" onClick={(e)=>{e.preventDefault(); goToSection('home');}}>Home</a>
            <a href="#about" onClick={(e)=>{e.preventDefault(); goToSection('about');}}>About</a>
            <a href="#projects" onClick={(e)=>{e.preventDefault(); goToSection('projects');}}>Projects</a>
            <a href="#contact" onClick={(e)=>{e.preventDefault(); goToSection('contact');}}>Contact</a>
          </div>


          <div className="nav-right">
  <Link to="/hello" className="btn-cta" aria-label="Say hello">Say Hello!</Link>
          </div>
        </nav>
      </header>

      {/* Empuje para header fijo */}
      <div style={{ height: "var(--header-h)" }} />

      <main>
        <Outlet context={{ goToSection }} />
      </main>

      <footer id="footer" style={{ padding: "14px 0" }}>
        <div className="container">© {new Date().getFullYear()} Gonzalo Martí Peirats</div>
        <p>Designed & Developed by Gonzalo Martí Peirats</p>
      </footer>
    </>
  );
}