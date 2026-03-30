export function initAcordion() {
  const accordionLista = document.querySelectorAll(".js-lista-perguntas dt");

  if (accordionLista.length) {
    accordionLista[0].classList.add("ativo");
    accordionLista[0].nextElementSibling.classList.add("ativo");
  }

  function accordionAtivo() {
    this.classList.toggle("ativo");
    if (this.nextElementSibling) {
      this.nextElementSibling.classList.toggle("ativo");
    }
  }

  accordionLista.forEach((item) => {
    item.addEventListener("click", accordionAtivo);
  });
}