import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"


function App() {
  return (
    <>
      {/* Background por cima de tudo*/}
      <div className="grid-bg" />

      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <HeroSection />
    </>
  )
}

export default App