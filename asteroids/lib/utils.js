const Util = {
    inherits (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.protoype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  }
};

module.exports = Util;
