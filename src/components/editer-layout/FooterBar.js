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
var Footer = antd_1.Layout.Footer;
require("../../assist/styles/editer-layout/footer-bar.scss");
;
;
var FooterBar = (function (_super) {
    __extends(FooterBar, _super);
    function FooterBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterBar.prototype.render = function () {
        return (React.createElement(Footer, { className: 'footer-wrap', style: { height: this.props.height + 'px' } }, "FooterBar"));
    };
    return FooterBar;
}(React.Component));
exports.FooterBar = FooterBar;
//# sourceMappingURL=FooterBar.js.map