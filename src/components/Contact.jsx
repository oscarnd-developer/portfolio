import { FaWhatsapp, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"
import emailjs from "emailjs-com"
import { useRef, useState } from "react"
import toast from "react-hot-toast"

export default function Contact() {

  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    setLoading(true)

    emailjs.sendForm(
      "service_vcoojh7",
      "template_arz1x3n",
      form.current,
      "XYbJUA4AylzOihunq"
    )
    .then(() => {
      toast.success("Mensaje enviado correctamente ")
      form.current.reset()
    })
    .catch((error) => {
      console.error(error)
      toast.error("Error al enviar el mensaje ")
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <section id="contact" className="min-h-screen px-6 py-20">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contácta<span className="text-sky-400">me</span>
        </h2>

        <p className="text-gray-400 mb-10">
          ¿Tienes un proyecto o idea? Hablemos.
        </p>

        {/* FORM */}
        <form 
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6 hover:shadow-sky-500/10 transition"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
            className="w-full p-4 rounded-lg bg-slate-900 text-white outline-none border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Tu correo"
            required
            className="w-full p-4 rounded-lg bg-slate-900 text-white outline-none border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
          />

          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="w-full p-4 rounded-lg bg-slate-900 text-white outline-none border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
          ></textarea>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 py-3 rounded-lg font-semibold transition hover:scale-[1.02] disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                Enviando...
              </>
            ) : (
              "Enviar mensaje"
            )}
          </button>

        </form>

        {/* REDES */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="https://wa.me/50583301962"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-semibold transition transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://github.com/TU-USUARIO"
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl font-semibold transition transform hover:scale-105 hover:shadow-lg hover:shadow-white/10"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/TU-USUARIO"
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://discord.com/users/976966627448991814"
            target="_blank"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-5 py-3 rounded-xl font-semibold transition transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            <FaDiscord /> Discord
          </a>

        </div>

      </div>

    </section>
  )
}