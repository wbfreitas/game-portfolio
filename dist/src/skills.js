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
var Skill = /** @class */ (function (_super) {
    __extends(Skill, _super);
    function Skill(context, interations) {
        var _this = _super.call(this, context, 1, 1) || this;
        _this.interations = interations;
        _this.speedX = 0.1;
        _this.speedY = 0.1;
        _this.rotate = 0;
        _this.interval = 60;
        _this.x = Math.floor(Math.random() * _this.context.canvas.width) + 1;
        ;
        _this.y = Math.floor(Math.random() * _this.context.canvas.height) + 1;
        ;
        return _this;
    }
    Skill.prototype.update = function () {
        var ctx = this.context;
        if (this.x > ctx.canvas.width - 30)
            this.speedX *= -1;
        else if (this.x < 0) {
            this.speedX = 0.1;
        }
        if (this.y > ctx.canvas.height - 30) {
            this.speedY *= -1;
        }
        else if (this.y < 0) {
            this.speedY = 0.1;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    };
    Skill.prototype.draw = function () {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.rotate(this.rotate / 180 / Math.PI);
        this.context.drawImage(this.image, -16, -16, 30, 30);
        this.context.restore();
        this.rotate += 2;
    };
    return Skill;
}(Sprinte));
export default Skill;
//# sourceMappingURL=skills.js.map