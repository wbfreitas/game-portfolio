var Sprinte = /** @class */ (function () {
    function Sprinte(context, linesNum, columnsNum) {
        this.context = context;
        this.linesNum = linesNum;
        this.columnsNum = columnsNum;
        this.column = 0;
        this.line = 0;
        this.image = new Image();
        this.imageWidth = 0;
        this.imageHeiht = 0;
    }
    Sprinte.prototype.setImage = function (image) {
        this.image = image;
    };
    Sprinte.prototype.nextFrame = function () {
        var now = new Date().getTime();
        if (!this.lastTime)
            this.lastTime = now;
        if (now - this.lastTime < this.interval)
            return;
        if (this.column < this.columnsNum - 1)
            this.column++;
        else
            this.column = 0;
        this.lastTime = now;
    };
    Sprinte.prototype.draw = function () {
        var width = this.imageWidth;
        var height = this.imageHeiht;
        this.context.drawImage(this.image, width * this.column, height * this.line, width, height, this.x, this.y, width, height);
    };
    return Sprinte;
}());
export default Sprinte;
//# sourceMappingURL=sprinte.js.map