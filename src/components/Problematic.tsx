import background1 from "../assets/background-sections/background-problematic.svg";
import background2 from "../assets/background-sections/background-part-2-app.svg";
import trabalho from "../assets/problematic-images/trabalho.jpg";
import empreendedorismo from "../assets/problematic-images/empreendedorismo.webp";
import noticias from "../assets/problematic-images/noticias.png"
import escola from "../assets/problematic-images/escola.webp";
import arrow from "../assets/icons/arrow.svg";
import question from "../assets/icons/question.svg";


export function Problematic() {
  return (
    <section
      id="problematic"
      className="py-12 min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 z-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${background1})`,
          backgroundColor: "#030812",
          height: "100vh",
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="absolute inset-x-0 bottom-0 z-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundColor: "#030812",
          top: "100vh", 
          pointerEvents: "none",
        }}
      ></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-5xl md:text-5xl font-bold mb-12">
              <div className="text-[#2ED9FF] flex items-baseline">
                <img src={question} alt="Question Icon" className="w-8 h-8 hidden md:flex" />
                <h2 className="text-white ml-2">
                  Problemática
                </h2>
                <span className="text-[#2ED9FF]">.</span>
              </div>
            </h2>
            <h3 className="text-xl md:text-4xl md:font-semibold text-white mt-2 w-full flex justify-start">
              Você já passou por isso?
            </h3>
          </div>

          <div className="grid w-full gap-10 md:grid-cols-1 lg:grid-cols-1">
            <div data-aos="fade-right" className="flex items-center gap-6 md:items-end w-full">
              <div className="flex flex-col md:items-start md:text-start items-center text-center md:flex-row md gap-6 w-full lg:w-3/4 bg-[#181818]/60 p-4 rounded-lg border border-[#474747]">
                <img
                  src={trabalho}
                  alt="Ambiente de trabalho"
                  className="h-48 w-48 object-cover rounded-lg"
                />
                <div className="flex-1 text-lg">
                  <h4 className="text-2xl font-bold text-[#2ED9FF] mb-3">
                    Ambiente de trabalho
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "“Sou bom tecnicamente, mas travo na hora de liderar.” ou “Sempre sou interrompido ou ignorado.”",
                      "“Dou o meu melhor, mas ninguém reconhece.” ou “Tenho conhecimento, mas não sei liderar.”",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="text-white flex items-start gap-1"
                      >
                        <span className="text-[#31D9FE] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="flex justify-end items-center gap-6 md:items-end w-full">
              <div className="flex flex-col md:items-start md:text-start items-center text-center md:flex-row md gap-6 w-full lg:w-3/4 bg-[#181818]/60 p-4 rounded-lg border border-[#474747]">
                <img
                  src={empreendedorismo}
                  alt="Ambiente de trabalho"
                  className="h-48 w-48 object-cover rounded-lg"
                />
                <div className="flex-1 text-lg">
                  <h4 className="text-2xl font-bold text-[#2ED9FF] mb-3">
                    Liderança e empreendedorismo
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "“Tenho bons profissionais, mas não sabem se comunicar.”",
                      "“Preciso de resultados, mas o time não se escuta.”",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="text-white flex items-start gap-1"
                      >
                        <span className="text-[#31D9FE] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="flex items-center gap-6 md:items-end w-full">
              <div className="flex flex-col md:items-start md:text-start items-center text-center md:flex-row md gap-6 w-full lg:w-3/4 bg-[#181818]/60 p-4 rounded-lg border border-[#474747]">
                <img
                  src={escola}
                  alt="Ambiente de trabalho"
                  className="h-48 w-48 object-cover rounded-lg"
                />
                <div className="flex-1 text-lg">
                  <h4 className="text-2xl font-bold text-[#2ED9FF] mb-3">
                    Escola ou faculdade
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "“Travo na hora de apresentar um trabalho.” ou “Fico nervoso só de pensar em falar em público.”",
                      "“Sinto que ninguém me escuta no grupo.” ou “Sinto vergonha de chegar com um grupo ou não sei o que falar.”",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="text-white flex items-start gap-1"
                      >
                        <span className="text-[#31D9FE] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <div data-aos="fade-right" className=" mt-12 px-4">
            <p className="text-xl text-white">
              E adivinha? Tudo isso é falta de soft skills.
            </p>
            <h2 className="text-3xl font-bold text-[#FFFFFF]">
              <div className="flex items-center gap-2">
                <img src={arrow} alt="Arrow Icon" className="w-6 h-6" />
              <span className="text-[#ABABAB]"></span> Mas afinal, o que são soft skills?
              </div>
            </h2>
          </div>
        </div>
        <div className="relative z-10">
          <div data-aos="fade-up" className="p-8 mt-16 text-center text-white text-lg leading-relaxed">
            <h2 className="text-4xl w-full font-bold flex justify-center text-[#2ED9FF]">
              <span className="w-full lg:w-2/3">São habilidades comportamentais e emocionais que influenciam tudo ao seu redor.</span>
            </h2>
            <p className="mt-2">
              Elas impactam diretamente a forma como você se comunica, se relaciona com os outros e se posiciona no mundo. Ao
              contrário das hard skills, são essas competências que fazem você ser ouvido, respeitado, promovido e valorizado.
            </p>
          </div>
          <div className="p-8 mt-8 text-white text-lg leading-relaxed">
            <h2 data-aos="fade-right" className="text-3xl font-bold text-[#FFFFFF]">
              E a realidade mostra:
            </h2>
          </div>
          <div data-aos="fade-up" className="mt-8 flex justify-center">
            <img src={noticias} alt="Notícias sobre soft skills" className="hmax-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}