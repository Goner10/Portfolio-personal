export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Let's work together</h2>
          <p className="contact-subtitle">Do you have an idea or a project? Let's talk.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3 className="contact-card-title">Contact:</h3>
            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href="mailto:gmartipeirats@gmail.com">gmartipeirats@gmail.com</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href="https://www.linkedin.com/in/gonzalo-marti-peirats" target="_blank" rel="noreferrer">/in/gonzalo-marti-peirats</a>
              </li>
              <li>
                <span>GitHub</span>
                <a href="https://github.com/Goner10" target="_blank" rel="noreferrer">@Goner10</a>
              </li>
            </ul>
          </div>

          <div className="contact-cta">
            <h3>Ready to start?</h3>
            <p>Available for freelance projects and collaborations.</p>
            <a className="btn btn-contact" href="mailto:gmartipeirats@gmail.com">Write me</a>
          </div>
        </div>
      </div>
    </section>
  );
}