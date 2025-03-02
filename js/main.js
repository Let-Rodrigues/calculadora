import { tratarEntrada } from "./operacoes.js";
import { atualizarVisor, adicionarEfeitoClique } from "./ui.js";

const visor = document.querySelector(".visor");
let expressao = "";

document.querySelectorAll(".numero, .operacao").forEach((botao) => {
  botao.addEventListener("click", () => {
    expressao = tratarEntrada(botao.innerText, expressao);
    atualizarVisor(visor, expressao);
  });
});

document.addEventListener("keydown", (event) => {
  const tecla = event.key;
  if (
    /[\d\+\-\*\/\.\=]/.test(tecla) ||
    tecla === "Enter" ||
    tecla === "Backspace" ||
    tecla.toLowerCase() === "c"
  ) {
    expressao = tratarEntrada(tecla, expressao);
    atualizarVisor(visor, expressao);
  }
});

adicionarEfeitoClique();
