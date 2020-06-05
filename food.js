
import {snakeOnFood, expandSnake, SNAKE_EXPANSION_RATE} from './snake.js';
import {getRandomPositionOnBoard} from './board.js';



let foodPosition = getRandomPositionOnBoard();


export const draw = (gameBoard) => {

  const foodElement = document.createElement('div');
  // CSS grid starts at 1
  foodElement.style.gridRowStart = foodPosition.y;
  foodElement.style.gridColumnStart = foodPosition.x;
  foodElement.classList.add('food');

  gameBoard.appendChild(foodElement);
}

/* 
  We need to know if our food is on the snake now.  
*/
export const update = () => {
  // Collision. Increase the size of the snake.
  if (snakeOnFood(foodPosition)) {
    console.log('Collision');
    expandSnake(SNAKE_EXPANSION_RATE);
    foodPosition = getRandomFoodPosition();
    console.log('New Food Position is', foodPosition);
  }
}

// We need to make sure that the new food location is not a part of the snake.
const getRandomFoodPosition = () => {
  let newFoodPosition = {};
  
  // If the new food position is on the snake keep trying till you find an empty spot.
  while(Object.keys(newFoodPosition).length=== 0 || snakeOnFood(newFoodPosition)) {
    newFoodPosition = getRandomPositionOnBoard();
  }

  return newFoodPosition;
}

