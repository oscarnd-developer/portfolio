import ProfileCard from "./ProfileCard"
import { useEffect, useState } from "react"

export default function Hero() {

  const [text, setText] = useState("")
  const fullText = "Ingeniero en Sistemas | Desarrollador Junior"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-24"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

  {/* TEXTO */}
  <div className="text-center md:text-left">

    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Hola, soy <span className="text-sky-400">Oscar</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-400 mb-6 min-h-[28px]">
      {text}
    </p>

    <p className="text-gray-500 mb-8">
      Desarrollo aplicaciones modernas, rápidas y escalables con enfoque en diseño limpio y experiencia de usuario.
    </p>

    <div className="flex justify-center md:justify-start gap-4 flex-wrap">
      <button 
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-xl font-semibold transition"
      >
        Ver más
      </button>

      <button className="border border-gray-600 hover:border-sky-400 px-6 py-3 rounded-xl transition">
        Descargar CV
      </button>
    </div>

  </div>

  {/* TARJETA */}
  <div className="flex justify-center">
    <ProfileCard />
  </div>

</div>

    </section>
  )
}