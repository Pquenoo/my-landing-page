// Atualização do cartão físico
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

// Canvas de moedas
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

// Seletores
const cardInput = document.getElementById("cardNumber");
const brandDisplay = document.getElementById("cardBrand");
const cardLogo = document.getElementById("cardLogo");         // logo do cartão físico
const cardBrandInput = document.getElementById("cardBrandInput"); // logo dentro do input

// Função para detectar bandeira
function detectCardBrand(number) {
  number = number.replace(/\D/g, "");
  if (/^4/.test(number)) return "Visa";
  if (/^5[1-5]/.test(number)) return "MasterCard";
  if (/^3[47]/.test(number)) return "American Express";
  if (/^(636368|438935|504175|451416|509048)/.test(number)) return "Elo";
  return "---";
}

// Mapeamento de logos
const brandLogos = {
  "Visa": "img/master.png",
  "MasterCard": "img/master.png",
  "American Express": "img/amex.png",
  "Elo": "img/elo.png",
  "---": "img/cartão-logo.png" // logo padrão
};

// Evento de input
cardInput.addEventListener("input", () => {
  let value = cardInput.value.replace(/\D/g, "");

  // Formatar em blocos de 4 dígitos
  cardInput.value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

  // Detectar bandeira
  const brand = detectCardBrand(value);
  brandDisplay.textContent = "Bandeira: " + brand;

  // Atualizar logos
  cardLogo.src = brandLogos[brand];        // cartão físico
  cardBrandInput.src = brandLogos[brand];  // dentro do input
});
