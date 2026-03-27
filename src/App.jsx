import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App