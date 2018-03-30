"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CarsPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _page = require("./framework/page.js");

var _dataTable = require("./ui/data-table.js");

var _app = require("./app.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarsPage = exports.CarsPage = function (_Page) {
    _inherits(CarsPage, _Page);

    function CarsPage() {
        _classCallCheck(this, CarsPage);

        return _possibleConstructorReturn(this, (CarsPage.__proto__ || Object.getPrototypeOf(CarsPage)).call(this, 'Cars'));
    }

    _createClass(CarsPage, [{
        key: "createElement",
        value: function createElement() {
            _get(CarsPage.prototype.__proto__ || Object.getPrototypeOf(CarsPage.prototype), "createElement", this).call(this);

            var headers = 'License Make Model Miles'.split(' ');
            var table = new _dataTable.DataTable(headers, _app.application.dataService.cars);
            table.appendToElement(this.element);
        }
    }, {
        key: "getElementString",
        value: function getElementString() {
            return "<div style=\"margin: 20px;\"><h3>Cars</h3></div>";
        }
    }]);

    return CarsPage;
}(_page.Page);
//# sourceMappingURL=cars-page.js.map