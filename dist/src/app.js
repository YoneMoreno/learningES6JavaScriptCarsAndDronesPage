'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.application = exports.App = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _fleetData = require('./fleet-data.js');

var _fleetDataService = require('./services/fleet-data-service.js');

var _applicationBase = require('./framework/application-base.js');

var _homePage = require('./home-page.js');

var _carsPage = require('./cars-page.js');

var _mapPage = require('./map-page.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_ApplicationBase) {
    _inherits(App, _ApplicationBase);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, 'Fleet Manager'));

        _this.dataService = new _fleetDataService.FleetDataService();
        _this.dataService.loadData(_fleetData.fleet);

        _this.addRoute('Home', new _homePage.HomePage(), true);
        _this.addRoute('Cars', new _carsPage.CarsPage());
        _this.addRoute('Drones', null);
        _this.addRoute('Map', new _mapPage.MapPage());

        return _this;
    }

    return App;
}(_applicationBase.ApplicationBase);

var application = exports.application = new App();
application.show((0, _jquery2.default)('body'));
//# sourceMappingURL=app.js.map