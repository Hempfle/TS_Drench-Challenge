"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonRow = /** @class */ (function () {
    function ButtonRow(board) {
        this.buttons = [];
        //red, blue, yellow, green, brown, purple
        this.board = board;
        this.buttons.push(new Button('redButton', 0));
        this.buttons.push(new Button('blueButton', 1));
        this.buttons.push(new Button('greenButton', 3));
        this.buttons.push(new Button('yellowButton', 2));
        this.buttons.push(new Button('brownButton', 4));
        this.buttons.push(new Button('purpleButton', 5));
    }
    return ButtonRow;
}());
exports.default = ButtonRow;
var Button = /** @class */ (function () {
    function Button(id, color) {
        var _this = this;
        var btn = document.getElementById(id);
        this.color = color;
        btn.addEventListener("click", function (e) { return _this.buttonPressed(_this.color); });
    }
    Button.prototype.buttonPressed = function (color) {
        console.log("Button " + color + " pressed!");
        var currentTiles = this.board.tiles;
    };
    return Button;
}());
//# sourceMappingURL=button.js.map