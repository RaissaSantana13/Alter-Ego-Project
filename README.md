# Alter Ego Project

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Uma página web interativa e estilizada dedicada ao álbum "Alter Ego" da artista tailandesa Lisa (Blackpink). O projeto utiliza conceitos modernos de design para apresentar as cinco facetas exploradas pela artista no álbum.

---

## Funcionalidades e Destaques

* **Efeito Typewriter Dinâmico:** A mensagem de introdução sobre o álbum é gerada em tempo real com um efeito de digitação suave, implementado via JavaScript puro.
* **Galeria Interativa de Alter Egos:** Apresentação visual das cinco identidades de Lisa:
    * **Roxi:** A faceta rockstar com estética eletrizante.
    * **Sunni:** Uma vibe solar e leve.
    * **Kiki:** Estética retro e aventureira.
    * **Speedi:** Inspirada na velocidade e na moda rápida.
    * **Vixi:** A "vilã" com um visual marcante.
* **Hover Effects Avançados:** Cada cartão de personagem possui animações de escala e contornos coloridos personalizados que refletem a personalidade de cada alter ego.
* **Design Responsivo:** A interface adapta-se a diferentes tamanhos de ecrã, incluindo ajustes específicos para dispositivos móveis no rodapé.
* **Rodapé Fixo:** Uma barra de navegação persistente com gradiente estilizado e botão de acesso direto ao Spotify.

---

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** * Uso de **Flexbox** para o layout da grelha de cartões.
    * Animações de keyframes para o cursor intermitente (|).
    * Transições suaves e filtros de overlay.
* **JavaScript (Vanilla):** Lógica personalizada para o efeito de máquina de escrever com atrasos (delays) aleatórios para simular uma digitação humana.

---

## strutura de Ficheiros

* `index.html`: Estrutura principal com a secção de cartões e overlays.
* `app.js`: Script responsável pela animação de texto `typeWrite`.
* `main.css`: Estilização completa, definições de tipografia (Courier New) e regras de responsividade.
* `assets/`: Pasta contendo as imagens de fundo para cada alter ego.

---

## Aspetos de Design

O projeto adota uma estética "dark mode" com fundo preto e texto em tons de roxo claro (`#c1bddc`), utilizando a fonte monoespaçada `Courier New` para conferir um aspeto técnico e moderno. Cada alter ego é distinguido por uma cor de destaque única em hover:
* **Roxi:** Roxo (`#a333ff`)
* **Sunni:** Amarelo (`#ffcc00`)
* **Kiki:** Turquesa (`#00ffcc`)
* **Speedi:** Laranja/Vermelho (`#ff4400`)
* **Vixi:** Rosa Choque (`#ff0055`)

---

## 👨‍💻 Autor

Projeto desenvolvido como parte de uma exploração de interfaces web criativas e manipulação de DOM.
