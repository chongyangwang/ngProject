"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ball = /** @class */ (function () {
    function Ball() {
        console.log("Ball........");
    }
    Ball.prototype.information = function () {
        console.log('球类一个复杂的对象集成');
    };
    Ball.prototype.class = function () {
        console.log('球类大概分为几十种游戏');
    };
    return Ball;
}());
exports.Ball = Ball;
