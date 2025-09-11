export default function ProjectCard({ p }) {
  return (
    <article className="card">
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <p>
        {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
      </p>
      <p>
        {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">Ver proyecto</a>}{" "}
        {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Código</a>}
      </p>
    </article>
  );
}