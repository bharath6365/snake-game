// User input.
let inputDirection = {
  x: 0,
  y: 0
};

export const getDirection = () => {
  return inputDirection;
};

const handleUpArrow = () => {
  // When you are going down cant go up my man.
  if (inputDirection.y > 0) return;
  inputDirection = { x: 0, y: -1 };
};

const handleDownArrow = () => {
  if (inputDirection.y < 0) return;
  inputDirection = { x: 0, y: 1 };
};

const handleRightArrow = () => {
  if (inputDirection.x < 0) return;
  inputDirection = { x: 1, y: 0 };
};

const handleLeftArrow = () => {
  if (inputDirection.x > 0) return;
  inputDirection = { x: -1, y: 0 };
};

// In the snake game if the snake is moving up it can't move in the opposite direction.
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      return handleUpArrow();
    case 'ArrowDown':
      return handleDownArrow();
    case 'ArrowRight':
      return handleRightArrow();
    case 'ArrowLeft':
      return handleLeftArrow();
  }
});

// Mobile touch events. Tricky as always.
window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      handleLeftArrow();
    } else {
      /* right swipe */
      handleRightArrow();
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
      handleUpArrow();
    } else {
      /* down swipe */
      handleDownArrow();
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
