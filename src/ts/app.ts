import $ = require("jquery");
import Board from "./Board";
import ButtonRow from "./button";

//red, blue, yellow, green, brown, purple


$(document).ready(function() {
    $("#headline").text('Drench');
    let board = new Board();
    let view = new View(board);
    let buttons = new ButtonRow(board);
});

export default class View{
    board: Board;

    constructor(board: Board) {
        this.board = board;
        this.updateView(this.board);
        board.addView(this);
    }

    updateView(board: Board) {
        $("#playing-field").empty();
        var count = 1;
        let boardData = this.board.tiles;

        for (let row of boardData) {

            $("#playing-field").append("<div class='row row" + count + "'>");
            var rowName = 'row' + count;

            count = count + 1;
            for (let tile of row) {
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
    }
}




