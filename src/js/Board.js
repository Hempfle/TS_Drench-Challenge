"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = /** @class */ (function () {
    function Board() {
        this.tiles = [];
        for (var i = 0; i < 50; i++) {
            this.tiles.push(this.generateRandomRow(i));
        }
        this.tiles[0][0].active = true;
        this.view = null;
    }
    Board.prototype.addView = function (view) {
        this.view = view;
    };
    Board.prototype.generateRandomRow = function (rowNumber) {
        var row = [];
        for (var j = 0; j < 50; j++) {
            row.push(new Tile(Math.floor(Math.random() * 6), rowNumber, j, this));
        }
        return row;
    };
    Board.prototype.changeRequest = function (requestedColor) {
        //get active Tiles and set to color
        for (var i = 0; i < 50; i++) {
            for (var j = 0; j < 50; j++) {
                if (this.tiles[i][j].active) {
                    this.tiles[i][j].color = requestedColor;
                    if (this.view != null) {
                        this.view.updateView(this);
                    }
                }
            }
        }
    };
    return Board;
}());
exports.default = Board;
var Tile = /** @class */ (function () {
    function Tile(color, x, y, board) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.board = board;
        this.active = false;
    }
    Tile.prototype.getNeighbors = function (tile) {
        var neighbors = [];
        if (tile.x <= 49) {
            neighbors.push(this.board.tiles[tile.x + 1][tile.y]);
        }
        if (tile.x >= 0) {
            neighbors.push(this.board.tiles[tile.x - 1][tile.y]);
        }
        if (tile.y <= 49) {
            neighbors.push(this.board.tiles[tile.x][tile.y + 1]);
        }
        if (tile.y >= 0) {
            neighbors.push(this.board.tiles[tile.x][tile.y - 1]);
        }
    };
    return Tile;
}());
//# sourceMappingURL=Board.js.map