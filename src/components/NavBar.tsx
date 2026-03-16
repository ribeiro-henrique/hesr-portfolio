const NAV_LINKS = ['Home', 'Sobre', 'Projetos', 'Contato']


export default function NavBar() {

    const handleScroll = (id: string) => {
        const el = document.getElementById(id)

        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }


    return (
        <nav className="navbar navbar-light fixed-top navbar-clean px-4 py-2">
            <a href="#" className="navbar-brand fw-bold navbar-logo">
                ribeiro-henrique
            </a>

            <div className="d-flex align-items-center gap-4 ms-auto navbar-links">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        className="nav-link-custom"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleScroll(link.toLowerCase())}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </nav>
    )
}