var Shot = /** @class */ (function () {
    function Shot(context, x, y) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.color = 'red';
        this.width = 10;
        this.height = 30;
    }
    Shot.prototype.update = function () {
        this.x--;
    };
    Shot.prototype.draw = function () {
        var ctx = this.context;
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    };
    Shot.prototype.setImage = function () {
    };
    return Shot;
}());
export default Shot;
//# sourceMappingURL=shot.js.map