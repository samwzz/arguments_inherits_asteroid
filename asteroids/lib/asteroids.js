const Asteroid = require("asteroid");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("myCanvas");
  const ctx = canvasEl.getContext("2d");

  const asteroid = new Asteroid({pos: [100, 100]});
  asteroid.draw(ctx);
});
