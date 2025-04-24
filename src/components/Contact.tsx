"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { EnvelopeSimple, Phone, TiktokLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react"

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Assunto é obrigatório"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    alert("Formulário enviado com sucesso!")
    reset()
  }

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/src/assets/background-sections/background-contact.svg')" }}
      ></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <EnvelopeSimple className="inline-block mr-2 text-[#31D9FE]" size={32} />
            <span className="text-[#31D9FE]">Fale</span> com a gente<span className="text-[#31D9FE]">.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tens alguma duvida? algum problema? algum feedback? alguma ideia de parceria? entre em contato conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div data-aos="fade-right" className="glassmorphism rounded-lg shadow-lg p-8 border border-[#31D9FE]/20">
            <h3 className="text-2xl font-bold mb-6 text-white">Envie-nos uma mensagem</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Seu nome"
                    className={`w-full bg-[#030812]/60 border-[#31D9FE]/30 text-white ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="seu.email@exemplo.com"
                    className={`w-full bg-[#030812]/60 border-[#31D9FE]/30 text-white ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-[#030812]/60 border-[#31D9FE]/30 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="Assunto da mensagem"
                    className={`w-full bg-[#030812]/60 border-[#31D9FE]/30 text-white ${errors.subject ? "border-red-500" : ""}`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Digite sua mensagem aqui..."
                  className={`w-full min-h-[150px] bg-[#030812]/60 border-[#31D9FE]/30 text-white ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] font-medium">
                Enviar mensagem
              </Button>
            </form>
          </div>

          <div data-aos="fade-left">
            <div className="glassmorphism rounded-lg shadow-lg p-8 mb-8 border border-[#31D9FE]/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Informações de contato</h3>

              <p className="text-gray-300 mb-8">
                Fale diretamente com a nossa equipe. Estamos prontos pra te ouvir e ajudar no que for preciso.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-[#31D9FE]/20 p-3 rounded-full mr-4">
                    <EnvelopeSimple size={24} className="text-[#31D9FE]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:nxsskills@gmail.com" className="text-[#31D9FE] hover:underline">
                      nxsskills@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#31D9FE]/20 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-[#31D9FE]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone</h4>
                    <a href="tel:+5592986206811" className="text-[#31D9FE] hover:underline">
                      (92) 98620-6811
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-lg shadow-lg p-8 mb-8 border border-[#31D9FE]/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Acesse nossas redes sociais</h3>
              <p className="text-gray-300 mb-4">
                Fique por dentro das novidades, conteúdos exclusivos e atualizações do app. Vem fazer parte da
                comunidade!
              </p>
              <div className="flex space-x-4">
                {/* <a
                  href="#"
                  className="bg-[#31D9FE]/20 p-3 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300 icon-hover"
                >
                  <TiktokLogo size={24} />
                </a> */}
                <a
                  href="https://www.linkedin.com/company/equipe-nexus/"
                  target="_blank"
                  className="bg-[#31D9FE]/20 p-3 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300 icon-hover"
                >
                  <LinkedinLogo size={24} />
                </a>
                <a
                  href="https://www.instagram.com/nexus_skill/"
                  target="_blank"
                  className="bg-[#31D9FE]/20 p-3 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300 icon-hover"
                >
                  <InstagramLogo size={24} />
                </a>
              </div>
            </div>

            <div className="glassmorphism rounded-lg shadow-lg p-8 border border-[#31D9FE]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Baixe o app</h3>
              <p className="text-gray-300 mb-6">
                Tudo isso na palma da sua mão. Baixe agora e comece sua jornada de evolução nas soft skills.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.nxs.nexus_skill&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] px-8 py-3 rounded-md font-medium transition-all duration-300 inline-block"
              >
                Baixe agora
              </a>
              <div className="mt-4 text-xs text-gray-400">
                <a href="#" className="hover:text-[#31D9FE]">
                  Nossa política de privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
