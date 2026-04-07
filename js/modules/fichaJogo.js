const elementoPersonagem = document.getElementById("ficha-personagem");

if (elementoPersonagem) {
  const personagem = "Candy Nanda";
  const vidas = 3;
  const pontuacao = 0;
  const fase = " O Jogo é dividido em 3 fases";
  const objetivo = "salvar a fábrica dos doces defeituosos";
  const vilao = "Mr. Pumpkin";

  elementoPersonagem.textContent = "👧 Personagem: " + personagem;
  document.getElementById("ficha-vidas").textContent = "❤️ Vidas: " + vidas;
  document.getElementById("ficha-pontuacao").textContent =
    "🍬 Pontuação Inicial: " + pontuacao;
  document.getElementById("ficha-fase").textContent = "🕹️ Fases: " + fase;
  document.getElementById("ficha-objetivo").textContent =
    "🎯 Objetivo do jogo é : " + objetivo;
  document.getElementById("ficha-vilao").textContent = "🎃 Vilão: " + vilao;
}
