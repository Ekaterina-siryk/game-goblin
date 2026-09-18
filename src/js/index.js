import '../css/style.css';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game('game-container');
  game.init();
});
