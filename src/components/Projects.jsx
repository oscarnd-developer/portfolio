import { useState } from "react"
import { projects } from "../data/proyects"

export default function Projects() {

  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Mis <span className="text-sky-400">Proyectos</span>
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelected(project)}
              className="group bg-slate-800 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 relative"
            >

              {/* IMAGEN */}
              <img 
                src={project.image} 
                alt="" 
                className="w-full h-48 object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <span className="text-white text-lg font-semibold">
                  ▶ Ver demo
                </span>
              </div>

              {/* INFO */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

          <div className="bg-slate-900 rounded-2xl w-full max-w-3xl relative overflow-hidden animate-fadeIn">

            {/* BOTÓN CERRAR */}
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-xl z-10 hover:scale-110 transition"
            >
              ✕
            </button>

            {/* VIDEO LOCAL */}
            <div className="w-full aspect-video bg-black">
              <video 
                src={selected.video}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">
                {selected.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {selected.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {selected.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-lg text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

    </section>
  )
}