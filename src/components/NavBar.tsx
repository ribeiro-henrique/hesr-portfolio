const NAV_LINKS = ['Home', 'About', 'Projects', 'Skills', 'Contact']


export default function NavBar() {
    return (
        <nav className="navbar navbar-light fixed-top navbar-clean px-4 py-2">
            <a href="#" className="navbar-brand fw-bold navbar-logo">
                ribeiro-henrique
            </a>

            <div className="d-flex align-items-center gap-4 ms-auto navbar-links">
                {NAV_LINKS.map((link) => (
                    <a href="#" key={link} className="nav-link-custom">
                        {link}
                    </a>
                ))}
            </div>
        </nav>
    )
}