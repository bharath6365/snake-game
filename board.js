const BOARD_SIZE = 21;
export const getRandomPositionOnBoard = () => {
  // This random position should make sure that the value returned is not on the snake.
  let position = {};
  position.x = Math.floor(Math.random() * BOARD_SIZE + 1);
  position.y = Math.floor(Math.random() * BOARD_SIZE + 1);

  return position;
};

export const isOutsideBoard = (position) => {
  return position.x < 0 || position.y < 0 || (position.x > BOARD_SIZE || position.y > BOARD_SIZE);
};
