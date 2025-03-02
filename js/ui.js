export function atualizarVisor(visor, expressao) {
  visor.innerText = expressao || "0";
}

export function adicionarEfeitoClique() {
  document.querySelectorAll("button").forEach((botao) => {
    botao.addEventListener(
      "mousedown",
      () => (botao.style.transform = "scale(0.9)")
    );
    botao.addEventListener(
      "mouseup",
      () => (botao.style.transform = "scale(1)")
    );
    botao.addEventListener(
      "mouseleave",
      () => (botao.style.transform = "scale(1)")
    );
  });
}
