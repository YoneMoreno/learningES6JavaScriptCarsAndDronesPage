'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _titleBar = require('../ui/title-bar.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationBase = exports.ApplicationBase = function () {
    function ApplicationBase(title) {
        _classCallCheck(this, ApplicationBase);

        this.title = title;
        this.titleBar = new _titleBar.TitleBar(this.title);
        this.routeMap = {};
        this.defaultRoute = null;
    }

    _createClass(ApplicationBase, [{
        key: 'activateRoute',
        value: function activateRoute(route) {
            var content = this.titleBar.element.find('.page-content');
            content.empty();

            this.routeMap[route].appendToElement(content);
        }
    }, {
        key: 'addRoute',
        value: function addRoute(id, pageObject) {
            var defaultRoute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this.titleBar.addLink(id, '');

            this.routeMap[id] = pageObject;

            if (defaultRoute) {
                this.defaultRoute = id;
            }
        }
    }, {
        key: 'show',
        value: function show(element) {
            var _this = this;

            this.titleBar.appendToElement(element);

            this.titleBar.element.find('.mdl-navigation__link').click(function (event) {
                var route = event.target.innerHTML;
                _this.activateRoute(route);
            });

            if (this.defaultRoute) {
                this.activateRoute(this.defaultRoute);
            }
        }
    }]);

    return ApplicationBase;
}();
//# sourceMappingURL=application-base.js.map