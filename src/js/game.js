import goblinSrc from '../assets/goblin.png';

export default class Game {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.boardSize = 16; 
    this.holes = [];
    this.goblinEl = null;
    this.currentHoleIndex = -1;
    this.intervalId = null;
  }

  init() {
    this.createBoard();
    this.createGoblin();
    this.moveGoblin();
    this.startInterval();
  }

  createBoard() {
    for (let i = 0; i < this.boardSize; i += 1) {
      const hole = document.createElement('div');
      hole.classList.add('hole');
      this.container.appendChild(hole);
      this.holes.push(hole);
    }
  }

  createGoblin() {
    const img = document.createElement('img');
    img.src = goblinSrc;
    img.classList.add('goblin-img');
    img.alt = 'Goblin';
    this.goblinEl = img;
  }

  moveGoblin() {
    let newIndex = Math.floor(Math.random() * this.boardSize);
    
    while (newIndex === this.currentHoleIndex) {
      newIndex = Math.floor(Math.random() * this.boardSize);
    }

    this.currentHoleIndex = newIndex;
    
    this.holes[this.currentHoleIndex].appendChild(this.goblinEl);
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.moveGoblin();
    }, 1000);
  }
}
