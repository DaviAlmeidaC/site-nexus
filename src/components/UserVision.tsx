"use client"

import { useEffect, useRef, useState } from "react"
import background from "../assets/background-sections/background-part-2-app.svg"
import avatarImage from "../assets/diverse-avatars.png"

export function UserVision() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [reversePosition, setReversePosition] = useState(0)
  const maxScrollWidth = useRef(0)

  const testimonials = [
    {
      name: "Larissa Martins",
      rating: 5,
      content:
        "O Nexus-Skill transformou minha forma de me comunicar. Os desafios diários me ajudaram a evoluir muito rápido, e as dicas são práticas e diretas ao ponto!",
      date: "10 janeiro, 2025",
    },
    {
      name: "Thiago Ribeiro",
      rating: 5,
      content:
        "Nunca aprendi tanto sobre comunicação em tão pouco tempo. O app é leve, bonito e me prendeu desde o primeiro módulo. Vale cada segundo investido.",
      date: "25 janeiro, 2025",
    },
    {
      name: "Amanda Oliveira",
      rating: 5,
      content:
        "Melhorei minha oratória, perdi o medo de falar em público e até recebi elogios na apresentação do meu TCC. Esse app é um divisor de águas!",
      date: "02 fevereiro, 2025",
    },
    {
      name: "João Vitor Lima",
      rating: 4,
      content:
        "Curti muito o conteúdo, é direto e fácil de acompanhar. A única sugestão seria adicionar mais temas voltados para liderança. No mais, excelente!",
      date: "14 fevereiro, 2025",
    },
    {
      name: "Rebeca Silva",
      rating: 5,
      content:
        "Não sabia que aprender soft skills podia ser tão divertido. As trilhas são envolventes, e a sensação de progresso motiva demais!",
      date: "01 março, 2025",
    },
    {
      name: "Lucas Fernandes",
      rating: 5,
      content:
        "Já indiquei pra vários amigos. Melhor app que já usei pra desenvolvimento pessoal. Cada conquista que desbloqueio me dá vontade de continuar mais!",
      date: "18 março, 2025",
    },
    {
      name: "Juliana Castro",
      rating: 5,
      content:
        "Senti a diferença no primeiro mês. Estou me expressando melhor nas reuniões e até lidando melhor com críticas. O Nexus virou parte da minha rotina!",
      date: "29 março, 2025",
    },
    {
      name: "Daniel Souza",
      rating: 5,
      content:
        "O sistema de missões e recompensas me ajudou a manter o foco. Nunca pensei que fosse aprender tanto sobre empatia e escuta ativa em um app. Incrível!",
      date: "15 abril, 2025",
    },
    
  ]

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    const cardWidth = 320
    const gap = 24
    const totalWidth = (cardWidth + gap) * testimonials.length
    maxScrollWidth.current = totalWidth

    setReversePosition(totalWidth)

    const animate = () => {
      // carrossel de cima
      setScrollPosition((prev) => {
        if (prev >= maxScrollWidth.current) {
          return 0
        }
        return prev + 0.5
      })

      // carrossel de baixo 
      setReversePosition((prev) => {
        if (prev <= 0) {
          return maxScrollWidth.current
        }
        return prev - 0.5
      })
    }

    const animationId = setInterval(animate, 30)

    return () => {
      clearInterval(animationId)
    }
  }, [testimonials.length])

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: rating }).map((_, index) => (
      <svg key={index} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))
  }

  return (
    <section id="app" className="py-20 min-h-screen flex flex-col relative overflow-hidden bg-[#0a0a14]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "#030812",
        }}
      ></div>

      <div data-aos="fade-down" className="text-center mb-16 z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex justify-center items-baseline">
          <span className="text-[#35D9FD] hidden md:flex">★</span>
          <span className="ml-1 text-4xl font-bold md:text-5xl">
            O app na visão dos usuários
            <span className="text-[#35D9FD]">.</span>
          </span>
          
        </h2>
        <div className="w-full flex text-center justify-center">
          <p className="max-w-3xl text-[#d1d5db] font-['Inter',sans-serif]">
            Relatos de quem está evoluindo com a gente.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden mb-12 relative">
        <div className="absolute left-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-l from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>

        <div
          className="flex gap-6 py-4 w-full pl-6"
          style={{
            width: "max-content",
            transform: `translateX(-${scrollPosition}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              data-aos="fade-left"
              key={`top-${index}`}
              className="w-[320px] backdrop-blur-md bg-[#161625]/80 border border-[#2a2a3c] rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-[#35D9FD]/10 hover:border-[#35D9FD]/30"
            >
              <div className="flex items-center mb-4">
                <img
                  src={avatarImage || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3 border-2 border-[#35D9FD]/30"
                />
                <div>
                  <h3 className="font-semibold text-white font-['Poppins',sans-serif]">{testimonial.name}</h3>
                  <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-[#e0e0eb] text-sm flex-grow mb-4 font-['Inter',sans-serif] leading-relaxed">
                {testimonial.content}
              </p>
              <p className="text-[#9999aa] text-xs font-['Inter',sans-serif]">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden mb-12 relative">
        {/* gradiente de fade na esquerda  */}
        <div className="absolute left-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-l from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>

        <div
          className="flex gap-6 py-4 w-full pl-6"
          style={{
            width: "max-content",
            transform: `translateX(-${reversePosition}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              data-aos="fade-right"
              key={`bottom-${index}`}
              className="w-[320px] backdrop-blur-md bg-[#161625]/80 border border-[#2a2a3c] rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-[#35D9FD]/10 hover:border-[#35D9FD]/30"
            >
              <div className="flex items-center mb-4">
                <img
                  src={avatarImage || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3 border-2 border-[#35D9FD]/30"
                />
                <div>
                  <h3 className="font-semibold text-white font-['Poppins',sans-serif]">{testimonial.name}</h3>
                  <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-[#e0e0eb] text-sm flex-grow mb-4 font-['Inter',sans-serif] leading-relaxed">
                {testimonial.content}
              </p>
              <p className="text-[#9999aa] text-xs font-['Inter',sans-serif]">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
