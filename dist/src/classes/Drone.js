"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Drone = undefined;

var _Vehicle2 = require("./Vehicle.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drone = exports.Drone = function (_Vehicle) {
    _inherits(Drone, _Vehicle);

    function Drone(license, model, latLong) {
        _classCallCheck(this, Drone);

        var _this = _possibleConstructorReturn(this, (Drone.__proto__ || Object.getPrototypeOf(Drone)).call(this, license, model, latLong));

        _this.airTimeHours = null;
        _this.base = null;
        return _this;
    }

    return Drone;
}(_Vehicle2.Vehicle);
//# sourceMappingURL=Drone.js.map