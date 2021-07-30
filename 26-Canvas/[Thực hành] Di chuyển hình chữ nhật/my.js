let canvas = document.getElementById("game");
if (canvas.getContext) {
  let ctx = canvas.getContext('2d');
  function drawCar() {
    ctx.beginPath();
    ctx.fillStyle='#fa4b2a';
    ctx.fillRect(carXPosition, carYPosition, carWidth, carHeight);
  }
}

//let up = setInterval(moveCarUp, 100); //100ms
//function moveCarUp() {
  //if(canvas.getContext) {
    //let ctx = canvas.getContext('2d');
    //ctx.clearRect(20, carYPosition, 150, 100);
    
    //if(carYPosition > 0) {
      //carYPosition--;
    //}

    //drawCar();
  //}
//}

//let down = setInterval(moveCarDown, 100);
//function moveCarDown() {
  //if(canvas.getContext) {
    //let ctx = canvas.getContext('2d');
    //ctx.clearRect(20, carYPosition, 150, 100);

  //if(carYPosition + 100 < 600) {
  	//carYPosition++;
  //}

  //drawCar()
  //}
//}

let carYPosition = 20;
let carXPosition = 20;
let carWidth = 150;
let carHeight = 100;
let gameTopPosition = 0;
let gameBottomPosition = 600;
let timeLoop = 10;


let yDistance = 1;
function moveCar() {
  if(canvas.getContext) {
    let ctx = canvas.getContext('2d');
	  ctx.clearRect(carXPosition, carYPosition, carWidth, carHeight);
  }

  let isTouchTop = carYPosition < gameTopPosition;
  let isTouchBottom = carYPosition + carHeight > gameBottomPosition;
  if (isTouchTop || isTouchBottom) {
  	yDistance = -yDistance;
  }

  carYPosition += yDistance;
  drawCar();
}
setInterval(moveCar, timeLoop);