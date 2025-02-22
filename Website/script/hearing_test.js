document.addEventListener("DOMContentLoaded", function() {
    const sound = {
        hearing_test: new Audio("sounds/hearing_test.mp3"),
    };

    // Animacja przesuwania się suwaka
    let line = document.getElementById("line");
    let box = document.getElementById("box");
    let position = 0;
    let animation;

    function startAnimation() {
        line.style.background = "#cf4040"
        stopAnimation();
        animation = setInterval(() => {
            if (position >= 1024) {
                stopAnimation();
            } else {
                position += 1;
            }
            line.style.left = position + "px";
            box.style.background = `linear-gradient(to right, #cf4040 ${position}px, #ddd ${position}px)`
        }, 60);
    }

    function stopAnimation() {
        clearInterval(animation);
    }

    function restartAnimation() {
        stopAnimation();
        position = 0;
        line.style.background = "black";
        line.style.left = "0px";
        box.style.background = "#ddd"
    }


    // Deklaracja audio
    const audioStart = document.getElementById("hearing-test-start");
    const audioStop = document.getElementById("hearing-test-stop");
    const audioRestart = document.getElementById("hearing-test-restart");

    // Deklaracja liczników
    const resultAge = document.getElementById("js-text-age");
    const resultHz = document.getElementById("js-text-hz");
    let startAge = 99, i = 1, currentAge, intervalAge; 
    let startHz = 550, currentHz = startHz, intervalHz;

    function countingAge(stop) {
        if (stop) {
            clearInterval(intervalAge);
            resultAge.textContent = currentAge.toFixed(0);
            return;
        }
        
        // Zapobiega wielokrotnemu uruchomieniu interwału
        if (intervalAge) return;

        intervalAge = setInterval(() => {
            currentAge = startAge - (i * 1.65);
            resultAge.textContent = currentAge.toFixed(0);
            resultAge.style.color = "white"

            if (currentAge <= 0) {
                clearInterval(intervalAge);
                resultAge.textContent = "0"
                resultAge.style.color = "white"
            }

            i++
        }, 1000);
    };

    function countingHz(stop) {
        if (stop) {
            clearInterval(intervalHz);
            resultHz.textContent = currentHz.toFixed(0);
            return;
        }

        // Zapobiega wielokrotnemu uruchomieniu interwału
        if (intervalHz) return;

        intervalHz = setInterval(() => {
            currentHz = currentHz + 3.350;
            resultHz.textContent = currentHz.toFixed(0);
            resultHz.style.color = "white"
       
            if (currentHz >= 20950) {
                clearInterval(intervalHz);
                resultHz.textContent = "20950"
                resultHz.style.color = "white"
            }
        }, 10);
    };

    audioStart.addEventListener("click", function() {
        // Odtwarzanie audio w tle podczas aktywnej animacji
        sound.hearing_test.play();

        // Wyświetlanie informacji o wieku oraz hz
        countingAge(false);
        countingHz(false);
    });    

    audioStop.addEventListener("click", function() {
        // Odtwarzanie audio w tle podczas aktywnej animacji
        sound.hearing_test.pause();

        // Wyświetlanie informacji o wieku oraz hz
        countingAge(true);
        countingHz(true);
    });
    
    audioRestart.addEventListener("click", function() {
        // Odtwarzanie audio w tle podczas aktywnej animacji
        sound.hearing_test.currentTime = 0;
        sound.hearing_test.pause();

        // Wyświetlanie informacji o wieku oraz hz
        clearInterval(intervalAge);
        clearInterval(intervalHz);
        intervalAge = null;
        intervalHz = null;

        currentAge = startAge;
        currentHz = startHz;
        i = 1;

        resultAge.textContent = "99"
        resultAge.style.color = "white"

        resultHz.textContent = "550"
        resultHz.style.color = "white"
    });

    document.querySelector("button[data-action='start']").addEventListener("click", startAnimation);
    document.querySelector("button[data-action='stop']").addEventListener("click", stopAnimation);
    document.querySelector("button[data-action='restart']").addEventListener("click", restartAnimation);
});
