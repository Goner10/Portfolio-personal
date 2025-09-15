export default function Hello(){
  return (
    <section id="hello">
      <div className="container">
        <h2>Say Hello</h2>
        <p style={{ marginTop: 0, marginBottom: 12 }}>Completa el formulario y me pondré en contacto contigo.</p>

        <form action="https://formsubmit.co/gmartipeirats@gmail.com" method="POST" className="contact-form">
          <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/#/hello?status=ok" />

          <div className="grid">
            <div>
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" type="text" placeholder="Tu nombre" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={5} placeholder="Cuéntame en qué puedo ayudarte" required />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <button type="submit" className="btn">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}


