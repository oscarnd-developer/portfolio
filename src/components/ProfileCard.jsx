import { useState } from "react"

export default function ProfileCard() {

  const [flipped, setFlipped] = useState(false)

  return (
    <div 
      className="w-64 h-80 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >

      <div 
        className={`relative w-full h-full duration-700 transform-style ${
          flipped ? "rotate-y-180" : ""
        }`}
      >

        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="Perfil.jpg"
            alt="Mi foto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="Icon2.jpeg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </div>
  )
}