import Imagens from './imagens';
var Animation = /** @class */ (function () {
    function Animation(context, canvas) {
        this.context = context;
        this.canvas = canvas;
        this.sprintes = [];
        this.isEnable = true;
        this.images = new Imagens();
    }
    Animation.prototype.addSprintAndImg = function (sprinte, imagePahth) {
        this.images.addImage(sprinte, imagePahth);
        this.addSprint(sprinte);
    };
    Animation.prototype.addSprint = function (sprinte) {
        this.sprintes.push(sprinte);
        this.nextFrame();
    };
    Animation.prototype.enable = function () {
        this.isEnable = true;
    };
    Animation.prototype.disable = function () {
        this.isEnable = false;
    };
    Animation.prototype.cleanScreen = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Animation.prototype.nextFrame = function () {
        var _this = this;
        if (!this.isEnable)
            return;
        this.cleanScreen();
        this.sprintes.forEach(function (sprint) {
            sprint.update();
        });
        this.sprintes.forEach(function (sprint) {
            sprint.draw();
        });
        requestAnimationFrame(function () { return _this.nextFrame(); });
    };
    return Animation;
}());
export default Animation;
//# sourceMappingURL=animation.js.map