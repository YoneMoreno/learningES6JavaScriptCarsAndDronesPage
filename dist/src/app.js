'use strict';

var _car = require('./classes/car.js');

var _drone = require('./classes/drone.js');

var _fleetData = require('./fleet-data.js');

var _fleetDataService = require('./services/fleet-data-service.js');

var dataService = new _fleetDataService.FleetDataService();
dataService.loadData(_fleetData.fleet);

//let car = dataService.getCarByLicense('AT9900');

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