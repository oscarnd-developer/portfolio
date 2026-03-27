import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/70 backdrop-blur-md z-50 border-b border-slate-800">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-sky-400">
          Oscar.dev
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li onClick={() => scrollTo("hero")} className="cursor-pointer hover:text-sky-400">Inicio</li>
          <li onClick={() => scrollTo("about")} className="cursor-pointer hover:text-sky-400">Sobre mí</li>
          <li onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-sky-400">Proyectos</li>
          <li onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-sky-400">Contacto</li>
        </ul>

        {/* Botón móvil */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-300">
            <li onClick={() => scrollTo("hero")} className="cursor-pointer">Inicio</li>
            <li onClick={() => scrollTo("about")} className="cursor-pointer">Sobre mí</li>
            <li className="cursor-pointer">Proyectos</li>
            <li className="cursor-pointer">Contacto</li>
          </ul>
        </div>
      )}
    </nav>
  )
}