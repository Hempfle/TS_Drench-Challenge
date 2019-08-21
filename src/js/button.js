"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonRow = /** @class */ (function () {
    function ButtonRow(board) {
        this.buttons = [];
        //red, blue, yellow, green, brown, purple
        this.board = board;
        this.buttons.push(new Button('redButton', 0, this));
        this.buttons.push(new Button('blueButton', 1, this));
        this.buttons.push(new Button('greenButton', 3, this));
        this.buttons.push(new Button('yellowButton', 2, this));
        this.buttons.push(new Button('brownButton', 4, this));
        this.buttons.push(new Button('purpleButton', 5, this));
    }
    return ButtonRow;
}());
exports.default = ButtonRow;
var Button = /** @class */ (function () {
    function Button(id, color, buttonRow) {
        var _this = this;
        var btn = document.getElementById(id);
        this.color = color;
        this.buttonRow = buttonRow;
        btn.addEventListener("click", function (e) { return _this.buttonPressed(_this.color); });
    }
    Button.prototype.buttonPressed = function (color) {
        this.buttonRow.board.changeRequest(color);
    };
    return Button;
}());
//# sourceMappingURL=button.js.map