"use strict";

var _Car = require("./classes/Car.js");

var _Drone = require("./classes/Drone.js");

var _fleetData = require("./fleet-data.js");

var _fleetDataService = require("./services/fleetDataService.js");

var dataService = new _fleetDataService.FleetDataService();
dataService.loadData(_fleetData.fleet);
console.log(dataService.cars);
console.log(dataService.drones);
//# sourceMappingURL=app.js.map