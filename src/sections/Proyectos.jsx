import {proyectos} from "../data/projects"
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"}}>
          {proyectos.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}