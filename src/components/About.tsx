"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight, Envelope, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react"

type Member = {
  nome: string
  funcao: string
  imageSrc: string
  redes: {
    email: string
    linkedin: string
    instagram: string
  }
}

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const members: Member[] = [
    {
      nome: "Davi Almeida",
      funcao: "CEO & Founder",
      imageSrc: "/src/assets/members/m1.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/davi-almeida-carvalho-1953a8237/",
        instagram: "https://www.instagram.com/davialmeida_profi",
      },
    },
    {
      nome: "Carlos daniel",
      funcao: "CFO & Co founder",
      imageSrc: "/src/assets/members/m2.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/carlos-vaz-512728255/",
        instagram: "https://www.instagram.com/cdovaz/",
      },
    },
    {
      nome: "Marcos felipe",
      funcao: "Programador Full-stack & Co-founder",
      imageSrc: "/src/assets/members/m3.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/marcus-valente/",
        instagram: "https://www.instagram.com/marcusf.dev/",
      },
    },
    {
      nome: "Gabriel Colares",
      funcao: "CTO & Programador Full-stack",
      imageSrc: "/src/assets/members/m6.png",
      redes: {
        email: "gabriel.colares.dev@gmail.com",
        linkedin: "https://www.linkedin.com/in/gabriel-colares/",
        instagram: "https://www.instagram.com/gabriwl.dev/",
      },
    },
    {
      nome: "Cecília costa",
      funcao: "Designer & Sócia",
      imageSrc: "/src/assets/members/m4.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Geovana barros",
      funcao: "Coordernadora administrativa",
      imageSrc: "/src/assets/members/m5.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/geosz__/",
        instagram: "https://www.instagram.com/geovana-silva-0393092a7/",
      },
    },
    {
      nome: "Felipe Martins",
      funcao: "Programador Full-stack",
      imageSrc: "/src/assets/members/m7.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/felipe-martins-3250462a1/",
        instagram: "https://www.instagram.com/felipesza._/",
      },
    },
    {
      nome: "Thiago Sidrim",
      funcao: "Programador Full-stack",
      imageSrc: "/src/assets/members/m8.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Pedro Bavaresco",
      funcao: "Programador Full-stack",
      imageSrc: "/src/assets/members/m9.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/pedro-bavaresco-21705a2a2/",
        instagram: "https://www.instagram.com/pedroribeirobavaresco/",
      },
    },
  ]

  // verifica o tamanho da tela
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }, // pode ajustar o quanto precisa estar visível
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible || isMobile) return

    const interval = setInterval(() => {
      if (!animating) {
        nextSlide()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [animating, isVisible, isMobile])

  // responsividade aqui
  const itemsPerPage = isMobile ? 3 : 4

  const nextSlide = () => {
    if (animating) return
    setAnimating(true)
    setDirection("next")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % (members.length - itemsPerPage + 1))
      setAnimating(false)
    }, 300)
  }

  const prevSlide = () => {
    if (animating) return
    setAnimating(true)
    setDirection("prev")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + (members.length - itemsPerPage + 1)) % (members.length - itemsPerPage + 1))
      setAnimating(false)
    }, 300)
  }

  const getVisibleMembers = () => {
    if (isMobile) {
      return members
    }

    const endIndex = currentIndex + itemsPerPage
    if (endIndex > members.length) {
      const remaining = endIndex - members.length
      return [...members.slice(currentIndex), ...members.slice(0, remaining)]
    }
    return members.slice(currentIndex, endIndex)
  }

  const visibleMembers = getVisibleMembers()

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // swipe right
      prevSlide()
    }
  }

  return (
    <section id="about" ref={aboutRef} className="py-20 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/src/assets/background-sections/background-about.svg')" }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-5xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-[#31D9FE] text-5xl">Conheça</span> <span className="text-5xl">os cérebros</span>.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nada acontece sozinho. Esses são os nomes por trás das ideias, da execução e da entrega. Nosso time, nosso
            orgulho.
          </p>
        </div>

        <div
          className="relative"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div data-aos="fade-up" className="overflow-hidden">
            <div
              className={`transition-all duration-500 ease-in-out ${
                animating
                  ? direction === "next"
                    ? "opacity-0 -translate-x-10"
                    : "opacity-0 translate-x-10"
                  : "opacity-100 translate-x-0"
              } ${isMobile ? "flex overflow-x-auto snap-x snap-mandatory hide-scrollbar" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}`}
            >
              {visibleMembers.map((member, index) => (
                <div
                  key={`${member.nome}-${currentIndex}-${index}`}
                  className={`member-card rounded-lg overflow-hidden shadow-lg border border-[#31D9FE]/20 
                  transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[#31D9FE]/20 hover:shadow-lg
                  ${isMobile ? "min-w-[280px] snap-center mr-4 flex-shrink-0" : ""}`}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={member.imageSrc || "/placeholder.svg"}
                      alt={member.nome}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://via.placeholder.com/300x400?text=${encodeURIComponent(member.nome)}`
                      }}
                    />
                  </div>
                  <div className="p-4 text-center bg-[#030812] flex flex-col justify-between h-[140px]">
                    <div>
                      <h4 className="font-bold text-lg text-white">{member.nome}</h4>
                      <p className="text-[#31D9FE] text-sm">{member.funcao}</p>
                    </div>
                    <div className="flex justify-center space-x-3 mt-4">
                      <a
                        href={`mailto:${member.redes.email}`}
                        className="bg-[#31D9FE]/20 p-2 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300"
                        aria-label="Email"
                      >
                        <Envelope size={20} />
                      </a>
                      <a
                        href={member.redes.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#31D9FE]/20 p-2 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <InstagramLogo size={20} />
                      </a>
                      <a
                        href={member.redes.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#31D9FE]/20 p-2 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <LinkedinLogo size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 glassmorphism rounded-full p-3 shadow-md z-10 
            text-white hover:bg-[#31D9FE]/40 transition-all duration-300 hidden md:block"
            onClick={prevSlide}
            disabled={animating}
            aria-label="Anterior"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 glassmorphism rounded-full p-3 shadow-md z-10 
            text-white hover:bg-[#31D9FE]/40 transition-all duration-300 hidden md:block"
            onClick={nextSlide}
            disabled={animating}
            aria-label="Próximo"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Pagination dots removed as requested */}

        <div className="flex justify-center mt-10">
          <div data-aos="fade-up" className="glassmorphism px-4 py-2 rounded-full">
            <span className="text-[#31D9FE] text-sm font-medium">Quem faz o nxs acontecer.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
