import Board from "./Board";

export default class ButtonRow {
    buttons: Button[] = [];
    board: Board;

    constructor(board: Board) {
        //red, blue, yellow, green, brown, purple
        this.board = board;


        this.buttons.push(new Button('redButton', 0));
        this.buttons.push(new Button('blueButton', 1));
        this.buttons.push(new Button('greenButton', 3));
        this.buttons.push(new Button('yellowButton', 2));
        this.buttons.push(new Button('brownButton', 4));
        this.buttons.push(new Button('purpleButton', 5));
    }
}


class Button {
    color: number;
    board: Board;
  constructor(id: string, color: number) {
    let btn = document.getElementById(id);
    this.color = color;
    btn.addEventListener("click", (e:Event) => this.buttonPressed(this.color));
  }

  buttonPressed(color: number) {
    console.log("Button " + color + " pressed!");
    let currentTiles = this.board.tiles;

  }
}