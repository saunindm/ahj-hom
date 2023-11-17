import Game from '../game';

test('testing new instance of class Game creation', () => {
  const expected = {
    goblin: 'goblin.png',
    boardSize: 4,
  };

  const result = new Game('goblin.png', 4);
  expect(result).toEqual(expected);
});
