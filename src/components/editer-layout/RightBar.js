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
var Sider = antd_1.Layout.Sider;
;
;
var RightBar = (function (_super) {
    __extends(RightBar, _super);
    function RightBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RightBar.prototype.render = function () {
        return (React.createElement(Sider, null, "RightBar"));
    };
    RightBar.__ANT_LAYOUT_SIDER = true;
    return RightBar;
}(React.Component));
exports.RightBar = RightBar;
//# sourceMappingURL=RightBar.js.map