"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.application = undefined;

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _fleetDataService = require("./services/fleet-data-service.js");

var _fleetData = require("./fleet-data.js");

var _applicationBase = require("./framework/application-base.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_ApplicationBase) {
    _inherits(App, _ApplicationBase);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, 'Fleet App'));

        _this.dataService = new _fleetDataService.FleetDataService();
        _this.dataService.loadData(_fleetData.fleet);
        console.log(_fleetData.fleet);
        return _this;
    }

    return App;
}(_applicationBase.ApplicationBase);

var application = exports.application = new App();
application.show((0, _jquery2.default)('body'));
//# sourceMappingURL=app.js.map