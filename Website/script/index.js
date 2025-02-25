document.addEventListener("DOMContentLoaded", function() {
    // Sekcja nagłówkowa
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    const oneLink = document.querySelectorAll('.navbar__item');

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    // Zbiera wszystkie takie znaczniki (klasy,id,nav,section,itd)
    oneLink.forEach(item => {
        item.addEventListener('click', function() {
            menuLinks.classList.remove('active');
            menu.classList.remove('is-active');
        });
    });



    // Sekcja tekstu o nas
    // const toggleButton = document.querySelector('.text__toogle-button');
    // const textContent = document.querySelector(".content");

    // toggleButton.addEventListener("click", function() {
    //     textContent.classList.toggle("expanded");

    //     // Zmień tekst na przycisku w zależności od stanu
    //     if (textContent.classList.contains("expanded")) {
    //         toggleButton.textContent = "Pokaż mniej"
    //     } else {
    //         toggleButton.textContent = "Pokaż więcej"
    //     }
    // })

});