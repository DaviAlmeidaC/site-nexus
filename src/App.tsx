import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fff] text-[#262626] flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-6xl flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold text-[#10A6FB]">Nexus-Skill</h1>
        <nav>
          <Link to="/privacy" className="text-[#10A2C3] hover:underline">
            Política de Privacidade
          </Link>
        </nav>
      </header>
      <main className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">
          Desenvolva suas Soft Skills com Gamificação e IA
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          O Nexus-Skill é o aplicativo definitivo para aprimorar sua comunicação e habilidades interpessoais de forma interativa e divertida.
        </p>
        <button className="bg-[#10A6FB] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#10A2C3]">
          Baixe Agora
        </button>
      </main>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#fff] text-[#262626] flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-6xl flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold text-[#10A6FB]">Nexus-Skill</h1>
        <nav>
          <Link to="/" className="text-[#10A2C3] hover:underline">
            Voltar para Início
          </Link>
        </nav>
      </header>
      <main className="text-left max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Política de Privacidade do Nexus-Skill</h2>
        <p className="text-gray-600 mb-4">
          <strong>1. Introdução</strong><br/>
          O Nexus-Skill valoriza sua privacidade e está comprometido em proteger os dados pessoais de seus usuários. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações ao utilizar nosso aplicativo.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>2. Coleta de Dados</strong><br/>
          Ao utilizar o Nexus-Skill, podemos coletar os seguintes dados:
          <ul className="list-disc ml-6">
            <li><strong>Dados de Cadastro:</strong> Nome, e-mail, foto de perfil e informações fornecidas voluntariamente.</li>
            <li><strong>Dados de Uso:</strong> Interações com o aplicativo, progresso nos cursos, pontuação e conquistas.</li>
            <li><strong>Dados de Dispositivo:</strong> Modelo do dispositivo, sistema operacional e versão do aplicativo.</li>
            <li><strong>Dados de Voz e Expressão Facial:</strong> Caso o usuário utilize as funções de análise de comunicação, poderemos coletar dados de voz e imagem para avaliação de habilidades interpessoais.</li>
          </ul>
        </p>
        <p className="text-gray-600 mb-4">
          <strong>3. Uso das Informações</strong><br/>
          Os dados coletados são utilizados para:
          <ul className="list-disc ml-6">
            <li>Melhorar a experiência do usuário e personalizar conteúdo.</li>
            <li>Monitorar e otimizar o desempenho do aplicativo.</li>
            <li>Permitir interações na comunidade e competição entre usuários.</li>
            <li>Desenvolver novas funcionalidades e recursos.</li>
            <li>Garantir segurança e conformidade legal.</li>
          </ul>
        </p>
        <p className="text-gray-600 mb-4">
          <strong>4. Compartilhamento de Dados</strong><br/>
          Não compartilhamos seus dados pessoais com terceiros, exceto:
          <ul className="list-disc ml-6">
            <li>Quando exigido por lei ou autoridades regulatórias.</li>
            <li>Com provedores de serviço essenciais para o funcionamento do aplicativo (exemplo: servidores de armazenamento).</li>
            <li>Para pesquisas e análises, de forma anonimizada.</li>
          </ul>
        </p>
        <p className="text-gray-600 mb-4">
          <strong>5. Armazenamento e Segurança</strong><br/>
          Os dados coletados são armazenados em servidores seguros, adotando medidas de proteção contra acessos não autorizados, vazamentos e alterações indevidas.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>6. Seus Direitos</strong><br/>
          Você tem direito a:
          <ul className="list-disc ml-6">
            <li>Acessar, corrigir ou excluir seus dados.</li>
            <li>Solicitar a portabilidade de suas informações.</li>
            <li>Revogar o consentimento para processamento de dados.</li>
          </ul>
          Para exercer seus direitos, entre em contato pelo e-mail <strong>suporte@nexus-skill.com</strong>.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>7. Cookies e Tecnologias Semelhantes</strong><br/>
          Podemos utilizar cookies e ferramentas de rastreamento para melhorar a experiência do usuário, analisar o uso do aplicativo e fornecer conteúdo relevante.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>8. Alterações nesta Política</strong><br/>
          Podemos atualizar esta Política de Privacidade periodicamente. Qualquer alteração será comunicada dentro do aplicativo ou por e-mail.
        </p>
        <p className="text-gray-600">
          <strong>9. Contato</strong><br/>
          Para dúvidas ou solicitações sobre esta política, entre em contato com nossa equipe pelo e-mail <strong>suporte@nexus-skill.com</strong>.
        </p>
        <p className="text-gray-600 mt-6">Esta Política de Privacidade é efetiva a partir de <strong>[data de publicação]</strong>.</p>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;