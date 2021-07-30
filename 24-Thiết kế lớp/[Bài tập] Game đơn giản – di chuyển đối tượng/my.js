  
class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.x = top;
        this.y = left;
        this.size = size;
        this.speedx = 3;
        this.speedy = 3;

    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    move() {
        this.x += this.speedx;
        this.y += this.speedy;

        this.left = this.x - this.size;
        this.top = this.y - this.size;
        // console.log('ok: ' + this.left);
    }

    checkCollision() {
        if (this.left <= 0 || this.left >= (window.innerWidth - this.size)) this.speedx = -(this.speedx);
        if (this.top <= 0 || this.top >= (window.innerHeight - this.size)) this.speedy = -(this.speedy);
        console.log(this.speedx + " " + this.speedy);
    }
}

window.onload = function() {
    var ball = new Hero('doitruongmy.png', 100, 100, 50);

    function start() {
        ball.move();
        ball.checkCollision();
        document.getElementById('game').innerHTML = ball.getHeroElement();
    }
    setInterval(start, 1);
}