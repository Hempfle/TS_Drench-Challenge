import $ = require("jquery");
import Board from "./Board";
import ButtonRow from "./button";

$(document).ready(function() {
    let board = new Board();
    let view = new View(board);
    let buttons = new ButtonRow(board);
    //meepMeep();
});


function endGame() {
    $('.buttons').show();
    $('#playing-field').empty();
    $('#message').detach();
    $('.counter').append('<p id="message">Noch <span id="count">x</span> Versuche übrig!</p>');

    let board = new Board();
    let buttons = new ButtonRow(board);
    let view = new View(board);
    console.log("Endgame: " + view.count);
}

export default class View{
    board: Board;
    count: number;

    constructor(board: Board) {
        this.board = board;
        this.updateView(this.board);
        board.addView(this);
        this.count = 120;
        $('#count').text(this.count);
        let resetButton = document.getElementById('resetButton');
        resetButton.addEventListener("click", (e:Event) => endGame());
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

    decreaseCount() {
        console.log("Decrease Count|| Current Count: " + this.count);
        if (this.count > 0) {
            this.count--;
            $('#count').text(this.count);
        }
        else {
            $('#message').text('Game over');
            $('.buttons').hide();
            this.count = 120;
        }
    }
}

//meepMeep Bot lässt Seite crashen - very efficiently I might add
function meepMeep() {
    let blueButton = document.getElementById('blueButton');
    let yellowButton = document.getElementById('yellowButton');
    let purpleButton = document.getElementById('purpleButton');
    let brownButton = document.getElementById('brownButton');
    let greenButton = document.getElementById('greenButton');
    let redButton = document.getElementById('redButton');


    while (document.getElementById('victory-line') == undefined) {
        console.log('meepMeep running');
        //blueButton.click();
        setTimeout(function () {
            yellowButton.click();
            console.log('yellow');
        }, 2000);
        setTimeout(function () {
            purpleButton.click();
            console.log('purple');
        }, 2000);
        setTimeout(function () {
            brownButton.click();
            console.log('brown');

        }, 2000);
        setTimeout(function () {
            greenButton.click();
            console.log('green');

        }, 2000);
        setTimeout(function () {
            redButton.click();
            console.log('red');
        }, 2000);
    }
}




