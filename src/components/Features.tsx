import rocketIcon from "../assets/icons/rocketIcon.svg"
import Trophy from "../assets/icons/Trophy.svg"
import abstract from "../assets/icons/abstract.svg"
import layers from "../assets/icons/layers.svg"
import chat from "../assets/icons/chat.svg"
import star from "../assets/icons/star.svg"
import controll from "../assets/icons/controll.svg"
import background from "../assets/background-sections/background-part-2-app.svg"
import play from "../assets/icons/play-store_svgrepo.com.svg"

export function Features() {
  const ContentsCard = [
    {
      title: "Ranking de usuários",
      content: "Veja sua posição e acompanhe seu progresso em comparação com outros.",
      icon: Trophy
    },
    {
      title: "Conteúdo multiformato",
      content: " Áudios, textos, interações, minigames e testes especificos com IA — Tudo com o objetivo de você aprender da melhor forma possivel e unica.",
      icon: layers
    },
    {
      title: "Perfil com Progresso",
      content: "Veja sua evolução dia após dia. Receba feedbacks, conquiste medalhas e visualize sua jornada no app.",
      icon: abstract
    },
    {
      title: "Chat e Fórum",
      content: "Troque experiências, tire dúvidas e conecte-se com quem também quer crescer — tudo dentro do app.",
      icon: chat
    },
    {
      title: "Sistema de XP e Níveis",
      content: "Ganhe pontos por assistir episódios, concluir quizzes e participar de desafios. Suba de nível e desbloqueie conquistas.",
      icon: star
    },
    {
      title: "Minigames Educativos",
      content: "Aprenda jogando com desafios interativos que desenvolvem suas habilidades e testam, utilizando IA.",
      icon: controll
    },
  ]

  return (
    <section id="app" className="py-20 min-h-screen flex  relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "#030812",
        }}
      ></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div data-aos="fade-down" className="text-center mb-16 justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex justify-center items-baseline">
            <img className="w-6 hidden md:flex" src={rocketIcon} alt="rocket-icon" />
            <span className="ml-1 text-4xl font-bold sm:text-5xl">Comece a evoluir</span>
            <span className="text-[#35D9FD]">.</span>
          </h2>
          <div className="w-full flex text-center justify-center">
            <p className="max-w-3xl text-[#d1d5db]">O nosso app é mais do que uma plataforma. É uma experiência de desenvolvimento pessoal e profissional, onde você aprende enquanto se conecta, joga, compartilha e evolui de verdade.</p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div data-aos="fade-up" className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-12 max-w-7xl mb-12">
            {ContentsCard.map((content, index) => (
              <div key={index} className="relative w-full h-full group">
                <div className="absolute inset-0 bg-[#24B7D8] rounded-lg z-0 transition-shadow duration-300 group-hover:shadow-[0_2px_5px_rgba(36,183,216,0.4)]" />
                <div className="relative z-10 px-6 border flex flex-col items-center border-[#444444] bg-[#262626] w-full h-56 rounded-lg transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="absolute -top-5 flex justify-center items-center bg-[#333333] w-20 h-20 rounded-lg">
                    <img className="w-1/2" src={content.icon} alt="Trophy" />
                  </div>
                  <div className="mt-16 flex flex-col text-center w-full">
                    <h3 className="font-semibold text-2xl mb-2">{content.title}</h3>
                    <p className="text-[#d1d5db]">{content.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </section>
  )
}

//bg-[#24B7D8] px-32 py-3 rounded-lg font-bold text-xl inline-flex items-center justify-cente transition-colors hover:bg-[#2295af]