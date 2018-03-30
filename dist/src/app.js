"use strict";

var _Car = require("./classes/Car.js");

var _Drone = require("./classes/Drone.js");

var _fleetData = require("./fleet-data.js");

var _fleetDataService = require("./services/fleetDataService.js");

var dataService = new _fleetDataService.FleetDataService();
dataService.loadData(_fleetData.fleet);

//let car = dataService.getCarByLicense('AT2020');

//let cars = dataService.getCarsSortedByLicense();

var cars = dataService.filterCarsByMake('e');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = cars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var car = _step.value;

        console.log(car.make);
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
//# sourceMappingURL=app.js.map