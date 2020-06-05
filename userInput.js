// User input.
let inputDirection = {
  x: 0,
  y: 0
}

export const getDirection = () => {
  return inputDirection;
}

// In the snake game if the snake is moving up it can't move in the opposite direction.
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      // When you are going down cant go up my man.
      if (inputDirection.y > 0) return;
      inputDirection = {x:0, y: -1}
    break;
    case 'ArrowDown':
      if (inputDirection.y < 0) return;
      inputDirection = {x:0, y: 1}
    break;
    case 'ArrowRight':
      if (inputDirection.x < 0) return;
      inputDirection = {x:1, y: 0}
    break;
    case 'ArrowLeft':
      if (inputDirection.x > 0) return;
      inputDirection = {x:-1, y: 0}
    break;
  }
})