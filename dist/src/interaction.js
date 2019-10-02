var Interaction = /** @class */ (function () {
    function Interaction(element) {
        this.keyPress = {};
        this.actions = [];
        this.functionAction = [];
        this.element = element;
        this.startEvent();
        this.stopEvent();
    }
    Interaction.prototype.startEvent = function () {
        var _this = this;
        this.element.addEventListener('keydown', function (env) {
            var keyCode = env.keyCode;
            _this.keyPress[keyCode] = true;
            _this.actions[keyCode] = true;
        });
    };
    Interaction.prototype.stopEvent = function () {
        var _this = this;
        this.element.addEventListener('keyup', function (env) {
            var keyCode = env.keyCode;
            _this.keyPress[keyCode] = false;
            _this.actions[keyCode] = false;
        });
    };
    Interaction.prototype.keyPressed = function (key) {
        return this.keyPress[key];
    };
    Interaction.prototype.callAction = function (key, callBack) {
        this.functionAction[key] = callBack;
    };
    return Interaction;
}());
export default Interaction;
//# sourceMappingURL=interaction.js.map