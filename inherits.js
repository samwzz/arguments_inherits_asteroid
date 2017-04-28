Function.prototype.inherits = function(parentClass) {
  // this.inherits(parentClass)
  function Surrogate() {}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function(parentClass) {
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
};

function Person(name) {
  this.name = name;
}

Person.prototype.eats = function(food) {
  console.log(`${this.name} eats ${food}.`);
};

function Bro(name) {
  Person.call(this, name);
}

Bro.inherits(Person);

const Joe = new Bro("Joe");

console.log(Joe.eats("cake"));
