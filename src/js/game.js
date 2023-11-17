export default class Game {
  constructor(goblin, boardSize) {
    this.goblin = goblin;
    this.boardSize = boardSize;
  }

  createBoard() {
    this.name = 'createBoard';
    const body = document.querySelector('body');
    const board = '<div class="board_container"></div>';
    body.insertAdjacentHTML('afterbegin', board);
  }

  createCells() {
    const size = this.boardSize;
    const gameBoard = document.querySelector('.board_container');
    for (let i = 0; i < size ** 2; i += 1) {
      const cell = '<div class="cell"></div>';
      gameBoard.insertAdjacentHTML('beforeend', cell);
    }
  }

  randomPosition(min, max) {
    this.name = 'randomPosition';
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createGoblin() {
    const img = document.createElement('img');
    img.src = this.goblin;
    img.className = 'img_goblin';
    return img;
  }

  insertGoblin(img) {
    this.name = 'insertGoblin';
    const cells = document.querySelectorAll('.cell');
    const cell = cells[6];
    cell.append(img);
    cell.classList.add('cell_active');
  }

  changeGoblin(img) {
    const min = 0;
    const max = this.boardSize ** 2 - 1;
    let i = this.randomPosition(min, max);
    const cells = document.querySelectorAll('.cell');
    const cell = cells[i];
    const currentCell = document.querySelector('.cell_active');
    if (cell === currentCell) {
      i = this.randomPosition(min, max);
    }
    cell.append(img);
    cell.classList.remove('cell_active');
  }

  start() {
    this.createBoard();
    this.createCells();
    const img = this.createGoblin();
    this.insertGoblin(img);

    setInterval(() => {
      this.changeGoblin(img);
    }, 1000);
  }
}
