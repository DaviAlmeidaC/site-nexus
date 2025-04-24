import InfiniteCarousel from "./InfiniteCarousel";
import Courses from "../assets/icons/college_svgrepo.com.svg"
import ok from "../assets/icons/ok_svgrepo.com.svg"

export default function CoursesAndModules() {
  return(
    <section id="app" className="min-h-screen flex flex-col items-center relative overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/src/assets/background-sections/background-home.svg')",
          backgroundColor: "#030812",
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 z-10 relative text-white flex flex-col justify-between items-center gap-4">
        <h2 data-aos="fade-down" className="flex items-baseline text-5xl font-bold">
          <img className="w-6 h-6 md:w-9 md:h-9 md:flex hidden" src={Courses} alt={Courses} />
          <span className="text-4xl text-center md:text-5xl">Curso e módulos disponíveis<span className="text-[#31D9FE]">.</span></span>
          
        </h2>
        <div className="flex max-w-4xl w-full justify-center">
            <div className="grid w-full md:grid-cols-[50%_50%]">
              <div data-aos="fade-right" className="flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">o que você encontra por aqui:</h3>
                <p>
                  Módulos e Cursos completos desenvolvidos por especialistas com apoio de Inteligência Artificial, combinando:
                </p>
              </div>
              <div data-aos="fade-left" className="flex flex-col justify-center items-start p-6 gap-2 md:border-l border-[#31D9FE]">
                <div className="flex items-center gap-2">
                  <img src={ok} alt="ok" />
                  <p>Conteúdo denso e bem estruturado</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={ok} alt="ok" />
                  <p>Linguagem didática e direta ao ponto</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={ok} alt="ok" />
                  <p>Abordagens pedagógicas e acessíveis</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={ok} alt="ok" />
                  <p>Temas atuais, relevantes e transformadores</p>
                </div>
              </div>

            </div>
          </div>
      </div>
      <div className="w-full">
        <InfiniteCarousel />
      </div>
    </section>
  )
}