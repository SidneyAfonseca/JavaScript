// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color =
          "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")";
      }
    }
  }
};


let balls = [];

while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    "rgb(" +
      random(0, 255) +
      "," +
      random(0, 255) +
      "," +
      random(0, 255) +
      ")",
    size,
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();

  }

  requestAnimationFrame(loop);
}

loop();



//Desafio  troca a forma para retangulo e permite e varia apenas o tom da cor selecionada
/*
// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//Permite selecionar uma cor
const color = "rgb(0, 0, 255)";

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

Rectangle.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height );
}

function Rectangle(x, y, velX, velY, color, width, height) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.update = function () {
  if (this.x + this.width >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.width <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.height >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.height <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

let rectangles = [];
let matchColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
let match = matchColors.exec(color);
let redValue = match[1];
let greenValue = match[2];
let blueValue = match[3];



while (rectangles.length < 25) {
  let size = random(10, 40);
  let incr = random(1, 9);
  let max = Math.max(Math.max(redValue, Math.max(greenValue,blueValue)), 1);
  let step = 255 / (max * 10);

  let ball = new Rectangle(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    "rgb(" +
    redValue * step * incr + "," +
    greenValue * step * incr + "," +
    blueValue * step * incr +
    ")",
    size,
    size
  );
  rectangles.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
    rectangles[i].update();
  }

  requestAnimationFrame(loop);
}

loop();

*/

