import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm";

// verifica se está na index.html
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
  const alertaJaMostrado = localStorage.getItem("alertaMostrado");

  if (!alertaJaMostrado) {
  const anoLancamento = 2026;
  const anoAtual = new Date().getFullYear();

    if (anoAtual === anoLancamento) {
      Swal.fire({
        title: "O grande lançamento acabou de acontecer!",
        text: "Seu jogo já está disponível!",
        icon: "success",
        confirmButtonText: "Saiba mais",
        customClass: {
          popup: "minha-fonte",
          confirmButton: "meu-botao",
        },
      });
    } else if (anoAtual < anoLancamento) {
      Swal.fire({
        title: "Em breve o jogo será lançado!",
        text: `Faltam ${anoLancamento - anoAtual} ano(s)!`,
        icon: "info",
        customClass: {
          popup: "minha-fonte",
        },
      });
    } else {
      Swal.fire({
        title: "📀 Já foi lançado!",
        text: "Confira o jogo agora!",
        icon: "warning",
        customClass: {
          popup: "minha-fonte",
        },
      });
    }

    localStorage.setItem("alertaMostrado", "true");
  }
}