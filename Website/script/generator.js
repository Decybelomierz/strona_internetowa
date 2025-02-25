document.addEventListener("DOMContentLoaded", function() {
    // Sekcja nagłówkowa
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    const oneLink = document.querySelectorAll('.navbar__item');
    
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    // Ładowanie dźwięków
    const sounds = {
        forest: new Audio("sounds/forest.mp3"),
        rain: new Audio("sounds/rain.mp3"),
        fire: new Audio("sounds/fire.mp3")
    };

    // Funkcja zapętlania dźwięków
    Object.values(sounds).forEach(sound => {
        sound.loop = true;
    });

    // Elementy kontrolne 
    const forestSlider = document.getElementById("forest-sound");
    const rainSlider = document.getElementById("rain-sound");
    const fireSlider = document.getElementById("fire-sound");
    const stopAllButton = document.getElementById("stop-all");

    // Obsługa suwaków głośności
    forestSlider.addEventListener("input", function() {
        sounds.forest.volume = parseFloat(this.value);
        if (this.value > 0) {
            sounds.forest.play();
        } else {
            sounds.forest.pause();
        }        
    });

    rainSlider.addEventListener("input", function() {
        sounds.rain.volume = parseFloat(this.value);
        if (this.value > 0) {
            sounds.rain.play();
        } else {
            sounds.rain.pause();
        }        
    });

    fireSlider.addEventListener("input", function() {
        sounds.fire.volume = parseFloat(this.value);
        if (this.value > 0) {
            sounds.fire.play();
        } else {
            sounds.fire.pause();
        }        
    });

    // Obsługa przycisku zatrzymania 
    stopAllButton.addEventListener("click", function() {
        Object.values(sounds).forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });

        // Resetowanie suwaków
        forestSlider.value = 0;
        rainSlider.value = 0;
        fireSlider.value = 0;
    });
});