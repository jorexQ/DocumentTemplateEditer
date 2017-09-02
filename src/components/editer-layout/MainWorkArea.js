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
var Content = antd_1.Layout.Content;
require("../../assist/styles/editer-layout/main-work-area.scss");
;
;
var MainWorkArea = (function (_super) {
    __extends(MainWorkArea, _super);
    function MainWorkArea() {
        var _this = _super.call(this) || this;
        _this.state = {
            canvasHeight: 0
        };
        return _this;
    }
    MainWorkArea.prototype.render = function () {
        return React.createElement(Content, { className: 'main-work-area' },
            React.createElement("div", { className: 'canvas-wrap', style: {
                    height: this.state.canvasHeight + 'px'
                } }, "Main Work Area"));
    };
    MainWorkArea.prototype.setCanvasHeight = function () {
        var windowHeight = window.innerHeight;
        var headerHeight = this.props.headerHeight
            ? this.props.headerHeight
            : 0;
        var footerHeight = this.props.footerHeight
            ? this.props.footerHeight
            : 0;
        this.setState({
            canvasHeight: windowHeight - headerHeight - footerHeight
        });
    };
    MainWorkArea.prototype.componentDidMount = function () {
        this.setCanvasHeight();
        window.addEventListener('resize', this.setCanvasHeight.bind(this));
    };
    MainWorkArea.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.setCanvasHeight.bind(this));
    };
    return MainWorkArea;
}(React.Component));
exports.MainWorkArea = MainWorkArea;
//# sourceMappingURL=MainWorkArea.js.map