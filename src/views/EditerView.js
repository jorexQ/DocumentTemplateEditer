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
var HeaderBar_1 = require("../components/editer-layout/HeaderBar");
var FooterBar_1 = require("../components/editer-layout/FooterBar");
var LeftBar_1 = require("../components/editer-layout/LeftBar");
var RightBar_1 = require("../components/editer-layout/RightBar");
var MainWorkArea_1 = require("../components/editer-layout/MainWorkArea");
;
;
var EditerView = (function (_super) {
    __extends(EditerView, _super);
    function EditerView() {
        var _this = _super.call(this) || this;
        _this.state = {
            headerHeight: 34,
            footerHeight: 70
        };
        return _this;
    }
    EditerView.prototype.render = function () {
        return (React.createElement(antd_1.Layout, null,
            React.createElement(HeaderBar_1.HeaderBar, { height: this.state.headerHeight }),
            React.createElement(antd_1.Layout, null,
                React.createElement(LeftBar_1.LeftBar, null),
                React.createElement(antd_1.Layout, null,
                    React.createElement(antd_1.Layout, null,
                        React.createElement(MainWorkArea_1.MainWorkArea, { headerHeight: this.state.headerHeight, footerHeight: this.state.footerHeight }),
                        React.createElement(RightBar_1.RightBar, null)),
                    React.createElement(FooterBar_1.FooterBar, { height: this.state.footerHeight })))));
    };
    return EditerView;
}(React.Component));
exports.EditerView = EditerView;
//# sourceMappingURL=EditerView.js.map