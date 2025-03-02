export function tratarEntrada(valor, expressao) {
  if (valor === "C") {
    return "";
  } else if (valor === "=" || valor === "Enter") {
    try {
      let resultado = eval(expressao.replace("×", "*").replace("÷", "/"));
      if (!isFinite(resultado)) throw new Error("Erro");
      return resultado.toString();
    } catch {
      return "Erro";
    }
  } else if (valor === "Backspace") {
    return expressao.slice(0, -1);
  } else {
    if (/[+\-*/.]/.test(valor) && /[+\-*/.]$/.test(expressao)) return expressao;
    return expressao + valor;
  }
}
