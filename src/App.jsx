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
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" onClick={(e)=>{e.preventDefault(); goToSection('home');}} aria-label="Inicio">
              <img src={logoSolo} alt="Logo Gonzalo" className="footer-logo" />
            </a>
            
          </div>

          <div className="footer-social" aria-label="Redes sociales">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.486 2 12.019c0 4.425 2.865 8.178 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.109-1.462-1.109-1.462-.907-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.03-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.547 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.688 0 3.848-2.337 4.697-4.565 4.946.36.311.68.921.68 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.019C22 6.486 17.523 2 12 2Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="currentColor" d="M20.451 20.451h-3.554v-5.569c0-1.329-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.354V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.37 4.266 5.455v6.285zM5.337 7.433a2.063 2.063 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125zM7.113 20.451H3.56V9h3.553v11.451z"/></svg>
            </a>
          </div>
        </div>
 
         <div className="footer-bottom">
           <div className="container footer-bottom-inner">
             <span>© {new Date().getFullYear()} Gonzalo Martí Peirats</span>
             <span>Designed & Developed by Gonzalo Martí Peirats</span>
           </div>
         </div>
       </footer>
    </>
  );
}