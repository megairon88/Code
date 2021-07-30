let res = document.getElementById('result');
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.circum = function () {
        return 2 * (width + height)
    }
    this.area = function () {
        return width * height
    }
}
Rectangle.prototype.display = function () {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.rect(20, 20, this.width, this.height);
    context.stroke();
    res.innerHTML = `width = ${this.width}, height = ${this.height}`
}
function createRec() {
    let rec = new Rectangle(50,80);
    rec.display();
}
createRec();