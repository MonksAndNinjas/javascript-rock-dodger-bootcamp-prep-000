
const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)

  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    const dodgerRightEdge = dodgerLeftEdge + 40;
    const rockLeftEdge = positionToInteger(rock.style.left)
    const rockRightEdge = rockLeftEdge + 20;

    if (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) {
      return true
    }
    
    if (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) {
      return true
    }
    
    if (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge) {
      return true
    }
  }
}

function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `${x}px`

  var top = 0

  rock.style.top = top
  
  GAME.appendChild(rock)
  
  window.requestAnimationFrame(moveRock)

  function moveRock() {
    rock.style.top = `${top += 2}px`
    
    if (checkCollision(rock)) {
      return endGame()
    }
    
    if (top < 400) {
      window.requestAnimationFrame(moveRock)
    }
  }

  ROCKS.push(rock)

  return rock
}

function endGame() {
  clearInterval(gameInterval)
  window.removeEventListener('keydown', moveDodger)
  for (i = 0; i < ROCKS.length; i++) {
<<<<<<< HEAD
      ROCKS[i].remove()
=======
   // ROCKS.forEach(function(rock)
     // {rock.remove()
      //});
      let rock = createRock(i)
      ROCKS.push(rock.remove())
>>>>>>> 34989453d22f55ccf76dcb7c3a0e892b29215e53
  }
  alert("YOU LOSE!")
}

function moveDodger(e) {
    if (e.which === LEFT_ARROW) {
      e.preventDefault();
      e.stopPropagation()
      moveDodgerLeft()
    }
    if (e.which === RIGHT_ARROW) {
      e.preventDefault()
      e.stopPropagation()
      moveDodgerRight()
    }
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = positionToInteger(dodger.style.left)
  window.requestAnimationFrame(function() {
   if (left > 0) {
    dodger.style.left = `${left - 4}px`
<<<<<<< HEAD
   }
  })
=======
  }
   })
>>>>>>> 34989453d22f55ccf76dcb7c3a0e892b29215e53
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = positionToInteger(dodger.style.left)
  window.requestAnimationFrame(function() {
   if (left < 360) {
    dodger.style.left = `${left + 4}px`
   }
  })
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
