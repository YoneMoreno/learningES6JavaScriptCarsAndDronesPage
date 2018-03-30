"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function Vehicle() {
  _classCallCheck(this, Vehicle);
};

var Drone = function (_Vehicle) {
  _inherits(Drone, _Vehicle);

  function Drone() {
    _classCallCheck(this, Drone);

    return _possibleConstructorReturn(this, (Drone.__proto__ || Object.getPrototypeOf(Drone)).apply(this, arguments));
  }

  return Drone;
}(Vehicle);

var Car = function (_Vehicle2) {
  _inherits(Car, _Vehicle2);

  function Car() {
    _classCallCheck(this, Car);

    return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).apply(this, arguments));
  }

  return Car;
}(Vehicle);

var c = new Car();
console.log(c instanceof Car);
console.log(c instanceof Drone);
console.log(c instanceof Vehicle);
//# sourceMappingURL=app.js.map