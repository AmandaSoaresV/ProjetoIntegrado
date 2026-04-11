# 🍬🍭🍫 Candy Factory Adventure 🍬🍭🍫

![Status](https://img.shields.io/badge/Status-Concluido-2EA043?style=for-the-badge) ![Licenca](https://img.shields.io/badge/Licenca-MIT-0A66C2?style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
<img src="https://img.shields.io/badge/Construct%203-00ADEF?style=for-the-badge" />

Projeto acadêmico desenvolvido no **primeiro módulo** do curso de Engenharia de Software.

## 📖 Sobre o Projeto

O objetivo é apresentar um site de divulgação de um **Jogo** feito na plataforma **Construct 3 .** 

O projeto reúne:

- 🌐 HTML semântico  
- 🎨 CSS modular e responsivo  
- ⚙️ JavaScript moderno (ES6+) com módulos  

---
## 🖥️ Demonstração

 [Acesse o projeto](https://amandasoaresv.github.io/ProjetoIntegrado/)
---

##  🔗 Protótipo no Figma:

[Acessar protótipo](https://www.figma.com/design/JlBMBYEA7nzEcIVqoC1S14/Site-Jogo?node-id=0-1&t=6TtF7UIMoAfH6NNz-1)


## 🚀 Funcionalidades

- Navegação entre múltiplas páginas  
- Layout responsivo  
- 📱 Menu mobile interativo (abre/fecha)  
- 🌙 Modo escuro com persistência (localStorage)  
- 🔞 Verificação de idade no primeiro acesso  
- 📩 Formulário com feedback visual (SweetAlert2)  
- 📢 Alerta de lançamento inteligente (exibição única)  
- 🎮 Ficha técnica dinâmica do jogo 

## 🛠  Tecnologias Utilizadas

| Tecnologia | Descrição |
| --- | --- |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Linguagem de marcação usada para estruturar as páginas do projeto. |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Linguagem de estilos usada para layout, responsividade e aparência visual. |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Linguagem usada para interações e comportamentos dinâmicos da interface. |
| ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF6B81?style=for-the-badge&logo=javascript&logoColor=white) | Biblioteca utilizada para exibir alertas personalizados e interativos. |

## Arquitetura de Estilos

- [x] **css/style.css** : estilos base compartilhados
- [x] **css/header.css** : estilos do cabeçalho
- [x] **css/footer.css** : estilos do rodapé
- [x] **css/home.css, css/sobre.css, css/contato.css, css/perguntas.css, css/avaliacoes.css** : estilos específicos por página
- [x] **css/global/reset.css** : padronização inicial do layout
- [x] **css/global/variaveis.css** : variáveis de design
- [x] **css/global/utils.css** : classes utilitárias

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/AmandaSoaresV/ProjetoIntegrado.git 
```

2. Abra a pasta do projeto no **VS Code.**

3. Execute com a extensão **Live Server.**

4. Como alternativa, abra o arquivo `index.html` diretamente no navegador.

## 📂 Estrutura do Projeto

```bash
.
├── index.html
├── sobre.html
├── contato.html
├── perguntas.html
├── avaliacoes.html
├── jogar.html
├── css/
│   ├── style.css
│   ├── home.css
│   ├── sobre.css
│   ├── contato.css
│   ├── perguntas.css
│   ├── avaliacoes.css
│   ├── jogar.css
│   ├── header.css
│   ├── footer.css
│   └── global/
│       ├── reset.css
│       ├── utils.css
│       ├── variaveis.css
│       └── darkmode.css
├── js/
│   ├── main.js
│   └── modules/
│       ├── menu.js
│       ├── accordion.js
│       ├── darkmode.js
│       ├── formulario.js
│       ├── lancamento.js
│       ├── verificacaoIdade.js
│       └── fichaJogo.js
├── JOGO/
│   ├── index.html
│   ├── appmanifest.json
│   ├── offline.json
│   ├── sw.js
│   ├── scripts/
│   ├── images/
│   ├── icons/
│   └── media/
├── img/
├── LICENSE
└── README.md
```

---

## 👩‍💻 Desenvolvedora

| [Amanda Soares Vieira](https://github.com/amandasoaresv)

---

## Licença

Este projeto está sob a **licença MIT.** Consulte o arquivo `LICENSE` para mais detalhes.