"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TitleBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = require("./baseElement.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleBar = exports.TitleBar = function (_BaseElement) {
    _inherits(TitleBar, _BaseElement);

    function TitleBar(title) {
        _classCallCheck(this, TitleBar);

        var _this = _possibleConstructorReturn(this, (TitleBar.__proto__ || Object.getPrototypeOf(TitleBar)).call(this));

        _this.title = title;
        _this.links = [];
        return _this;
    }

    _createClass(TitleBar, [{
        key: "addLink",
        value: function addLink(title, href) {
            this.links.push({
                title: title,
                href: href
            });
        }
    }, {
        key: "getElementString",
        value: function getElementString() {
            var links = '';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var link = _step.value;

                    links += "<a class=\"mdl-navigation__link\">" + link.title + "</a>\n";
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

            return "\n        <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n            <header class=\"mdl-layout__header\">\n                <div class=\"mdl-layout__header-row\">\n                  <!-- Title -->\n                  <span class=\"mdl-layout-title\">" + this.title + "</span>\n                  <!-- Add spacer, to align navigation to the right -->\n                  <div class=\"mdl-layout-spacer\"></div>\n                  <!-- Navigation. We hide it in small screens. -->\n                  <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n                    " + links + "\n                </nav>\n            </div>\n    </header>\n      <div class=\"mdl-layout__drawer\">\n        <span class=\"mdl-layout-title\">" + this.title + "</span>\n        <nav class=\"mdl-navigation\">\n          " + links + "\n        </nav>\n      </div>\n      <main class=\"mdl-layout__content\">\n        <div class=\"page-content\"><!-- Your content goes here --></div>\n      </main>\n    </div>\n        ";
        }
    }]);

    return TitleBar;
}(_baseElement.BaseElement);
//# sourceMappingURL=title-bar.js.map