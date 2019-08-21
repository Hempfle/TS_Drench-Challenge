import Board from "./Board";

export default class ButtonRow {
    buttons: Button[] = [];
    board: Board;

    constructor(board: Board) {
        //red, blue, yellow, green, brown, purple
        this.board = board;


        this.buttons.push(new Button('redButton', 0, this));
        this.buttons.push(new Button('blueButton', 1, this));
        this.buttons.push(new Button('greenButton', 3, this));
        this.buttons.push(new Button('yellowButton', 2, this));
        this.buttons.push(new Button('brownButton', 4, this));
        this.buttons.push(new Button('purpleButton', 5, this));
    }
}


class Button {
    color: number;
    buttonRow: ButtonRow;
  constructor(id: string, color: number, buttonRow: ButtonRow) {
    let btn = document.getElementById(id);
    this.color = color;
    this.buttonRow = buttonRow;
    btn.addEventListener("click", (e:Event) => this.buttonPressed(this.color));
  }

  buttonPressed(color: number) {
    this.buttonRow.board.changeRequest(color);
  }
}