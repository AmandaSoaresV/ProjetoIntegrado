import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm";
const formulario = document.getElementById("formulario");

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    Swal.fire({
      title: "Formulário Enviado!",
      text:
        "Obrigada por entrar em contato, " +
        nome +
        "! Em breve responderemos sua mensagem.",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        popup: "minha-fonte",
        confirmButton: "meu-botao",
      },
    });
    formulario.reset();
  });
}