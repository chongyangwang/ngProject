"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Ball_1 = require("./Ball");
var Basketball = /** @class */ (function (_super) {
    __extends(Basketball, _super);
    function Basketball() {
        return _super.call(this) || this;
    }
    Basketball.prototype.information = function () {
        console.log('篮球是球类运动之一');
    };
    Basketball.prototype.class = function () {
        console.log('篮球使我快乐');
    };
    Basketball.prototype.time = function () {
        console.log('我打篮球6年了');
    };
    return Basketball;
}(Ball_1.Ball));
exports.Basketball = Basketball;
