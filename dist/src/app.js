"use strict";

var _button = require("./ui/button.js");

var _image = require("./ui/image.js");

var _titleBar = require("./ui/title-bar.js");

var _dataTable = require("./ui/data-table.js");

var _fleetDataService = require("./services/fleet-data-service.js");

var _fleetData = require("./fleet-data.js");

var _googleMaps = require("./ui/google-maps.js");

var dataService = new _fleetDataService.FleetDataService();
dataService.loadData(_fleetData.fleet);
console.log(_fleetData.fleet);

var centerOfMap = { lat: 40.783661, lng: -73.965883 };
var map = new _googleMaps.GoogleMaps(centerOfMap, dataService.cars);
map.appendToElement($('body'));
//# sourceMappingURL=app.js.map