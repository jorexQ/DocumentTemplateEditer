"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var antd_1 = require("antd");
var Header = antd_1.Layout.Header;
require("../../assist/styles/editer-layout/header-bar.scss");
;
;
var HeaderBar = (function (_super) {
    __extends(HeaderBar, _super);
    function HeaderBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderBar.prototype.render = function () {
        return (React.createElement(Header, { className: 'header-wrap', style: {
                height: this.props.height + 'px'
            } },
            React.createElement("div", { className: 'logo-wrap' }),
            React.createElement("div", { className: 'content-wrap' }),
            React.createElement("div", { className: 'extend-wrap nev-title-wrap' },
                React.createElement("a", { onClick: this.printPdfTest }, "Print \u70B9\u6211"))));
    };
    HeaderBar.prototype.printPdfTest = function () { };
    return HeaderBar;
}(React.Component));
exports.HeaderBar = HeaderBar;
//# sourceMappingURL=HeaderBar.js.map