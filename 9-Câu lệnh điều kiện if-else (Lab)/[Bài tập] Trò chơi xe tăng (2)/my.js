document.getElementById("tank").style["top"] = 19 + "px";
document.getElementById("tank").style["left"] = 38 + "px";

function moveUp() {
    let element = document.getElementById("tank")
    element.style.top = parseInt(element.style.top)  - 5 + "px"
}

function moveDown() {
    let element = document.getElementById("tank")
    element.style.top = parseInt(element.style.top)  + 5 + "px"
}

function moveLeft() {
    let element = document.getElementById("tank")
    element.style.left = parseInt(element.style.left)  - 5 + "px"
}

function moveRight() {
    let element = document.getElementById("tank")
    element.style.left = parseInt(element.style.left)  + 5 + "px"
}
