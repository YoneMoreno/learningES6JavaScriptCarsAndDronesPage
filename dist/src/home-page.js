'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _image = require('./ui/image.js');

var _button = require('./ui/button.js');

var _page = require('./framework/page.js');

var _app = require('./app.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = exports.HomePage = function (_Page) {
    _inherits(HomePage, _Page);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, 'Home Page ;=)'));
    }

    _createClass(HomePage, [{
        key: 'createElement',
        value: function createElement() {
            _get(HomePage.prototype.__proto__ || Object.getPrototypeOf(HomePage.prototype), 'createElement', this).call(this);

            var i = new _image.Image('../images/drone.jpg');
            i.appendToElement(this.element);

            var styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
            var b = new _button.Button('Self Driving Cars');
            b.setStyleString(styleString);
            b.appendToElement(this.element);
            b.element.click(function () {
                return _app.application.activateRoute('Cars');
            });

            b = new _button.Button('Drones');
            b.setStyleString(styleString);
            b.appendToElement(this.element);
            b.element.click(function () {
                return _app.application.activateRoute('Drones');
            });
        }
    }, {
        key: 'getElementString',
        value: function getElementString() {
            return '<div style="text-align: center;"></div>';
        }
    }]);

    return HomePage;
}(_page.Page);
//# sourceMappingURL=home-page.js.map