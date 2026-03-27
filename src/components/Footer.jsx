import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10 mt-10">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Nombre */}
        <h3 className="text-xl font-bold text-sky-400 mb-4">
          Oscar.dev
        </h3>

        {/* Copy */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Oscar.dev — Todos los derechos reservados
        </p>

      </div>

    </footer>
  )
}