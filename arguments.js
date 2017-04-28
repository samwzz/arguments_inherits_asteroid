let sum = function() {
  let arr = Array.prototype.slice.call(arguments);
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

// console.log(sum(1,2,3,4));

const sum2 = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// console.log(sum(1,2,3,4,5));

// Function.prototype.myBind = function(context) {
//   return () => this.apply(context);
// };
//
// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }
//
// const turnOn = function() {
//    console.log("Turning on " + this.name);
// };
//
// const lamp = new Lamp();
//
// turnOn(); // should not work the way we want it to
//
// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

// Function.prototype.myBind = function(context, ...args) {
//   return (...callArgs) => this.apply(context, args.concat(callArgs));
// };

Function.prototype.myBind = function(context) {
  let bindArgs = Array.prototype.slice.call(arguments).slice(1);
  let that = this;
  return function() {
    let callArgs = Array.prototype.slice.call(arguments);
    that.apply(context, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.reduce((a, b) => a + b);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// let steph = curriedSum(4);
// console.log(steph(1)(2)(3)(4));

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  function innerCurry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return innerCurry;
    }
  }
  return innerCurry;
};

// Function.prototype.curry = function(numArgs) {
//   let args = [];
//   let that = this;
//   function innerCurry(arg) {
//     args.push(arg);
//     if (args.length === numArgs) {
//       return that.apply(null, args);
//     } else {
//       return innerCurry;
//     }
//   }
//   return innerCurry;
// };

function sumAll(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sumAll.curry(4)(4)(5)(12)(1));
