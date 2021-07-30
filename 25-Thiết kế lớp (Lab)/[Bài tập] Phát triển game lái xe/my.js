let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
let isGameOver = false;
let dem = 0;
class Car {
    constructor(imageSrc, top, left, speed) {
        this.imageSrc = imageSrc;
        this.top = top;
        this.left = left;
        this.speed = speed;
    }
        getCarElement(){
            return '<img width="' + 50 + '"' +
                ' height="' + 50 + '"' +
                ' src="' + this.imageSrc + '"' +
                ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
        }

        moveTop(){
            this.top -= this.speed;
        }
        moveDown(){
            this.top +=this.speed;
        }
        moveLeft(){
            this.left -= this.speed;
        }
        moveRight(){
            this.left += this.speed;
        }

}
class Box {
    constructor(imageSrc, top, left) {
        this.imageSrc = imageSrc;
        this.top = top;
        this.left = left;
    }

    getBoxElement() {
        return '<img width="' + 100 + '"' +
            ' height="' + 100 + '"' +
            ' src="' + this.imageSrc + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
}
class Coin {
    constructor(imageSrc, top, left) {
        this.imageSrc = imageSrc;
        this.top = top;
        this.left = left;
    }

    getCoinElement() {
        return '<img width="' + 100 + '"' +
            ' height="' + 100 + '"' +
            ' src="' + this.imageSrc + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
}
function displayElements(){
    document.getElementById("game").innerHTML = car.getCarElement();
    document.getElementById("box1").innerHTML = box1.getBoxElement();
    document.getElementById("box2").innerHTML = box2.getBoxElement();
    document.getElementById("box3").innerHTML = box3.getBoxElement();
    document.getElementById("coin1").innerHTML = coin1.getCoinElement();
    document.getElementById("coin2").innerHTML = coin2.getCoinElement();
}
function eatCoin(){

}
let direction ="";
let car = new Car("car.png", 50, 50, 50);
let box1 = new Box("box.gif",120,420);
let box2 = new Box("box.gif",200,150);
let box3 = new Box("box.gif",300,700);
let coin1 = new Coin("coin.png",100,700);
let coin2 = new Coin("coin.png",350,550);
function move(){
    if(!isGameOver) {
        switch (direction) {
            case "right":
                car.moveRight();
                break;
            case "left":
                car.moveLeft();
                break;
            case "down":
                car.moveDown();
                break;
            case "up":
                car.moveTop();
                break;
        }
        displayElements();
        if(((car.left+50>=coin1.left&&car.left<=coin1.left+100)&&car.top+50>=coin1.top&&car.top+50<=coin1.top+1000)
            ||((car.top+50>=coin1.top&&car.top<=coin1.top+100)&&car.left+50>=coin1.left&&car.left+50<=coin1.left+100)){
            document.getElementById("score").innerText = "Score: "+dem++ ;
        }
        if(((car.left+50>=box1.left&&car.left<=box1.left+100)&&car.top+50>=box1.top&&car.top+50<=box1.top+100)
            ||((car.top+50>=box1.top&&car.top<=box1.top+100)&&car.left+50>=box1.left&&car.left+50<=box1.left+100)){
            isGameOver = true;
        }
        if(car.left<=0||car.left>canvas.width-50||car.top<=0||car.top > canvas.height-50){
            isGameOver = true;
        }
        setTimeout(move, 500);
    } else {
        alert("Game over!!!");
    }
}
function init() {
    window.addEventListener("keydown",start);
    move();
}
function start(evt) {
    switch (evt.keyCode) {
        case 37:
            direction = "left";
            car.imageSrc="carL.png";
            break;
        case 38:
            direction = "up";
            car.imageSrc="car.png";
            break;
        case 39:
            direction ="right";
            car.imageSrc="carR.png";
            break;
        case 40:
            direction = "down";
            car.imageSrc="carD.png";
            break;
    }
}
