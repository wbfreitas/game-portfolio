var Imagens = /** @class */ (function () {
    function Imagens() {
        this.imgs = [];
    }
    Imagens.prototype.addImage = function (iAnimation, path) {
        var image = new Image();
        image.src = path;
        iAnimation.setImage(image);
        this.imgs.push(image);
    };
    Imagens.prototype.load = function (callback) {
        var _this = this;
        this.imgs.forEach(function (img) {
            img.onload = function () {
                _this.loads++;
                if (_this.loads == _this.imgs.length) {
                    callback();
                }
            };
        });
    };
    return Imagens;
}());
export default Imagens;
//# sourceMappingURL=imagens.js.map