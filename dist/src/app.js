"use strict";

var _button = require("./ui/button.js");

var _image = require("./ui/image.js");

var _titleBar = require("./ui/title-bar.js");

var _dataTable = require("./ui/data-table.js");

var _fleetDataService = require("./services/fleet-data-service.js");

var _fleetData = require("./fleet-data.js");

var headers = "License Make Model Miles".split(" ");
var dataService = new _fleetDataService.FleetDataService();
dataService.loadData(_fleetData.fleet);
console.log(_fleetData.fleet);
var dt = new _dataTable.DataTable(headers, dataService.cars);

dt.appendToElement($('body'));

/*let titleBar = new TitleBar('App');
titleBar.addLink('Home', '');
titleBar.addLink('Cars', '');
titleBar.addLink('Drones', '');
titleBar.addLink('Map', '');
titleBar.appendToElement($('body'));*/

/*let b = new Button('Click me');
b.appendToElement($('body'));

let image = new Image('../images/drone.jpg');
image.appendToElement($('body'));*/
//# sourceMappingURL=app.js.map