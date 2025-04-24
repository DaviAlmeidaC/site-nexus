import mockup from "../assets/icons/mockups/nxs-on-device.svg"
import play from "../assets/icons/play-store_svgrepo.com.svg"

export function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/src/assets/background-sections/background-home.svg')",
          backgroundColor: "#030812",
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 z-10 relative text-white flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left gap-4 w-full md:w-1/2">
          <span className="font-bold text-xl">Conheça o</span>
          <h1 className="text-4xl md:text-6xl font-bold">
            <img
              src="/src/assets/logo-extended.png"
              alt="NXS Extended Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </h1>
          <span className="font-bold text-lg md:text-xl">App para desenvolvimento de soft skills (habilidade sociais)</span>
          <div className="bg-white/20 backdrop-blur-sm rounded-[10px] p-4 flex gap-3 items-center max-w-md">
            <img src="/src/assets/icons/thunder.svg" alt="Thunder Icon" className="w-6 h-6" />
            <p>
              Solução feita para <span className="text-[#31D9FE] font-bold">você</span>. E de graça!
            </p>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.nxs.nexus_skill&pcampaignid=web_share" target="_blank"  className="px-20 sm:px-28 md:px-8 py-3 rounded-lg font-bold text-xl inline-flex whitespace-nowrap items-center justify-center transition-all duration-300 text-white shadow-[0_0_10px_#24B7D8] hover:shadow-[0_0_15px_#24B7D8] bg-[#24B7D8] bg-gradient-to-b from-[#24B7D8] to-[#24B7D8] hover:from-[#24B7D8]">
            <img src={play} alt={play} />
            <span className="ml-2">Baixe agora!</span>
          </a>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src={mockup}
            alt="NXS App Mockup"
            className="w-full max-w-[300px] md:max-w-[500px] mx-auto block"
          />
        </div>
      </div>
    </section>
  )
}
