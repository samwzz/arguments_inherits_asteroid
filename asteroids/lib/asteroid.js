const MovingObject = require("moving_object");
const Util = require("utils");

function Asteroid(options) {
  this.pos = options["pos"];
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
  this.vel = randomVec(10);
  // MovingObject.call(this, );
  Util.inherits(Asteroid, MovingObject);
}

Asteroid.COLOR = function() {
  return "000000";
};

Asteroid.RADIUS = function() {
  return 250;
};

// Return a randomly oriented vector with the given length.
const randomVec = function (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
};
// Scale the length of a vector by the given amount.
const scale = function (vec, m) {
  return [vec[0] * m, vec[1] * m];
};
