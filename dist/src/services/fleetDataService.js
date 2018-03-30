"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FleetDataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Car = require("../classes/Car.js");

var _Drone = require("../classes/Drone.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FleetDataService = exports.FleetDataService = function () {
    function FleetDataService() {
        _classCallCheck(this, FleetDataService);

        this.cars = [];
        this.drones = [];
    }

    _createClass(FleetDataService, [{
        key: "loadData",
        value: function loadData(fleet) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = fleet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var data = _step.value;

                    switch (data.type) {
                        case 'car':
                            var car = this.loadCar(data);
                            this.cars.push(car);
                            break;
                        case 'drone':
                            var drone = this.loadDrone(data);
                            this.drones.push(drone);
                            break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "loadCar",
        value: function loadCar(car) {
            var c = new _Car.Car(car.license, car.model, car.latLong);
            c.make = car.make;
            c.miles = car.miles;
            return c;
        }
    }, {
        key: "loadDrone",
        value: function loadDrone(drone) {
            var d = new _Drone.Drone(drone.license, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        }
    }]);

    return FleetDataService;
}();
//# sourceMappingURL=fleetDataService.js.map