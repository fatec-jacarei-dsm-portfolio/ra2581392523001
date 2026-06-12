let isDragging = false;
let offsetX, offsetY;

function startDrag(e, el) {
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    document.addEventListener('mousemove', (e) => drag(e, el));
    document.addEventListener('mouseup', stopDrag);
    e.preventDefault();
}

function drag(e, el) {
    if (isDragging) {
        el.style.left = (e.clientX - offsetX) + 'px';
        el.style.top = (e.clientY - offsetY) + 'px';
    }
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}



const i18n = {
  pt: {
    hero_title: "Blog-Portfólio!!!",
    hero_sub: "Bem vindo ao meu BLOG (portfólio) com estilo internet anos 2000. Aqui você vai encontrar meus projetos, stacks, estudos e outras coisas legais. APROVEITE!!",
    marquee: "*** Bem-vindo ao meu portfolio! Melhor visto em 800x600***",
    nav_skills: "Skills", nav_projects: "Projetos", nav_about: "Sobre", nav_contact: "Contatos",
    visitors: "Você é o visitante nº",
    skills_title: "★ Stack & Ferramentas ★",
    skill_langs: "Linguagens",
    projects_title: "★ Projetos ★",
    academic_title: "Projetos Acadêmicos",
    personal_title: "Projetos Pessoais",
    professional_title: "Projetos Profissionais",
    contribution_label: "Minha contribuição:",
    repository_link: "Ver repositório",
    p1_name: "Chatbot para Secretaria Acadêmica",
    p1_desc: "Projeto do Semestre: chatbot de autoatendimento para a Secretaria Acadêmica da Fatec Jacareí. Interface React/TypeScript, API Node.js e PostgreSQL em Docker.",
    p1_contribution: "iniciei e evoluí o front-end do chatbot, criando os componentes de mensagens, opções de resposta, cabeçalho e rodapé. Também desenvolvi a interface e os componentes editáveis do painel administrativo.",
    p2_desc: "Jogo de arena 2D com waves e upgrades. Implementado em HTML/Canvas, Java Swing e Python Pygame com paridade de features.",
    p4_name: "Mega-Sena App - Containerizada",
    p4_desc: "App de loteria Mega-Sena containerizada com Docker Compose. Stack completa: React, Node.js/Express e PostgreSQL.",
    p5_name: "AgriRSLAB Portal",
    p5_desc: "Projeto desenvolvido no 1º semestre da FATEC, com foco em uma solução tecnológica para o agronegócio.",
    p5_contribution: "desenvolvi a página \"Sobre\" e implementei sua responsividade, trabalhando na estrutura HTML e nos estilos globais e específicos da página.",
    p6_name: "Game Rating Platform",
    p6_desc: "Conceito de plataforma estilo Letterboxd para avaliação de jogos. Stack planejada: React + Vite + Tailwind + Supabase + IGDB API.",
    professional_project_name: "Ferramentas internas para processos de TI",
    professional_project_desc: "Atuação no suporte e desenvolvimento de soluções internas, incluindo gerenciamento de bancos SQL Server e criação de interfaces front-end para apoiar processos da equipe.",
    about_title: "★ Quem sou eu ★",
    about_p1: "Estudante de <strong>Desenvolvimento de Software Multiplataforma</strong> na Fatec Jacareí, com foco em desenvolvimento web full-stack e sistemas de software.",
    about_p2: "Estágiario em TI com suporte e desenvolvimento de ferramentas internas, do gerenciamento de bancos SQL Server à criação de interfaces front-end para processos internos.",
    about_p3: "Apaixonado por <strong>gamedev</strong>: já implementei o mesmo jogo em três linguagens diferentes só por curiosidade.",
    about_p4: "Atualmente focado no projeto do semestre, um chatbot de autoatendimento para a secretaria da faculdade.",
    info_loc_l: "Localização", info_loc_v: "Jacareí, SP - Brasil",
    info_edu_l: "Formação", info_area_l: "Área", info_area_v: "Full-stack / Suporte TI",
    info_focus_l: "Foco atual", info_focus_v: "Projeto Chatbot",
    info_langs_l: "Idiomas", info_langs_v: "Português, Inglês",
    info_int_l: "Interesses",
    contact_title: "★ Contatos Profissionais ★",
    linkedin_text: "Conecte-se comigo profissionalmente",
    github_text: "Conheça meus repositórios e projetos",
    footer_txt: "© 2026 João Lorena - Todos os direitos livres!!!.",
    status: "Olá e bem vindo ao meu portfólio..."
  },
  en: {
    hero_title: "João's Blog-Portfolio!!!",
    hero_sub: "Hello! This is my BLOG portfolio in 2000s internet mode. Here you will find projects, studies and other cool stuff. ENJOY!!",
    marquee: "***Welcome to my portfolio! Best viewed in 800x600***",
    nav_skills: "Skills", nav_projects: "Projects", nav_about: "About", nav_contact: "Contact",
    visitors: "You are visitor number",
    skills_title: "★ Stack & Tools ★",
    skill_langs: "Languages",
    projects_title: "★ Projects ★",
    academic_title: "Academic Projects",
    personal_title: "Personal Projects",
    professional_title: "Professional Projects",
    contribution_label: "My contribution:",
    repository_link: "View repository",
    p1_name: "Academic Secretary Chatbot",
    p1_desc: "Semestre project: a self-service chatbot for the Academic Secretary at Fatec Jacareí. React/TypeScript frontend, Node.js API and PostgreSQL in Docker.",
    p1_contribution: "I started and evolved the chatbot frontend, creating message, response option, header and footer components. I also developed the admin panel interface and its editable components.",
    p2_desc: "2D arena game with waves and upgrades. Implemented in HTML/Canvas, Java Swing and Python Pygame with feature parity.",
    p4_name: "Mega-Sena App - Containerized",
    p4_desc: "Containerized Mega-Sena lottery app using Docker Compose. Full stack: React, Node.js/Express and PostgreSQL.",
    p5_name: "AgriRSLAB Portal",
    p5_desc: "Project developed in the first semester at FATEC, focusing on a technological solution for the agribusiness sector.",
    p5_contribution: "I developed the About page and implemented its responsive layout, working on the HTML structure and the global and page-specific styles.",
    p6_name: "Game Rating Platform",
    p6_desc: "Letterboxd-style platform concept for rating and reviewing games. Planned stack: React + Vite + Tailwind + Supabase + IGDB API.",
    professional_project_name: "Internal tools for IT processes",
    professional_project_desc: "IT support and internal solution development, including SQL Server database management and frontend interfaces that support team processes.",
    about_title: "★ Who I Am ★",
    about_p1: "Student of <strong>Multiplataform Software Development</strong> at Fatec Jacareí, focused on full-stack web development and software systems.",
    about_p2: "intern in IT doing support and building internal tools, from managing SQL Server databases to creating frontend interfaces for internal processes.",
    about_p3: "Passionate about <strong>gamedev</strong>: I have implemented the same game in three different languages just out of curiosity.",
    about_p4: "Currently focused on my semester  project, a self-service chatbot for the college secretary.",
    info_loc_l: "Location", info_loc_v: "Jacareí, SP - Brazil",
    info_edu_l: "Education", info_area_l: "Area", info_area_v: "Full-stack / IT Support",
    info_focus_l: "Current focus", info_focus_v: "Capstone Chatbot + Unity",
    info_langs_l: "Languages", info_langs_v: "Portuguese, English",
    info_int_l: "Interests",
    contact_title: "★ Professional Contact ★",
    linkedin_text: "Connect with me professionally",
    github_text: "Explore my repositories and projects",
    footer_txt: "© 2026 João Lorena - All rights free!!!.",
    status: "Hello and welcome to my portfolio..."
  }
};

let currentLang = "pt";

function setLang(lang) {
  currentLang = lang;
  const t = i18n[lang] || i18n.pt;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById("btn-pt").classList.toggle("active", lang === "pt");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}



updateClock();
setInterval(updateClock, 30000);
