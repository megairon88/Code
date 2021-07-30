let gameContext = document.getElementById("game").getContext("2d");

    let carYPosition = 20;
    let carXPosition = 20;
    let brickYPosition = 20;
    let brickXPosition = 20;

    let carWidth = 150;
    let carHeight = 100;
    let brickWidth = 150;
    let brickHeight = 100;

    let gameTopPosition = 0;
    let gameBottomPosition = 600;
    let gameLeftPosition = -200;
    let gameRightPosition = 950;
    let timeLoop = 10;

    function drawCar() {
      gameContext.beginPath();
      gameContext.fillStyle='#fa4b2a';
      gameContext.fillRect(carXPosition, carYPosition, carWidth, carHeight);
    }
    function drawBrick() {
      gameContext.beginPath();
      gameContext.fillStyle='#00ccff';
      gameContext.fillRect(brickYPosition, brickXPosition, brickWidth, brickHeight);
    }

    // khoi mau do chuyen don len xuong
    let yDistance = 1;
    function moveCar() {
      gameContext.clearRect(carXPosition, carYPosition, carWidth, carHeight);

      let isTouchTop = carYPosition < gameTopPosition;
      let isTouchBottom = carYPosition + carHeight > gameBottomPosition;
      if (isTouchTop || isTouchBottom) {
        yDistance = -yDistance;
      }

      carYPosition += yDistance;
      drawCar();
    }
    setInterval(moveCar, timeLoop);

    // khoi mau xanh di chuyen trai phai
    let xDistance = 1;
    function moveBrick() {
      gameContext.clearRect(brickYPosition, brickXPosition, brickWidth, brickHeight);

      let isTouchLeft = brickYPosition < gameLeftPosition;
      let isTouchRight = brickYPosition + brickHeight > gameRightPosition;
      if (isTouchLeft || isTouchRight) {
        xDistance = -xDistance;
      }

      brickYPosition += xDistance;
      drawBrick();
    }
    setInterval(moveBrick, timeLoop);