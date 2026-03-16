
//Images
import bgApalavra from '../assets/apalavra.png'
import bgMetricas from '../assets/metricas.png'
import bgBlog from '../assets/noldorshouse.png'
import bgApi from '../assets/api.png'
import bgPost from '../assets/postautomatico.jpg'
import bgClima from '../assets/clima.png'

//Videos
import videoClima from '../assets/bottelegram.mp4'
import videoBlog from '../assets/blog.webm'
import videoMetricas from '../assets/metricas.webm'
import videoApalavra from '../assets/apalavra.mp4'

import { useState } from "react"
import VideoModal from './VideoModal'


export default function ProjectsSection() {

    const [openModal, setOpenModal] = useState(false)
    const [videoUrl, setVideoUrl] = useState('')

    const FILTERS = ['Todos', 'Full-Stack', 'Automação', 'Frontend', 'Backend']

    const PROJECTS = [
        {
            title: 'Blog Cristão A Palavra',
            category: 'Full-Stack',
            desc: 'Blog sem fins lucrativos desenvolvido para meu pai publicar reflexões e textos. Construí a interface com Next.js e Tailwind CSS, implementei a API utilizando as rotas do próprio Next.js e gerenciei o banco MySQL com Prisma ORM.',
            tags: ['Next.js', 'MySQL', 'Tailwind', 'PrismaORM', 'Cloud Run'],
            image: bgApalavra,
            demo: '#', code: '#',
            video: videoApalavra
        },
        {
            title: 'Métricas de Estudos',
            category: 'Frontend',
            desc: 'Plataforma de análise de desempenho de alunos. Desenvolvida com Next.js e Tailwind, utilizando Zustand para gerenciamento global de estado e consumo de API interna, com foco em componentização e arquitetura de front-end.',
            tags: ['Next.js', 'Tailwind', 'Zustand', 'Responsive Design', 'Front Architecture'],
            image: bgMetricas,
            demo: '#', code: '#',
            video: videoMetricas
        },
        {
            title: 'Blog Nerd - Noldors House',
            category: 'Frontend',
            desc: 'Blog temático voltado à cultura nerd e fantasia. Desenvolvido com Next.js e Tailwind CSS, priorizando interface moderna, responsividade e organização de conteúdo para leitura e publicação de artigos.',
            tags: ['Next.js', 'Zustand', 'Tailwind', 'Responsive Design', 'Figma'],
            image: bgBlog,
            demo: '#', code: '#',
            video: videoBlog
        },
        {
            title: 'Bot de Clima (Tempo)',
            category: 'Automação',
            desc: 'Bot de Telegram desenvolvido com n8n que responde dinamicamente ao clima de cidades informadas pelo usuário, utilizando a API OpenWeather e um agente de IA. Executado localmente com Docker e exposto via ngrok.',
            tags: ['Automação', 'n8n', 'Docker', 'IA', 'Ngrok', 'Telegram'],
            image: bgClima,
            demo: '#', code: '#',
            video: videoClima
        },
        {
            title: 'Automação para LinkedIn',
            category: 'Automação',
            desc: 'Fluxo automatizado no n8n que realiza scraping de um tema, analisa o conteúdo com IA, otimiza o texto e gera um post completo para LinkedIn, incluindo sugestão de imagem para publicação.',
            tags: ['Automação', 'n8n', 'scraping', 'IA'],
            image: bgPost,
            demo: '#', code: '#',
        },
        {
            title: 'API de Livros',
            category: 'Backend',
            desc: 'API REST para controle de livros lidos e organização de leituras. Desenvolvida em .NET 8 com Entity Framework para persistência de dados em MySQL, incluindo documentação e testes via Swagger.',
            tags: ['C#', 'Entity Framework', 'MySQL', 'Swagger', 'Visual Studio'],
            image: bgApi,
            demo: '#', code: '#',
        },
    ]

    const [activeFilter, setActiveFilter] = useState('Todos')

    const filtered = activeFilter === 'Todos' ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter)
    return (
        <section className="d-flex flex-column position-relative z-1 projects-section" id="projects">

            {openModal && (
                <VideoModal
                    videoUrl={videoUrl}
                    setOpenModal={setOpenModal}
                />
            )}

            <div className="d-flex flex-column w-100 align-items-center mb-3">
                <h2 className="about-title">Projetos em Destaque</h2>
                <p className="about-subtitle">Uma pequena amostra dos trabalhos mais recentes/relevantes</p>
            </div>

            {/* Filters */}
            <div className="d-flex gap-2 justify-content-center flex-wrap mb-3">
                {FILTERS.map((e) => (
                    <button
                        key={e}
                        className={`filter-btn ${activeFilter === e ? 'active' : ''}`}
                        onClick={() => setActiveFilter(e)}
                    >
                        {e}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="projects-grid">
                {filtered.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="p-3 d-flex flex-column gap-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <p className="project-title">{project.title}</p>
                                <span className="project-category">{project.category}</span>
                            </div>
                            <p className="project-desc">{project.desc}</p>
                            <div className="d-flex flex-wrap gap-1 mb-2" style={{ justifyContent: 'flex-start' }}>
                                {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                            </div>
                            <div className="d-flex gap-1 align-items-center mt-2">
                                {/* <a href={project.demo} className="project-btn-demo">↗ Demonstração</a> */}
                                {
                                    project.video &&

                                    <button
                                        className="project-btn-demo"
                                        onClick={() => {
                                            setVideoUrl(project.video)
                                            setOpenModal(true)
                                        }}
                                    >
                                        ↗ Demonstração
                                    </button>
                                }

                                {/* <a href={project.code} className="project-btn-code">&lt;/&gt;</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}