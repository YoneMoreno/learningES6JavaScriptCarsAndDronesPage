"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FleetDataService = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _Car = require("../classes/Car.js");

var _Drone = require("../classes/Drone.js");

var _DataError = require("./DataError.js");

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var FleetDataService = exports.FleetDataService = function () {
    function FleetDataService() {
        _classCallCheck(this, FleetDataService);

        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    _createClass(FleetDataService, [{
        key: "getCarByLicense",
        value: function getCarByLicense(license) {
            return this.cars.find(function (car) {
                return car.license === license;
            });
        }
    }, {
        key: "getCarsSortedByLicense",
        value: function getCarsSortedByLicense() {
            return this.cars.sort(function (car1, car2) {
                if (car1.license < car2.license) {
                    return -1;
                }
                if (car1.license > car2.license) {
                    return 1;
                }
                return 0;
            });
        }
    }, {
        key: "filterCarsByMake",
        value: function filterCarsByMake(filter) {
            return this.cars.filter(function (car) {
                return car.make.indexOf(filter) >= 0;
            });
        }
    }, {
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
                            if (this.validateCarData(data)) {
                                var car = this.loadCar(data);
                                if (car) {
                                    this.cars.push(car);
                                }
                            } else {
                                var _e = new _DataError.DataError('Car data is not valid', data);
                                this.errors.push(_e);
                            }
                            break;
                        case 'drone':
                            var drone = this.loadDrone(data);
                            this.drones.push(drone);
                            break;
                        default:
                            var e = new _DataError.DataError('invalid vehicle type', data);
                            this.errors.push(e);
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
            try {
                var c = new _Car.Car(car.license, car.model, car.latLong);
                c.make = car.make;
                c.miles = car.miles;
                return c;
            } catch (e) {
                this.errors.push(new _DataError.DataError('error loading car', e));
            }
            return null;
        }
    }, {
        key: "validateCarData",
        value: function validateCarData(car) {
            var requiredProps = 'license make model miles latLong'.split(' ');
            var hasErrors = false;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = requiredProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var field = _step2.value;

                    if (!car[field]) {
                        this.errors.push(new _DataError.DataError("invalid field of car: " + field, car));
                        hasErrors = true;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (Number.isNaN(Number.parseFloat(car.miles))) {
                this.errors.push(new _DataError.DataError('miles is not a number', car));
                hasErrors = true;
            }

            return !hasErrors;
        }
    }, {
        key: "loadDrone",
        value: function loadDrone(drone) {
            try {
                var d = new _Drone.Drone(drone.license, drone.model, drone.latLong);
                d.airTimeHours = drone.airTimeHours;
                d.base = drone.base;
                return d;
            } catch (e) {
                this.errors.push(new _DataError.DataError('error loading drones', e));
            }
            return null;
        }
    }]);

    return FleetDataService;
}();
//# sourceMappingURL=fleetDataService.js.map
//# sourceMappingURL=fleetDataService.js.map