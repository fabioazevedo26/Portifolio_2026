# Portfolio - Fábio Azevedo

Portfólio pessoal desenvolvido com React, Vite e Tailwind CSS. Apresenta experiência profissional, projetos acadêmicos (TCC IoT) e conquistas técnicas (Robô Sumô).

## 📸 Preview

![Portfolio Preview](./portfolio/dist/robo_sumo.jpeg)

## 🚀 Tecnologias

| Categoria | Ferramentas |
|-----------|-------------|
| **Core** | React 19, Vite 8 |
| **Styling** | Tailwind CSS 3.4, CSS Variables (Design System customizado) |
| **Tooling** | oxlint, PostCSS, Autoprefixer |
| **Fonts** | Geist, Inter, JetBrains Mono, Material Symbols |

## ✨ Funcionalidades

- **Hero Section** — Apresentação com demonstração visual animada de sensor IoT (ESP32 + MQTT)
- **Experiência Profissional** — Cards com tecnologias e tooltips interativos (hover + touch)
- **Projetos** — TCC IoT (ESP32, MQ-7, BME280, Telegram) + WordPress/UniFi Captive Portal
- **Conquistas** — 2º lugar em Robô Sumô (Arduino, sensores IR, estratégia autônoma)
- **HoverTooltip** — Componente reutilizável acessível (desktop hover + mobile touch)
- **Design System** — Dark mode nativo, glassmorphism, grid de rede sutil, tipografia hierárquica

## 📁 Estrutura

```
portfolio/
├── src/
│   ├── App.jsx                    # Layout principal
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Design system (CSS vars, utilities, components)
│   └── components/
│       ├── Hero.jsx               # Seção inicial + demo IoT
│       ├── Experience.jsx         # Cards de experiência
│       ├── ProjectsAndAchievements.jsx  # Projetos + conquistas
│       └── HoverTooltip.jsx       # Tooltip acessível
├── public/                        # Assets estáticos (logo, favicon, robo_sumo.jpeg)
├── dist/                          # Build de produção (gerado pelo npm run build)
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm 9+

### Passos

```bash
# 1. Entre na pasta do projeto
cd portfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento (Vite) |
| `npm run build` | Gera build de produção em `dist/` |
| `npm run lint` | Executa oxlint para análise de código |
| `npm run preview` | Visualiza build de produção localmente |

## 🌐 Deploy

O build de produção é gerado na pasta `dist/` após executar `npm run build`. Pode ser hospedado em:

- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor estático (Nginx, Apache, etc.)

## 📫 Contato

- **GitHub:** [github.com/fabioazevedo26](https://github.com/fabioazevedo26)
- **LinkedIn:** [linkedin.com/in/fabio-azevedo-8b7407241](https://www.linkedin.com/in/fabio-azevedo-8b7407241)
- **Email:** fabiorodriges08@gmail.com

---

*Desenvolvido por Fábio Azevedo — Estudante de Engenharia da Computação (Uninorte, 8º período)*# Portifolio_2026
# Portifolio_2026
