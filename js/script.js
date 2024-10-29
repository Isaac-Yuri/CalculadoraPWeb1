const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const selecao = document.querySelector("select#operacao");
const resultado = document.getElementById("res");
const botao = document.getElementById("botao");

botao.addEventListener("click", (e) => {
  fazerOperacao();
});

const operacoes = {
  somar: (n1, n2) => n1 + n2,
  subtrair: (n1, n2) => n1 - n2,
  dividir: (n1, n2) => n2 !== 0 ? n1 / n2: "Não é possível dividir por zero!",
  multiplicar: (n1, n2) => n1 * n2,
};

function calcular(operacao, a, b) {
  return operacao(a, b);
}

function fazerOperacao() {
  let a = parseInt(num1.value);
  let b = parseInt(num2.value);

  if (isNaN(a) || isNaN(b)) {
    alert("Valores não inseridos")
    return
  }

  const { somar, dividir, multiplicar, subtrair } = operacoes;

  switch (selecao.value) {
    case "soma":
      resultado.innerHTML = calcular(somar, a, b);
      break;
    case "divisao":
      resultado.innerHTML = calcular(dividir, a, b);
      break;
    case "subtrair":
      resultado.innerHTML = calcular(subtrair, a, b);
      break;
    case "multiplica":
      resultado.innerHTML = calcular(multiplicar, a, b);
      break;
    case "escolhe":
      alert("Por favor selecione uma operação");
      break;
  }
}
