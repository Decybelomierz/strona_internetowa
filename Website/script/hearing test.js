document.addEventListener("DOMContentLoaded", function() {
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
        }, 10);
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

    document.querySelector("button[data-action='start']").addEventListener("click", startAnimation);
    document.querySelector("button[data-action='stop']").addEventListener("click", stopAnimation);
    document.querySelector("button[data-action='restart']").addEventListener("click", restartAnimation);
});
