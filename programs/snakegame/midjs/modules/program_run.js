"use strict";
var timer_1 = require("./timer");
var watch_obj_1 = require("./watch_obj");
var draw_snake_1 = require("./draw_snake");
var snake_1 = require("./snake");
var crash_check_1 = require("./crash_check");
var dom_obj_1 = require("./dom_obj");
var feed_machine_1 = require("./feed_machine");
var alert_mask_handler_1 = require("./alert_mask_handler");
var ProgramRn = (function () {
    function ProgramRn() {
        this.initSpeed = 500;
        this.currentSpeed = this.initSpeed;
    }
    ProgramRn.prototype.main = function () {
        var _this = this;
        alert_mask_handler_1.alertHandle.setAlert({
            title: 'CLICK TO START',
            ifScore: false,
            btnTex: 'START GAME'
        });
        watch_obj_1.$watch(timer_1.timerRn, ['runTime'], function () {
            draw_snake_1.drawSnake.draw(snake_1.snakeObj.newSnake());
            crash_check_1.CrashCheck.checkCrashWall(snake_1.snakeObj, dom_obj_1.canObj, function () {
                _this.stop();
                alert_mask_handler_1.alertHandle.setAlert({
                    title: 'YOUR SCORE',
                    ifScore: true,
                    btnTex: 'PLAY AGAIN'
                });
            });
            crash_check_1.CrashCheck.chechCrashItSelf(snake_1.snakeObj, function () {
                _this.stop();
                alert_mask_handler_1.alertHandle.setAlert({
                    title: 'YOUR SCORE',
                    ifScore: true,
                    btnTex: 'PLAY AGAIN'
                });
            });
            crash_check_1.CrashCheck.checkCrashFood(snake_1.snakeObj, feed_machine_1.feedMachine, function () {
                feed_machine_1.feedMachine.feeding();
                snake_1.snakeObj.growUp();
                _this.currentSpeed > 50 ? _this.currentSpeed = _this.currentSpeed - 50 : _this.currentSpeed = 50;
                console.log('current speed', _this.currentSpeed);
                _this.changeTime(_this.currentSpeed);
            });
        });
        alert_mask_handler_1.alertHandle.playAgainHandle();
    };
    ProgramRn.prototype.changeTime = function (delay) {
        this.intervalNum && clearInterval(this.intervalNum);
        this.intervalNum = setInterval(function () {
            timer_1.timerRn.forwardTime();
        }, delay);
    };
    ProgramRn.prototype.pause = function () {
        clearInterval(this.intervalNum);
    };
    ProgramRn.prototype.stop = function () {
        clearInterval(this.intervalNum);
        this.currentSpeed = this.initSpeed;
    };
    return ProgramRn;
}());
exports.programRn = new ProgramRn();
