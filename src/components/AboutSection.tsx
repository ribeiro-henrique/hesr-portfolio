export default function AboutSection() {

    const HIGHLIGHTS = [
        { icon: '<>', title: 'Expertise em Desenvolvimento FullStack', desc: 'Proficiência na criação de aplicações end-to-end, contemplanto todas as etapas do desenvolvimento de software.' },
        { icon: '◎', title: 'Expertise em Solução de Problemas', desc: 'Atuação em ambientes dinâmicos e de ritmo acelerado, com capacidade de analisar problemas, desenvolver soluções práticas e entregar resultados eficientes dentro de prazos exigentes.' },
    ]

    const EXPERIENCE = [
        {
            role: 'Desenvolvedor de software Pleno',
            company: 'Hardwork Medicina',
            period: 'Jan, 2024 - Atualmente',
            desc: 'Atuo como Desenvolvedor Web Full-Stack na Hardwork Medicina, onde participo ativamente da criação de plataformas digitais e aplicativos voltados à preparação de médicos residentes e à revalidação de diplomas internacionais, impactando milhares de profissionais da saúde em todo o Brasil.',
        },
        {
            role: 'Desenvolvedor autônomo',
            company: 'São Paulo',
            period: 'Dez, 2025 - Atualmente',
            desc: 'Atuação em colaboração com uma equipe multidisciplinar no desenvolvimento de projetos para clientes reais, com foco na criação e manutenção de soluções SaaS, contribuindo para a implementação de funcionalidades, resolução de problemas e entrega de produtos escaláveis.',
        },
        {
            role: 'Estudante de programação',
            company: 'Trybe',
            period: 'Jan, 2023 - Dez, 2023',
            desc: 'Formação com mais de 1.500 horas de aprendizado prático, com foco em projetos práticos, utilizando as principais linguagens de programação, frameworks e metodologias da indústria, bem como ferramentas de design, como o Figma.',
        },
    ]

    return (
        <section className="position-relative z-1 py-3 px-2 about-section" id="sobre">

            <div className="text-center mb-5">
                <h2 className="about-title">Me conheça melhor</h2>
                <p className="about-subtitle">Saber a minha trajetória até aqui pode fazer a diferença!</p>
            </div>

            <div className="about-grid gap-5 align-items-start">

                {/* Left */}
                <div className="d-flex flex-column gap-3">

                    <div className="bg-white rounded-4 p-4 d-flex flex-column gap-2 about-card">
                        <div className="about-card-label fw-semibold d-flex text-center gap-2">👤 Sobre mim</div>
                        <p className="about-text">Atuo como Desenvolvedor Web Full-Stack, entregando soluções de alta qualidade com foco em JavaScript, TypeScript, Next.js, NestJS, Tailwind CSS e Zustand.</p>
                        <p className="about-text">Expertise em: Desenvolvimento Front-end com React.js e Next.js (SSR, SEO e alta performance); Desenvolvimento Front-end com React.js e Next.js (SSR, SEO e alta performance); Zustand e Redux para gerenciamento de estado global; Testes unitários com Jest e Cypress; Desenvolvimento mobile com React Native e Expo; Boas práticas de versionamento (Git/GitHub) e metodologias ágeis.</p>
                        <p className="about-text">Soft Skills e Diferenciais:  Experiência em equipes multidisciplinares e metodologias ágeis; Rápida adaptação a novos desafios e tecnologias; Background em Direito, trazendo visão analítica e organização.</p>
                    </div>

                    {HIGHLIGHTS.map((h) => (
                        <div className="about-card about-highlight bg-white rounded-4 p-4 d-flex flex-column gap-2" key={h.title}>
                            <div className="highlight-icon">{h.icon}</div>
                            <div>
                                <p className="highlight-title">{h.title}</p>
                                <p className="highlight-desc">{h.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Right */}
                <div>
                    <p className="exp-section-title fw-medium mb-3">Experience</p>
                    <div className="d-flex flex-column gap-0">
                        {EXPERIENCE.map((exp, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="timeline-dot" />
                                <div className="d-flex flex-column gap-1">
                                    <p className="timeline-role">{exp.role}</p>
                                    <p className="timeline-company">{exp.company}</p>
                                    <p className="timeline-period">{exp.period}</p>
                                    <p className="timeline-desc">{exp.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}