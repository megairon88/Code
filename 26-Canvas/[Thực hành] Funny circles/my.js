let Mycircles = function(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
}
function getRandomHex() {
    return Math.floor(Math.random()*255)
}
function getColorRandom() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb("+red+","+blue+","+green+")";
}
function createCircle() {
    let context = document.getElementById("myCanvas").getContext("2d")
    let radius = Math.floor(Math.random()*88)
    let color = getColorRandom()
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    let circles = new Mycircles(x, y, radius)
    context.beginPath()
    context.arc(circles.x, circles.y, circles.radius, 0, 2*Math.PI)
    context.fillStyle = color
    context.fill()
}
function createMultyCircle() {
    for(let i = 0; i < 30; i++) {
        createCircle()
    }
}
createMultyCircle()