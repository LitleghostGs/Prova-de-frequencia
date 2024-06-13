// Botão "Volte ao Topo"
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let index = 0;

    function showNextSlide() {
        index++;
        if (index >= slider.children.length) {
            index = 0;
        }
        slider.style.transform = `translateX(${-index * 10}%)`; // Adjust to move one slide at a time
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});