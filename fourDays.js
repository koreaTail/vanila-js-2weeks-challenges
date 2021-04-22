const body = document.querySelector("body");

window.addEventListener("resize", resizeHandler);

function resizeHandler() {

    if (window.innerWidth < 500) {
        body.style.backgroundColor = "#3498db";
    } else if (window.innerWidth < 850) {
        body.style.backgroundColor = "#9b59b6";
    } else {
        body.style.backgroundColor = "#f1c40f";
    }
}

