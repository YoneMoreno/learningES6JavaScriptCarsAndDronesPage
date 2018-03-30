"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationBase = undefined;

var _titleBar = require("../ui/title-bar.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationBase = exports.ApplicationBase = function ApplicationBase(title) {
    _classCallCheck(this, ApplicationBase);

    this.title = title;
    this.titleBar = new _titleBar.TitleBar(this.title);
};
//# sourceMappingURL=application-base.js.map