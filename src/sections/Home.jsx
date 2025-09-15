import GonAnimado from "../assets/GonAnimado.png";
import GonCirculo from "../assets/GonCiruculo.png";
import Setup from "../assets/setup2.svg"
import Setup1 from "../assets/setup3.png";


export default function Home() {
  return (
   <section id="home" className="hero">
      <div className="container hero-grid">
        {/* Columna izquierda */}
        <div>
          <h1 className="tituloHome">WEB</h1>
          <h1 className="tituloHome"> DEVELOPER</h1>
          <p className="textoHome">
            Fast & accessible web experiences. <br />
            Clean code, clean interfaces.
          </p>
          <a className="btnHome" href="#projects" onClick={(e)=>{e.preventDefault(); goToSection('projects');}}>See projects</a>
          
        </div>

        {/* Columna derecha */}
        <div>
          <img className="hero-img" src={GonCirculo} alt="Gonzalo - Desarrollo Web" />
        </div>
      </div>
      <img className="setup-ill" src={Setup1} alt="Setup" />
    </section>
  );
}