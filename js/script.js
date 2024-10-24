const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const selecao = document.querySelector("select#operacao");
const resultado = document.getElementById("res");

const operacoes = {
  somar: (n1, n2) => n1 + n2,
  subrair: (n1, n2) => n1 - n2,
  dividir: (n1, n2) => n1 / n2,
  multiplicar: (n1, n2) => n1 * n2,
};

function calcular() {
  switch (selecao.value) {
    case "soma":
      resultado.innerHTML = operacoes.somar(
        Number(num1.value),
        Number(num2.value)
      );
      break;
    case "divisao":
      resultado.innerHTML = operacoes.dividir(
        Number(num1.value),
        Number(num2.value)
      );
      break;
    case "subtrair":
      resultado.innerHTML = operacoes.subrair(
        Number(num1.value),
        Number(num2.value)
      );
      break;
    case "multiplica":
      resultado.innerHTML = operacoes.multiplicar(
        Number(num1.value),
        Number(num2.value)
      );
      break;
    case "escolhe":
      alert("Por favor selecione uma operação");
      break;
  }
}