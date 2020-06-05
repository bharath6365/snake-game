import {getDirection} from './userInput.js';
// How many times snake moves per second.
export const SNAKE_SPEED = 5;

export const SNAKE_EXPANSION_RATE = 4;

// Segments that are added to the snake dynamically when it eats food.
let addedSegments = 0;

// CSS Grid kicking in here. We can represent snake as x,y coordinates
const snakeBody = [
  {
    x: 11,
    y: 11
  }
]

export const draw = (gameBoard) => {
  // Whenever we draw remove the old state of our application.
  gameBoard.innerHTML = '';

  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');

    gameBoard.appendChild(snakeElement);
  })
}

/* 
  Everytime this is called we need to update the snake body such that all the elements follow the head of the snake. Now the head of the snake gets reassigned to a new value in space(x,y)
  based on user input. Now all the other elements below the head need to be moved 1 level up. ie. The item just below the head should now point to the place where head was previously pointing before. We can destroy the tail.
  */
export const update = () => {
  addSegementsToSnakeBody();

  for (let i=snakeBody.length-2;i>=0;i--) {
    snakeBody[i+1] = {...snakeBody[i]};
  }

  // Update the head of the snake.
  snakeBody[0].x += getDirection().x;
  snakeBody[0].y += getDirection().y;
}

export const expandSnake = (expansionRate) => {
  addedSegments += expansionRate;
}

// If the 2 cartisean coordinates match then snake is on the food.
export const snakeOnFood = (foodPosition) => {
  if (!foodPosition.x || !foodPosition.y) {
    return;
  }

  return snakeBody.some((segment) => {
    return checkPositions(segment, foodPosition);
  });
}

export const getSnakeHead = () => {
  return snakeBody[0];
}

// Function to check if snake interesects with itself.
export const snakeIntersection = () => {
  // We obviously know that snake head is a part of the snake. What we wanna know is if snake head collides with its existing body.
  let snakeBodyWithoutHead = [...snakeBody.slice(1)];

  return snakeBodyWithoutHead.some(segment => {
    return checkPositions(segment, snakeBody[0]);
  })
}

// Whenever there is a collision add one element to the tail of the snake.
const addSegementsToSnakeBody = () => {
  for (let i=0;i<addedSegments;i++) {
    snakeBody.push({...snakeBody[snakeBody.length-1]});
  }

  // Reset addedSegments now that we have updated the snake.
  addedSegments = 0;
}

const checkPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

