document.addEventListener("DOMContentLoaded", () => {
  const visor = document.querySelector(".visor");
  let expressao = "";

  function atualizarVisor() {
    visor.innerText = expressao || "0";
  }

  function tratarEntrada(valor) {
    if (valor === "C") {
      expressao = "";
    } else if (valor === "=") {
      try {
        expressao = eval(
          expressao.replace("×", "*").replace("÷", "/")
        ).toString();
      } catch {
        expressao = "Erro";
      }
    } else {
      // Evita múltiplos operadores consecutivos
      if (/[+\-*/.]/.test(valor) && /[+\-*/.]$/.test(expressao)) return;
      expressao += valor;
    }

    atualizarVisor();
  }

  document.querySelectorAll(".botao, .operacao").forEach((botao) => {
    botao.addEventListener("click", () => tratarEntrada(botao.innerText));
  });

  // Adicionando suporte ao teclado
  document.addEventListener("keydown", (event) => {
    const tecla = event.key;
    if (/[\d\+\-\*\/\.\=]/.test(tecla)) {
      tratarEntrada(tecla);
    } else if (tecla === "Enter") {
      tratarEntrada("=");
    } else if (tecla === "Backspace") {
      expressao = expressao.slice(0, -1);
      atualizarVisor();
    } else if (tecla.toLowerCase() === "c") {
      expressao = "";
      atualizarVisor();
    }
  });

  // Efeito de clique nos botões
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

  atualizarVisor();
});
