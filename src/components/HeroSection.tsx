export default function HeroSection() {

    const TAGS = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'n8n', 'NestJS', 'SQL', 'MySQL']

    return (
        <section id="home" className="position-relative z-1 min-vh-100 d-flex flex-column align-items-center justify-content-center text-center gap-2">

            {/* Badge */}
            <div className="available-badge">
                <span className="available-dot" />
                Open to Work
            </div>

            {/* Title */}
            <h1 className="hero-title">Henrique Ribeiro</h1>

            {/* Subtitle */}
            <p className="fs-5 fw-normal text-black">Web Developer</p>

            {/* Description */}
            <p className="fs-6 hero-desc">
                Sou um Desenvolvedor Web FullStack, com foco no frontend, construindo interfaces dinâmicas,
                amigáveis ao usuário e aplicando o que há de mais recente em tecnologia.
                Meu foco é em contribuir, crescer, escalar e melhorar!
            </p>

            {/* Tech tags */}
            <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                {TAGS.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="d-flex gap-3 flex-wrap justify-content-center mb-3">
                <a href="mailto:hesr.ribeiro@gmail.com" className="btn-outline">✉ Me Contacte</a>
                <a
                    href="/curriculo-henrique-ribeiro.pdf"
                    target="_blank"
                    rel="noopener noreferrer" className="btn-accent">
                    Baixe meu Currículo ↓
                </a>
            </div>

            {/* Social */}
            <div className="d-flex gap-2">
                <a
                    href="https://linkedin.com/in/hesr"
                    target="_blank"
                    rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                    in
                </a>
                <a
                    href="https://github.com/ribeiro-henrique"
                    target="_blank"
                    rel="noopener noreferrer" className="social-icon" title="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
                <a
                    href="https://instagram.com/hesr_ribeiro"
                    target="_blank"
                    rel="noopener noreferrer" className="social-icon" title="Instagram">
                    ◎
                </a>
            </div>

            {/* Scroll hint */}
            <div className="scroll-hint">
                Scrolle para ver mais
                <div className="scroll-line" />
            </div>

        </section>
    )
}