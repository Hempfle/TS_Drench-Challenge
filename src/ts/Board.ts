import View from "./app";

export default class Board {
    tiles: Tile[][] = [];
    view: View;

    constructor() {
        for (let i = 0; i < 50; i++) {
            this.tiles.push(this.generateRandomRow(i));
        }
        this.tiles[0][0].active = true;
        this.view = null;
    }

    addView(view: View) {
        this.view = view;
    }

    generateRandomRow(rowNumber: number) {
        let row: Tile[] = [];
        for (let j = 0; j < 50; j++) {
            row.push(new Tile(Math.floor(Math.random() * 6), rowNumber, j, this));
        }
        return row;
    }

    changeRequest(requestedColor: number) {
        //get active Tiles and set to color
        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < 50; j++) {
                if (this.tiles[i][j].active) {
                    this.tiles[i][j].color = requestedColor;
                    if (this.view != null) {
                        this.view.updateView(this);
                    }
                }
            }
        }
    }

}

class Tile {
    color: number;
    x: number;
    y: number;
    board: Board;
    active: boolean;
    constructor(color: number, x: number, y: number, board: Board) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.board = board;
        this.active = false;
    }

    getNeighbors(tile: Tile) {
        let neighbors: Tile[] = [];

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
    }
}

