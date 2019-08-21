"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Board_1 = require("./Board");
var button_1 = require("./button");
//red, blue, yellow, green, brown, purple
$(document).ready(function () {
    $("#headline").text('Drench');
    var board = new Board_1.default();
    var view = new View(board);
    var buttons = new button_1.default(board);
});
var View = /** @class */ (function () {
    function View(board) {
        this.board = board;
        this.updateView(this.board);
        board.addView(this);
    }
    View.prototype.updateView = function (board) {
        $("#playing-field").empty();
        var count = 1;
        var boardData = this.board.tiles;
        for (var _i = 0, boardData_1 = boardData; _i < boardData_1.length; _i++) {
            var row = boardData_1[_i];
            $("#playing-field").append("<div class='row row" + count + "'>");
            var rowName = 'row' + count;
            count = count + 1;
            for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
                var tile = row_1[_a];
                switch (tile.color) {
                    case 0:
                        $('.' + rowName).append("<div class='tile red-tile'>");
                        break;
                    case 1:
                        $('.' + rowName).append("<div class='tile blue-tile'>");
                        break;
                    case 2:
                        $('.' + rowName).append("<div class='tile yellow-tile'>");
                        break;
                    case 3:
                        $('.' + rowName).append("<div class='tile green-tile'>");
                        break;
                    case 4:
                        $('.' + rowName).append("<div class='tile brown-tile'>");
                        break;
                    case 5:
                        $('.' + rowName).append("<div class='tile purple-tile'>");
                        break;
                }
            }
        }
    };
    return View;
}());
exports.default = View;
//# sourceMappingURL=app.js.map