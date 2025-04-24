import {
  EnvelopeSimple,
  Phone,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
} from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer id="contact" data-aos="fade-up" className="bg-[#030812] text-white border-t border-[#31D9FE]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#31D9FE]">Nexus-Skill</h3>
            <p className="text-gray-400 mb-4">
              Transformando o aprendizado em uma jornada envolvente e eficiente para o desenvolvimento de habilidades
              profissionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                <FacebookLogo size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                <InstagramLogo size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                <TiktokLogo size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                <LinkedinLogo size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#problematic" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Problemática
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Solução
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <EnvelopeSimple size={20} className="text-[#31D9FE] mr-2 mt-1" />
                <a
                  href="mailto:nxsskills@gmail.com"
                  className="text-gray-400 hover:text-[#31D9FE] transition-colors"
                >
                  nxsskills@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-[#31D9FE] mr-2 mt-1" />
                <a href="tel:+5592986206811" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  (92) 98620-6811
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-[#31D9FE] mr-2 mt-1" />
                <span className="text-gray-400">Av. Exemplo, 1000 - Bairro, Cidade - Estado</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Inscreva-se para receber novidades e atualizações.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none bg-[#030812]/60 border border-[#31D9FE]/30 text-white"
              />
              <button type="submit" className="bg-[#31D9FE] hover:bg-[#24B7D8] px-4 py-2 rounded-r-md">
                <EnvelopeSimple size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nexus-Skill. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
