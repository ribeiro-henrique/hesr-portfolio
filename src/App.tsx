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
    </>
  )
}

export default App