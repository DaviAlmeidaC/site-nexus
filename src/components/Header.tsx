"use client"

import { useState, useEffect } from "react"
import { List, X } from "@phosphor-icons/react"
import { Button } from "../ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll("section[id]")
      let currentSection = "home"

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionHeight = section.clientHeight
        const halfViewport = window.innerHeight / 2

        if (sectionTop <= halfViewport && sectionTop + sectionHeight > halfViewport) {
          currentSection = section.getAttribute("id") || "home"
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#problematic", text: "Problemática" },
    { href: "#solution", text: "Solução" },
    { href: "#app", text: "App" },
    { href: "#about", text: "Sobre" },
    { href: "#contact", text: "Contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#030812]/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-[#31D9FE]">
            <img 
              src={"/src/assets/nexus.png"} 
              alt="NXS" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain" 
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-white font-medium hover:text-[#31D9FE] transition-colors ${activeSection === link.href.substring(1) ? "active" : ""
                }`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        <a href="https://play.google.com/store/apps/details?id=com.nxs.nexus_skill&pcampaignid=web_share" target="_blank" className="hidden md:block">
          <Button className="bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] font-medium">Baixe agora</Button>
        </a>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* menu p celular */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#030812]/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-white font-medium hover:text-[#31D9FE] transition-colors py-2 ${activeSection === link.href.substring(1) ? "text-[#31D9FE]" : ""
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <a href="https://play.google.com/store/apps/details?id=com.nxs.nexus_skill&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] font-medium w-full">Baixe agora</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
