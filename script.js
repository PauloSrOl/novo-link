let slideIndex = 0;
let slides = document.getElementsByClassName("card");

// Função para mover o slide manualmente
function moveSlide(n) {
    clearTimeout(autoSlideTimeout);  // Limpa o temporizador automático ao clicar manualmente
    showSlides(slideIndex += n);
}

// Função para mostrar os slides com deslizamento
function showSlides(n) {
    let totalSlides = slides.length;
    if (n >= totalSlides) { slideIndex = 1; }
    if (n < 0) { slideIndex = totalSlides - 2; }

    let offset = -slideIndex * 100; // Calcula a posição do slide
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Move o container de slides

    // Reinicia o temporizador automático após a transição
    autoSlideTimeout = setTimeout(autoSlide, 8000); // Pausa de 4 segundos antes de deslizar novamente
}

// Função para trocar os slides automaticamente
let autoSlideTimeout;
function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Inicia o autoSlide quando a página carrega
window.onload = function() {
    autoSlideTimeout = setTimeout(autoSlide, 8000); // Pausa de 4 segundos antes de iniciar o deslizamento automático
}