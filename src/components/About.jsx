import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Sobre <span className="text-sky-400">mí</span>
          </h2>

          <p className="text-gray-400 mb-4">
            Soy un ingeniero en sistemas apasionado por el desarrollo de software moderno,
            enfocado en crear soluciones eficientes, escalables y con excelente experiencia de usuario.
          </p>

          <p className="text-gray-500">
            Trabajo con tecnologías como React, Node.js y bases de datos modernas,
            siempre buscando mejorar rendimiento, diseño y arquitectura.
          </p>
        </motion.div>

        {/* Skills visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {["React", "Node.js", "JavaScript", "SQL", "Tailwind", "Git"].map((skill, i) => (
            <div 
              key={i}
              className="bg-slate-800 p-6 rounded-2xl text-center hover:bg-slate-700 transition"
            >
              {skill}
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  )
}