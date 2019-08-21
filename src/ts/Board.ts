export default class Board {
    tiles: number[][] = [];
    constructor() {
        for (let i = 0; i < 50; i++) {
            this.tiles.push(generateRandomRow());
        }
    }
    //new constr for changing requests
}

function generateRandomRow() {
    let row: number[] = [];
    for (let i = 0; i < 50; i++) {
        row.push(Math.floor(Math.random() * 6));
    }
    return row;
}


