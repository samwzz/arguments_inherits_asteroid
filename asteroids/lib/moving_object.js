const canvasEl = document.getElementById("myCanvas");
const ctx = canvasEl.getContext("2d");

function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

MovingObject.prototype.draw = function(context) {
  let c = new Circle(this.pos[0], this.pos[1], this.radius, this.color);
  c.render(context);
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

function Circle(centerX, centerY, radius, color) {
  this.centerX = centerX;
  this.centerY = centerY;
  this.radius = radius;
  this.color = color;
}

Circle.prototype.render = function(context) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

module.exports = MovingObject;
