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
var DIRACTION;
(function (DIRACTION) {
    DIRACTION[DIRACTION["RIGHT"] = 39] = "RIGHT";
    DIRACTION[DIRACTION["LEFT"] = 37] = "LEFT";
})(DIRACTION || (DIRACTION = {}));
var linesNum = 3;
var columnsNum = 8;
var Sonic = /** @class */ (function (_super) {
    __extends(Sonic, _super);
    function Sonic(context, interations) {
        var _this = _super.call(this, context, linesNum, columnsNum) || this;
        _this.interations = interations;
        _this.waking = false;
        _this.diraction = DIRACTION.RIGHT;
        _this.speed = 10;
        _this.interval = 60;
        _this.x = 0;
        _this.y = 200;
        return _this;
    }
    Sonic.prototype.update = function () {
        if (this.interations.keyPressed(DIRACTION.RIGHT)) {
            if (!this.waking || this.diraction != DIRACTION.RIGHT) {
                this.line = 1;
                this.column = 0;
            }
            this.waking = true;
            this.diraction = DIRACTION.RIGHT;
            this.nextFrame();
            this.x += this.speed;
        }
        else if (this.interations.keyPressed(DIRACTION.LEFT)) {
            if (!this.waking || this.diraction != DIRACTION.LEFT) {
                this.line = 2;
                this.column = 0;
            }
            this.waking = true;
            this.diraction = DIRACTION.LEFT;
            this.nextFrame();
            this.x -= this.speed;
        }
        else {
            if (this.diraction == DIRACTION.RIGHT)
                this.column = 0;
            else if (this.diraction == DIRACTION.LEFT)
                this.column = 1;
            this.line = 0;
            this.waking = false;
        }
    };
    return Sonic;
}(Sprinte));
export default Sonic;
//# sourceMappingURL=sonic.js.map