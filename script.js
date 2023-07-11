document.addEventListener('DOMContentLoaded', () => {
    const cells = Array.from(document.querySelectorAll('.cell'));
    const restartButton = document.getElementById('restart');
    let currentPlayer = 'X';
    let gameEnd = false;
  
    // Add click event listener to each cell
    cells.forEach(cell => {
      cell.addEventListener('click', handleClick, { once: true });
    });
  
    // Restart the game
    restartButton.addEventListener('click', restart);
  
    // Handle cell click event
    function handleClick(e) {
      const cell = e.target;
      if (cell.textContent !== '' || gameEnd) return;
  
      // Update cell with current player's symbol
      cell.textContent = currentPlayer;
  
      // Check if the current player wins
      if (checkWin(currentPlayer)) {
        endGame(`${currentPlayer} wins!`);
      } else if (checkDraw()) { // Check for a draw
        endGame("It's a draw!");
      } else {
        // Switch to the other player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  
    // Check if the current player wins
    function checkWin(player) {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      return winningCombinations.some(combination => {
        return combination.every(index => cells[index].textContent === player);
      });
    }
  
    // Check for a draw
    function checkDraw() {
      return cells.every(cell => cell.textContent !== '');
    }
  
    // End the game
    function endGame(message) {
      gameEnd = true;
      alert(message);
    }
  
    // Restart the game
    function restart() {
      cells.forEach(cell => {
        cell.textContent = '';
      });
  
      currentPlayer = 'X';
      gameEnd = false;
    }
  });
  