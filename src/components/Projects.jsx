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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelected(project)}
              className="bg-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img src={project.image} alt="" className="w-full h-48 object-cover" />

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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-slate-900 p-6 rounded-2xl max-w-lg w-full relative">

            <button 
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">
              {selected.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {selected.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {selected.tech.map((t, i) => (
                <span key={i} className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-lg text-sm">
                  {t}
                </span>
              ))}
            </div>

          </div>

        </div>
      )}

    </section>
  )
}