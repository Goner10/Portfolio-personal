import { useEffect, useState } from "react";
import { FORMSPREE_ACTION } from "../config/formspree";

export default function Hello() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const previousHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue("--header-h");
    document.documentElement.style.setProperty("--header-h", "130px");
    return () => {
      document.documentElement.style.setProperty("--header-h", previousHeaderHeight || "100px");
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const body = await response.json().catch(() => ({}));
      setStatus("error");
      setErrorMessage(
        typeof body.error === "string"
          ? body.error
          : "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      );
    } catch {
      setStatus("error");
      setErrorMessage("Error de red. Comprueba tu conexión.");
    }
  }

  return (
    <section id="hello">
      <div className="container">
        <h2>Hi, Nice to meet you!</h2>
        <p style={{ marginTop: 0, marginBottom: 12 }}>Fill the form and I'll contact you.</p>

        {status === "success" ? (
          <p className="contact-form-success" role="status">
            Your message has been sent successfully! I'll be in touch with you very soon.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="contact-form-error" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="hidden" name="subject" value="Nuevo mensaje desde el portfolio" />
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-5000px" }} aria-hidden="true" />

          <div className="grid">
            <div>
              <label htmlFor="name">Name:</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" required />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="phone">Móvil:</label>
              <input id="phone" name="phone" type="tel" placeholder="+34 600 000 000" autoComplete="tel" />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me how can I help you" required />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <button type="submit" className="btn" disabled={status === "loading"}>
                {status === "loading" ? "Enviando…" : "Send"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
