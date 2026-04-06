if (localStorage.getItem("idadeVerificada") !== "true") {
  alert(
    "Bem-vindo ao nosso site! Antes de continuar, precisamos verificar sua idade.",
  );
  const idade = prompt("Por favor, insira sua idade:");
  if (idade !== null) {
    const idadeNum = parseInt(idade);
    if (!isNaN(idadeNum)) {
      if (idadeNum >= 18) {
        alert(
          "Acesso permitido! Você pode explorar nosso site e jogar nosso incrível jogo!",
        );
        localStorage.setItem("idadeVerificada", "true");
        const estiloGlobal = document.createElement("style");
        estiloGlobal.innerHTML = `
          main, footer {
             filter: blur(0px);
          }
        `;
        document.head.appendChild(estiloGlobal);
      } else {
        alert(
          "Acesso negado! Desculpe, você precisa ter pelo menos 18 anos para acessar este site.",
        );
      }
    } else {
      alert(
        "Entrada inválida! Por favor, insira um número válido para a idade.",
      );
    }
  }

} else {
  const estiloGlobal = document.createElement("style");
  estiloGlobal.innerHTML = `
    main, footer {
       filter: blur(0px);
    }
  `;
  document.head.appendChild(estiloGlobal);
}