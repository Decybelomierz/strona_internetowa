document.addEventListener("DOMContentLoaded", function() {
    const sound = {
        hearing_test: new Audio("sounds/hearing_test.mp3"),
    };

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

    const audioStart = document.getElementById("hearing-test-start");
    const audioStop = document.getElementById("hearing-test-stop");
    const audioRestart = document.getElementById("hearing-test-restart");

    audioStart.addEventListener("click", function() {
        sound.hearing_test.play();
    });

    audioStop.addEventListener("click", function() {
        sound.hearing_test.pause();
    });

    audioRestart.addEventListener("click", function() {
        sound.hearing_test.currentTime = 0;
        sound.hearing_test.pause();
    });

    document.querySelector("button[data-action='start']").addEventListener("click", startAnimation);
    document.querySelector("button[data-action='stop']").addEventListener("click", stopAnimation);
    document.querySelector("button[data-action='restart']").addEventListener("click", restartAnimation);
});
