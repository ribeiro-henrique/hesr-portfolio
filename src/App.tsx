import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import ProjectsSection from "./components/ProjectsSection"

function App() {
  return (
    <>
      {/* Background por cima de tudo*/}
      <div className="grid-bg" />

      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section className="position-relative z-1 contact-section" id="contact">

        <div className="d-flex w-100 flex-column align-items-center mb-3">

          <h2 className="about-title">Quer me Contactar?</h2>
          <p className="about-subtitle">Tem algum projeto que se encaixe com meu perfil? Envie-me uma mensagem!</p>
        </div>


        <div className="contact-top-grid">

          {/* Contact Info */}
          <div className="d-flex flex-column px-3 py-3 bg-white border border-1 rounded-2">
            <p className="highlight-title" style={{ fontSize: '0.95rem', marginBottom: 4 }}>Informação de Contato:</p>
            {[
              { icon: '✉', label: 'Email', value: 'hesr.ribeiri@gmail.com' },
              { icon: '📱', label: 'Celular', value: '31 98473-9537' },
            ].map((item) => (
              <div className="d-flex align-items-center justify-content-between" key={item.label}>
                <div className="d-flex align-items-center gap-2">
                  {/* <div className="contact-icon-box">{item.icon}</div> */}
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    <p className="contact-info-value">{item.value}</p>
                  </div>
                </div>
                <div className="contact-icon-box">{item.icon}</div>
              </div>
            ))}
          </div>

          {/* Social info */}
          <div className="d-flex flex-column px-3 py-3 bg-white border border-1 rounded-2">
            <p className="highlight-title" style={{ fontSize: '0.95rem', marginBottom: 12 }}>Connect With Me</p>
            <div className="social-grid">
              {[
                { icon: '🐙', label: 'GitHub', href: '#' },
                { icon: 'in', label: 'LinkedIn', href: '#' },
                { icon: '𝕏', label: 'Twitter', href: '#' },
                { icon: '◎', label: 'Instagram', href: '#' },
              ].map((s) => (
                <a href={s.href} className="social-grid-item" key={s.label}>
                  <span className="">{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Form */}
        <div className="contact-form-card bg-white d-flex flex-column gap-2 p-3">
          <div className="contact-form-grid">
            <div className="d-flex flex-column gap-1">
              <label className="contact-label">Nome</label>
              <input className="contact-input" type="text" placeholder="Seu nome" />
            </div>
          </div>
          <div className="contact-form-grid two-col">
            <div className="d-flex flex-column gap-1">
              <label className="contact-label">Seu número (optional)</label>
              <input className="contact-input" type="text" placeholder="+00 00000-00000" />
            </div>
            <div className="d-flex flex-column gap-1">
              <label className="contact-label">Email</label>
              <input className="contact-input" type="email" placeholder="seu@email.com" />
            </div>
          </div>
          <div className="d-flex flex-column gap-1">
            <label className="contact-label">Mensagem</label>
            <textarea className="contact-input contact-textarea" placeholder="O que gostaria de me dizer?" />
          </div>
          <button className="btn btn-dark" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
            Send Message ↗
          </button>
        </div>

      </section>
    </>
  )
}

export default App