var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Sprinte from './sprinte';
var linesNum = 1;
var columnsNum = 1;
var DIRACTION;
(function (DIRACTION) {
    DIRACTION[DIRACTION["LEFT"] = 37] = "LEFT";
    DIRACTION[DIRACTION["UP"] = 38] = "UP";
    DIRACTION[DIRACTION["RIGHT"] = 39] = "RIGHT";
    DIRACTION[DIRACTION["DOWN"] = 40] = "DOWN";
})(DIRACTION || (DIRACTION = {}));
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship(context, interations, animation) {
        var _this = _super.call(this, context, 1, 1) || this;
        _this.interations = interations;
        _this.animation = animation;
        _this.waking = false;
        _this.diraction = DIRACTION.RIGHT;
        _this.speed = 1;
        _this.rotate = 0;
        _this.interval = 60;
        _this.x = 200;
        _this.y = context.canvas.height - 40;
        return _this;
    }
    Ship.prototype.verifyDiraction = function (diraction) {
        return this.interations.keyPressed(diraction) && !this.waking;
    };
    Ship.prototype.isWalking = function () {
        var walking = false;
        for (var diraction in DIRACTION)
            if (this.verifyDiraction(DIRACTION.RIGHT))
                walking = true;
        this.waking = walking;
    };
    Ship.prototype.shot = function () {
        this.animation.addSprint();
    };
    Ship.prototype.update = function () {
        this.isWalking();
        if (this.verifyDiraction(DIRACTION.RIGHT)) {
            this.x += this.speed;
            this.rotate = 5;
        }
        if (this.verifyDiraction(DIRACTION.LEFT)) {
            this.x -= this.speed;
            this.rotate = 15;
        }
        if (this.verifyDiraction(DIRACTION.UP)) {
            this.y -= this.speed;
            this.rotate = 0;
        }
        if (this.verifyDiraction(DIRACTION.DOWN)) {
            this.y += this.speed;
            this.rotate = 10;
        }
    };
    Ship.prototype.draw = function () {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.rotate(this.rotate / Math.PI);
        this.context.drawImage(this.image, -15, -15, 30, 40);
        this.context.restore();
    };
    return Ship;
}(Sprinte));
export default Ship;
//# sourceMappingURL=ship.js.map