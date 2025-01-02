document.addEventListener("DOMContentLoaded", function() {
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
});