import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Image from "../../assets/Courses-images/imagem.svg";
import Image1 from "../../assets/Courses-images/imagem (1).svg";
import Image2 from "../../assets/Courses-images/imagem (2).svg";
import Image3 from "../../assets/Courses-images/imagem (3).svg";
import Image4 from "../../assets/Courses-images/imagem (4).svg";import Image5 from "../../assets/Courses-images/imagem (5).svg";import Image6 from "../../assets/Courses-images/imagem (6).svg";
import fire from "../../assets/icons/fogo.svg";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  users: string;
}

interface TagData {
  id: number;
  tag: string;
}

const InfiniteCarousel = () => {
  const cards: CardData[] = [
    {
      id: 1,
      title: 'Linguagem corporal',
      description: 'Aprenda a ler sinais e se expressar com mais impacto.',
      imageUrl: Image,
      tag: "Comunicação",
      users: "+ de mil alunos"
    },
    {
      id: 2,
      title: 'Palestras e Oratória',
      description: 'Colabore de verdade, com comunicação e alinhamento.',
      imageUrl: Image1,
      tag: "Apresentação",
      users: "+ de mil alunos"
    },
    {
      id: 3,
      title: 'Liderança e gestão de pessoas',
      description: 'Inspire, organize e guie com empatia e estratégia.',
      imageUrl: Image2,
      tag: "Trabalho em equipe",
      users: "+ de mil alunos"
    },
    {
      id: 4,
      title: 'Vendas e Persuasão',
      description: 'Técnicas práticas pra vender ideias (e produtos) com autenticidade.',
      imageUrl: Image3,
      tag: "Comunicação",
      users: "+ de mil alunos"
    },
    {
      id: 5,
      title: 'Rapport',
      description: 'Conquiste empatia e confiança em qualquer conversa.',
      imageUrl: Image4,
      tag: "Comunicação",
      users: "+ de mil alunos"
    },
    {
      id: 6,
      title: 'A Ciência do Sono',
      description: 'Durma melhor, pense melhor, viva melhor.',
      imageUrl: Image5,
      tag: "Psicologia pessoal",
      users: "+ de mil alunos"
    },
    {
      id: 7,
      title: 'Controle Emocional',
      description: 'Lide com pressão, críticas e frustrações com equilíbrio.',
      imageUrl: Image6,
      tag: "Psicologia pessoal",
      users: "+ de mil alunos"
    },
     {
    id: 8,
    title: 'resolução de conflitos',
    description: 'Aprenda a identificar, prevenir e resolver conflitos com inteligência emocional e estratégias práticas.',
    imageUrl: "https://i.ibb.co/JjMFy79b/f63177eb-2cf8-4f85-86b7-f6fedf40941d.png",
    tag: "Psicologia pessoal",
    users: "+ de mil alunos"
  },
  {
    id: 9,
    title: 'Persuasão',
    description: 'Aprenda as técnicas mais eficazes de persuasão com base em ciência comportamental e estratégias reais.',
    imageUrl: "https://i.ibb.co/FbbPd6dc/37f2595d-8fa6-4348-b0f6-6e696950eb33.png",
    tag: "Comunicação",
    users: "+ de mil alunos"
  },
  {
    id: 10,
    title: 'Assuntos',
    description: 'Como puxar os melhores assuntos.',
    imageUrl: "https://i.ibb.co/v4PDgbVg/2d58233b-7a92-45c8-a6a5-d1dc13d123ec-1.png",
    tag: "Relacionamento",
    users: "+ de mil alunos"
  },
  {
    id: 11,
    title: 'Vendas',
    description: 'Este curso ensinará desde a abordagem inicial até a finalização da venda, com uma abordagem que prioriza a criação de conexão.',
    imageUrl: "https://i.ibb.co/Tx7hsxv8/b3074ab3-541b-4824-822c-d67de179a47a.png",
    tag: "Negócios",
    users: "+ de mil alunos"
  },
  {
    id: 12,
    title: 'Comunicação não violenta',
    description: 'Domine a comunicação não violenta: fortaleça relações, resolva conflitos e lidere com empatia e respeito.',
    imageUrl: "https://i.ibb.co/prjycmP4/04247359-2621-4523-8512-497aaeefeec1.png",
    tag: "Empatia",
    users: "+ de mil alunos"
  },
  {
    id: 14,
    title: 'Vida social na escola/faculdade',
    description: 'Dicas sociais reais para fazer amigos e criar conexões de verdade e expandir o seu networking.',
    imageUrl: "https://i.ibb.co/sJmfBL5G/bbc50481-42da-4997-9292-de76928407af.png",
    tag: "Juventude",
    users: "+ de mil alunos"
  },
  {
    id: 15,
    title: 'Oratória para estudantes',
    description: 'Como falar bem em trabalhos, apresentações e feiras com confiança.',
    imageUrl: "https://i.ibb.co/608TzThK/f05a4a2a-bf43-4ff5-9395-975fa82c3d62.png",
    tag: "Apresentação",
    users: "+ de mil alunos"
  },
  {
    id: 17,
    title: 'Aprender mais rápido',
    description: 'Memorização, revisão ativa e técnicas para estudar de forma inteligente.',
    imageUrl: "https://i.ibb.co/39xHrGb0/0a073b70-dc78-4667-bcf0-a438f519eaed.png",
    tag: "Estudo",
    users: "+ de mil alunos"
  },
  {
    id: 18,
    title: 'Ser Mãe sem se anular',
    description: 'Descubra como cuidar da família sem esquecer de si mesma, com equilíbrio emocional.',
    imageUrl: "https://i.ibb.co/YTNq5M6k/33580324-0cc5-453b-9309-ff855361e678.png",
    tag: "Família",
    users: "+ de mil alunos"
  },
  {
    id: 22,
    title: 'Como ser um pai emocionalmente presente',
    description: 'Princípios práticos da psicologia para fortalecer o vínculo entre pais e filhos.',
    imageUrl: "https://i.ibb.co/Kx46T9cY/1a72ece0-aa67-42e2-9f5e-38555850c7be.png",
    tag: "Família",
    users: "+ de mil alunos"
  },
  {
    id: 23,
    title: 'Aprendizado rápido',
    description: 'Aprenda as melhores técnicas para aprender de maneira rápida e eficiente qualquer conteúdo.',
    imageUrl: "https://i.ibb.co/NgLv7bJc/39b26126-cc23-404e-a1c6-70d56c6d8424.png",
    tag: "Estudo",
    users: "+ de mil alunos"
  },
  {
    id: 24,
    title: 'ciência da Motivação',
    description: 'Descubra como manter a motivação mesmo em dias difíceis e transforme sua rotina com técnicas que funcionam.',
  imageUrl: "https://i.ibb.co/gFSK8LkL/57735970-ef1e-477b-83e6-0f7e6e5d6992.png",
    tag: "Psicologia pessoal",
    users: "+ de mil alunos"
  },
  {
    id: 25,
    title: 'Superando a timidez',
    description: 'Entenda e controle os gatilhos internos da timidez. Reprograme seus pensamentos, emoções e reações.',
  imageUrl: "https://i.ibb.co/gLHYQ1gz/efc37e3b-fbb1-412e-b1e6-1a797abc865f.png",
    tag: "Psicologia pessoal",
    users: "+ de mil alunos"
  },
  {
    id: 26,
    title: 'Procrastinação, como superar',
    description: 'Entenda por que você adia tarefas, como treinar seu cérebro para agir mesmo sem motivação e dominar técnicas de produtividade.',
    imageUrl: "https://i.ibb.co/yB0JFS79/9269075e-cb0b-4ab7-8e82-0864e70b0daf.png",
    tag: "Produtividade",
    users: "+ de mil alunos"
  },
  {
    id: 27,
    title: 'Ansiedade — Parte 1',
    description: 'Aprenda a controlar sua ansiedade de dentro pra fora. Descubra o que ela realmente é, por que surge e como dominá-la.',
    imageUrl: "https://i.ibb.co/kV8HW6RC/54cc16c4-d022-4249-840a-5a6c8a8c08f1.png",
    tag: "Saúde mental",
    users: "+ de mil alunos"
  },
  {
    id: 28,
    title: 'Pitch de vendas',
    description: 'Aprenda a vender qualquer ideia! Domine técnicas de persuasão, storytelling, fechamento e muito mais.',
    imageUrl: "https://i.ibb.co/4nkZbt66/14329912-ae31-4218-876f-a62c1740b462.png",
    tag: "Negócios",
    users: "+ de mil alunos"
  },
  {
    id: 29,
    title: 'Mindset — Psicologia do sucesso',
    description: 'Transforme sua mentalidade, desenvolva sua autoconfiança e comece a crescer de verdade.',
    imageUrl: "https://i.ibb.co/v6HvqLP5/1e46f1da-45f7-4684-aeb0-c9ebfeef8a80.png",
    tag: "Psicologia pessoal",
    users: "+ de mil alunos"
  },
  {
    id: 30,
    title: 'O corpo fala',
    description: 'Aprenda a ler gestos, expressões e posturas. O corpo revela tudo que as palavras escondem.',
    imageUrl: "https://i.ibb.co/wZzDnvym/download-8.jpg",
    tag: "Comunicação",
    users: "+ de mil alunos"
  },
  {
    id: 32,
    title: 'O poder do hábito',
    description: 'Entenda como os hábitos moldam sua vida — e aprenda a transformá-los de forma definitiva.',
    imageUrl: "https://i.ibb.co/TxMmyzWV/download-9.jpg",
    tag: "Hábito",
    users: "+ de mil alunos"
  },
  {
    id: 33,
    title: 'Como fazer amigos e influenciar pessoas',
    description: 'Aprenda os princípios eternos de Dale Carnegie para se tornar mais carismático, influente e socialmente poderoso.',
    imageUrl: "https://i.ibb.co/9HfJQ9Cm/download-1.webp",
    tag: "Relacionamento",
    users: "+ de mil alunos"
  },
  {
    id: 34,
    title: 'As 48 Leis do Poder',
    description: 'Descubra as regras ocultas do jogo de poder. Estratégia, persuasão e controle como você nunca viu.',
    imageUrl: "https://i.ibb.co/k6qWtyy5/shopping.webp",
    tag: "Estratégia",
    users: "+ de mil alunos"
  },
  {
    id: 35,
    title: 'Traição: Superar ou terminar',
    description: 'Descubra o que acontece com a confiança, o amor e o vínculo depois de uma traição.',
    imageUrl: "https://i.ibb.co/wZV6TdP2/6c3dba5f-7ab6-44d5-97c7-7e0a0453b32a.png",
    tag: "Relacionamento",
    users: "+ de mil alunos"
  },
  {
    id: 37,
    title: 'Psicologia do Amor',
    description: 'Entenda o que realmente move, fortalece e sabota os relacionamentos afetivos por dentro.',
    imageUrl: "https://i.ibb.co/0VFFrYv1/d5eb0dc4-3814-4cc1-9a95-399138b253e3.png",
    tag: "Relacionamento",
    users: "+ de mil alunos"
  },
  {
    id: 38,
    title: 'Sedução',
    description: 'Aprenda a atrair com presença, autenticidade e respeito — sem jogos.',
    imageUrl: "https://i.ibb.co/KjFy4zwc/33d7f2a3-9636-407c-8fe5-5fcc20ef8423.png",
    tag: "Relacionamento",
    users: "+ de mil alunos"
  },
  {
    id: 39,
    title: 'Argumentação',
    description: 'Aprenda a argumentar com clareza, lógica e persuasão. Use sua voz como ferramenta de influência e diálogo.',
    imageUrl: "https://i.ibb.co/chfJX3xQ/a91cbc03-b2f5-4502-90c6-5df404924eeb.png",
    tag: "Comunicação",
    users: "+ de mil alunos"
  },
  {
    id: 40,
    title: 'Entrevista de emprego',
    description: 'Como se comportar em uma entrevista de emprego? Aprenda as melhores técnicas para se destacar.',
    imageUrl: "https://i.ibb.co/Q3MbF6v5/f5467651-271a-414b-b0f9-ba618a890c16.png",
    tag: "Carreira",
    users: "+ de mil alunos"
  }
  ]; 
  //33

  const tags: TagData[] = [
    {
      id: 1,
      tag: "Psicologia pessoal"
    },
    {
      id: 2,
      tag: "Comunicação"
    },
    {
      id: 3,
      tag: "Relações amorosas"
    },
    {
      id: 4,
      tag: "Apresentação"
    },
    {
      id: 5,
      tag: "Resumos de livros"
    },
    {
      id: 6,
      tag: "Trabalho em equipe"
    },
    {
      id: 7,
      tag: "Habilidades para educadores"
    },
    {
      id: 8,
      tag: "Relacionamento familiar"
    },
    {
      id: 9,
      tag: "Vida estudantil"
    }
  ]

  const duplicatedCards = [...cards, ...cards, ...cards];
  const duplicatedTags = [...tags, ...tags, ...tags,...tags];
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const x = useMotionValue(0);

  useEffect(() => {
    let animationFrame: number;
  
    const move = () => {
      if (!isDraggingRef.current) {
        x.set(x.get() - 0.11); 
      }
      animationFrame = requestAnimationFrame(move);
    };
  
    animationFrame = requestAnimationFrame(move);
  
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div data-aos="fade-up" className="w-full py-8 overflow-hidden">
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-l from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max"
          animate={{
            x: ['0%', '-150.666%'], 
          }}
          transition={{
            duration: 150, 
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedTags.map((tag, index) => (
            <motion.div
              key={`${tag.id}-${index}`}
              className="w-[350px] flex-shrink-0"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="border-[1px] p-6 border-gray-800 bg-[#31D9FE]/85 rounded-lg overflow-hidden shadow-sm mx-2 flex justify-center">
                <h5 className='font-semibold text-xl'>{tag.tag}</h5>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-l from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          style={{ x }}
          onDragStart={() => { isDraggingRef.current = true; }}
          onDragEnd={() => { isDraggingRef.current = false; }}
          animate={{
            x: ['0%', '-200.666%'], 
          }}
          transition={{
            duration: 150, 
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedCards.map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              className="w-[350px] flex-shrink-0"
            >
              <div className="border-[1px] p-6 border-gray-800 hover:shadow-[#35D9FD]/10 hover:border-[#35D9FD]/30 transition-all duration-300 bg-gray-900/60 rounded-lg overflow-hidden shadow-sm mx-2">
                <div className="h-48 flex flex-col items-center justify-center rounded-xl relative">
                  <span className='bg-[#31D9FE]/85 px-6 py-1 rounded-lg -mb-3 z-10'>
                    <p className='text-lg font-semibold'>{card.tag}</p>
                  </span>
                  <img 
                    src={card.imageUrl} 
                    alt={card.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 flex flex-col items-center">
                  <h3 className="font-medium text-lg mb-2 text-white">{card.title}</h3>
                  <hr className='w-full border-gray-500/40 mb-2' />
                  <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                  <span className='flex items-center gap-2 bg-[#31D9FE]/85 rounded-full px-4 py-1'>
                    <img src={fire} alt="Ícone de fogo" className="w-4 h-4" />
                    <p className="text-sm font-medium">{card.users}</p>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;