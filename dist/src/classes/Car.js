'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Car = undefined;

var _vehicle = require('./vehicle.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = exports.Car = function (_Vehicle) {
    _inherits(Car, _Vehicle);

    function Car(license, model, latLong) {
        _classCallCheck(this, Car);

        var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, license, model, latLong));

        _this.miles = null;
        _this.make = null;
        return _this;
    }

    return Car;
}(_vehicle.Vehicle);
//# sourceMappingURL=car.js.map