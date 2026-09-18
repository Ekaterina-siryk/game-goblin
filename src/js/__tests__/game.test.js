import Game from '../game';

test(' should generate exactly 16 holes in the DOM', () => {
  document.body.innerHTML = '<div id="game-container"></div>';

  const game = new Game('game-container');
  game.createBoard();

  const holes = document.querySelectorAll('.hole');
  expect(holes.length).toBe(16);
});
