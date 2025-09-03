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

// script.js
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const moedas = [];
for (let i = 0; i < 50; i++) {
  moedas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 3,
    s: Math.random() * 2 + 1
  });
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "gold";
  moedas.forEach(m => {
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
    ctx.fill();
    m.y += m.s;
    if (m.y > canvas.height) m.y = -10;
  });
  requestAnimationFrame(animar);
}
animar();
