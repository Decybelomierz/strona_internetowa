document.addEventListener("DOMContentLoaded", function() {
    // Sekcja nagłówkowa
    const menu = document.querySelector ('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    const oneLink = document.querySelectorAll('.navbar__item');
    const images = document.querySelectorAll('#image');
    const imageMAT = document.querySelectorAll('#image-mat');

    images.forEach(img => {
        const orginalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseenter', () => {
            img.src = hoverSrc
        });

        img.addEventListener('mouseleave', () => {
            img.src = orginalSrc
        });
    });
    
    imageMAT.forEach(img => {
        const orginalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseenter', () => {
            img.src = hoverSrc
        });

        img.addEventListener('mouseleave', () => {
            img.src = orginalSrc
        });
    });
    
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    
    const form = document.getElementById("noise-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Zebranie danych i konwert na int (10 to system)
        const noiseLevel = parseInt(document.getElementById("noise-level").value, 10);

        if (noiseLevel < 85) {
            resultDiv.textContent = "Bezpieczny poziom dźwięku dla słuchu"
            resultDiv.style.color = "green"
            return;
        }

        // Zasada obliczeń: dla 85 dB czas bezpieczny to 8h, każdy dodatkowy 3dB skraca czas o połowe
        let safeTime = 8; // W godzinach
        const decibelsAboveThreshold = noiseLevel - 85;

        if (decibelsAboveThreshold > 0) {
            safeTime /= Math.pow(2, decibelsAboveThreshold / 3); // Skracanie czasu przy wzroście dB
        }

        // Konwersja na godziny i minuty
        const hours = Math.floor(safeTime);
        const minutes = Math.round((safeTime - hours) * 60);
        if (safeTime < 1 / 60 / 60) {
            resultDiv.textContent = 'Niebezpieczny poziom hałasu! Wymagana natychmiastowa ochrona słuchu.'
            resultDiv.style.color = "red";
        } else {
            resultDiv.textContent = `Maksymalny czas ekspozycji: ${hours} godzin i ${minutes} minut.`
            resultDiv.style.color = "green";
        }
    });

    // Pole wyboru na inpucie
    const noiseInput = document.getElementById("noise-level");
    const dropdown = document.getElementById("noise-options");

    // Pokazuje lub ukrywa listę przy kliknięciu w pole wejściowe
    noiseInput.addEventListener("focus", function() {
        dropdown.classList.remove("hidden__dropdown");
    });

    // Ukrywa listę przy kliknięciu poza nią
    document.addEventListener("click", function(e) {
        if (!e.target.closest(".input__container")) {
            dropdown.classList.add("hidden__dropdown");
        }
    });
    
    // Obsługa wyboru elementu z listy
    document.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            const value = e.target.getAttribute("data-value");
            noiseInput.value = value;
            dropdown.classList.add("hidden__dropdown");
        }
    });
});