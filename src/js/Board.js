"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = /** @class */ (function () {
    function Board() {
        this.tiles = [];
        for (var i = 0; i < 50; i++) {
            this.tiles.push(generateRandomRow());
        }
    }
    return Board;
}());
exports.default = Board;
function generateRandomRow() {
    var row = [];
    for (var i = 0; i < 50; i++) {
        row.push(Math.floor(Math.random() * 6));
    }
    return row;
}
//# sourceMappingURL=Board.js.map