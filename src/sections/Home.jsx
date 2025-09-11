import GonAnimado from "../assets/GonAnimado.png";
import GonCirculo from "../assets/GonCiruculo.png"


export default function Home() {
  return (
   <section id="home" className="hero">
      <div className="container hero-grid">
        {/* Columna izquierda */}
        <div>
          <h1 className="tituloHome">WEB</h1>
          <h1 className="tituloHome"> DEVELOPER</h1>
          <p className="textoHome">
            Me enfoco en interfaces claras, rápidas y accesibles.
          </p>
          <a className="btnHome" href="#projects">Ver proyectos</a>
        </div>

        {/* Columna derecha */}
        <div>
          <img className="hero-img" src={GonCirculo} alt="Gonzalo - Desarrollo Web" />
        </div>
      </div>
    </section>
  );
}