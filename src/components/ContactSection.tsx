export default function ContactSection() {

    const CONTACTS = [
        {
            icon: '✉',
            label: 'Email',
            value: 'hesr.ribeiro@gmail.com',
            href: 'mailto:hesr.ribeiro@gmail.com'
        },
        {
            icon: '📱',
            label: 'Celular',
            value: '31 98473-9537',
            href: 'https://wa.me/5531984739537'
        }
    ]

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const payload = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            message: formData.get("message"),
        }

        try {
            const res = await fetch("https://distraiviz.app.n8n.cloud/webhook-test/portfolio-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })

            if (res.ok) {
                alert("Mensagem enviada com sucesso!")
                e.currentTarget.reset()
            } else {
                alert("Erro ao enviar mensagem")
            }
        } catch (err) {
            console.error(err)
            alert("Erro ao conectar com o servidor")
        }
    }

    return (
        <section className="position-relative z-1 contact-section" id="contato">

            <div className="d-flex w-100 flex-column align-items-center mb-3">

                <h2 className="about-title">Quer me Contactar?</h2>
                <p className="about-subtitle">Tem algum projeto que se encaixe com meu perfil? Envie-me uma mensagem!</p>
            </div>


            <div className="contact-top-grid">

                {/* Contact Info */}
                <div className="d-flex flex-column px-3 py-3 bg-white border border-1 rounded-2">
                    <p className="highlight-title" style={{ fontSize: '0.95rem', marginBottom: 4 }}>Informação de Contato:</p>

                    {CONTACTS.map((item) => (
                        <a
                            href={item.href}
                            key={item.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex align-items-center justify-content-between text-decoration-none text-dark"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <div>
                                    <p className="contact-info-label">{item.label}</p>
                                    <p className="contact-info-value">{item.value}</p>
                                </div>
                            </div>

                            <div className="contact-icon-box">{item.icon}</div>
                        </a>
                    ))}

                </div>

                {/* Social info */}
                <div className="d-flex flex-column px-3 py-3 bg-white border border-1 rounded-2">
                    <p className="highlight-title" style={{ fontSize: '0.95rem', marginBottom: 12 }}>Conecte-se comigo</p>
                    <div className="social-grid">
                        {[
                            { icon: '🐙', label: 'GitHub', href: 'https://github.com/ribeiro-henrique' },
                            { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com/in/hesr' },
                            { icon: '𝕏', label: 'Twitter', href: 'https://twitter.com/HesrRibeiro' },
                            { icon: '◎', label: 'Instagram', href: 'https://instagram.com/hesr_ribeiro' },
                        ].map((s) => (
                            <a
                                href={s.href} target="_blank"
                                rel="noopener noreferrer"
                                className="social-grid-item"
                                key={s.label}
                            >
                                <span className="">{s.icon}</span>
                                <span>{s.label}</span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="contact-form-card bg-white d-flex flex-column gap-2 p-3"
            >
                <div className="contact-form-grid">
                    <div className="d-flex flex-column gap-1">
                        <label className="contact-label">Nome</label>
                        <input name="name" className="contact-input" type="text" placeholder="Seu nome" />
                    </div>
                </div>
                <div className="contact-form-grid two-col">
                    <div className="d-flex flex-column gap-1">
                        <label className="contact-label">Seu número (optional)</label>
                        <input name="phone" className="contact-input" type="text" placeholder="+00 00000-00000" />
                    </div>
                    <div className="d-flex flex-column gap-1">
                        <label className="contact-label">Email</label>
                        <input name="email" className="contact-input" type="email" placeholder="seu@email.com" />
                    </div>
                </div>
                <div className="d-flex flex-column gap-1">
                    <label className="contact-label">Mensagem</label>
                    <textarea name="message" className="contact-input contact-textarea" placeholder="O que gostaria de me dizer?" />
                </div>
                <button type="submit" className="btn btn-dark" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
                    Enviar ↗
                </button>
            </form>

        </section>
    )
}