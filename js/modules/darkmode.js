let darkmode = localStorage.getItem("darkmode");
const tema = document.getElementById("tema");

const ativarDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "ativo");
};

const desativarDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "ativo") {
  ativarDarkmode();
}

tema.addEventListener("click", () => {
  darkmode !== "ativo" ? ativarDarkmode() : desativarDarkmode();
  darkmode = localStorage.getItem("darkmode");
});
