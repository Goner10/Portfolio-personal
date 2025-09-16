import sql from "../assets/servidor-sql.png"
import html5 from "../assets/html-5.png"
import css from "../assets/css-3.png"
import js from "../assets/js.png"
import figma from "../assets/figma.png"
import canva from "../assets/canva_icon_220714.png"
import acrobat from "../assets/acrobata.png"
import java from "../assets/java.png"

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="titleAbout">Hi, I'm Gonzalo. Nice to meet you</h2>
        <p className="textoAbout">
        I'm a web developer from Valencia focused on clean code, 
        clear interfaces, and fast performance. I first studied Business Administration at university, but in 2022 I made a 180º career shift to programming and web design. Since then, I've built and deployed 
        real-world projects with a mobile-first, accessible approach.
                 </p>
                 <p className="textoAbout">
                 Fluent in Spanish and English, I'm open to freelance projects as well as long-term collaborations.
        </p>
       
      </div>
         <div className="about-grid" role="list">
  <section
    className="skill-card skill-card--design"
    aria-labelledby="design-tools-title"
    role="listitem"
  >
    <h3 id="design-tools-title" className="skill-title">Design tools:</h3>
    <div className="icon-grid">
      <img src={figma} alt="Figma" className="icon" />
      <img src={canva} alt="Canva" className="icon icon--round" />
      <img src={acrobat} alt="Adobe Acrobat" className="icon" />
    </div>
  </section>

  <section
    className="skill-card skill-card--langs"
    aria-labelledby="languages-title"
    role="listitem"
  >
    <h3 id="languages-title" className="skill-title">Languages I speak:</h3>
    <div className="icon-grid">
      <img src={java} alt="java" className="icon" />
      <img src={html5} alt="HTML5" className="icon" />
      <img src={css} alt="CSS3" className="icon" />
      <img src={js} alt="JavaScript" className="icon" />
      <img src={sql} alt="SQL" className="icon" />
    </div>
  </section>
</div>
    </section>
  );
}