import { SNAKE_SPEED, draw as drawSnake, update as updateSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { isOutsideBoard } from './board.js';

// Need to know when we rendered the gameloop last time.
let lastRenderedTime = 0;

let gameOver = false;

const gameBoard = document.querySelector('.board');

// The game needs to run every time like on a loop.
const gameLoop = (currentTime) => {
  if (gameOver) {
    return handleGameEnd();
  }

  requestAnimationFrame(gameLoop);
  // Don't update the game if the diff less than 0.5 seconds.
  if ((currentTime - lastRenderedTime) / 1000 < 1 / SNAKE_SPEED) return;

  lastRenderedTime = currentTime;

  // Game has 2 main functions. Draw and update.
  draw();
  update();
};

// Responsible for game functioanlity like snake growing and game ending.
const update = () => {
  // Check for failiure.
  checkFailiure();
  updateSnake();
  updateFood();
};

// Responsible for drawing the snake and the food.
const draw = () => {
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

const checkFailiure = () => {
  if (isOutsideBoard(getSnakeHead()) || snakeIntersection()) {
    gameOver = true;
  }
};

const handleGameEnd = () => {
  const shouldStartNewGame = confirm('You lost. Would you like to start a new game?');
    if (shouldStartNewGame) {
      window.location.reload();
    }

  return;
}

requestAnimationFrame(gameLoop);
