function atualizarNumero(valor) {
  document.getElementById("numero-cartao").innerText = valor || "#### #### #### ####";
}

function atualizarNome(valor) {
  document.getElementById("nome-cartao").innerText = valor || "NOME NO CARTÃO";
}

function atualizarValidade(valor) {
  document.getElementById("validade-cartao").innerText = valor || "MM/AA";
}

function atualizarCVV(valor) {
  document.getElementById("cvv-cartao").innerText = valor || "###";
}

function virarCartao(tras) {
  const cartao = document.getElementById("cartao");
  cartao.style.transform = tras ? "rotateY(180deg)" : "rotateY(0deg)";
}
