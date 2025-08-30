// Seleciona o input da senha e a barra
const senhaInput = document.querySelector('input[type="password"]');
const barraForca = document.getElementById('barra-forca');

senhaInput.addEventListener('input', function() {
    const valor = senhaInput.value;
    let forca = 0;

    // Critérios de força
    if (valor.length >= 6) forca++;
    if (/[A-Z]/.test(valor)) forca++;
    if (/[0-9]/.test(valor)) forca++;
    if (/[\W]/.test(valor)) forca++;

    // Atualiza a barra
    switch(forca) {
        case 0:
            barraForca.style.width = "0%";
            barraForca.style.background = "red";
            break;
        case 1:
            barraForca.style.width = "25%";
            barraForca.style.background = "red";
            break;
        case 2:
            barraForca.style.width = "50%";
            barraForca.style.background = "orange";
            break;
        case 3:
            barraForca.style.width = "75%";
            barraForca.style.background = "yellowgreen";
            break;
        case 4:
            barraForca.style.width = "100%";
            barraForca.style.background = "green";
            break;
    }
});
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});
