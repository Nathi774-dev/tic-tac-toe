const cells = document.querySelectorAll(".cell")
const status = document.getElementById("status")
const resetbtn = document.getElementById("reset")

let currentPlayer = "X"
let board = ["", "", "", "", "", "", "", "", ""]
let gameActive = true;

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 5], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function handleClick(e) {
  const index = e.target.dataset.index;
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  e.textContent = currentPlayer;
  e.target.classList.add("taken");

  if (checkWin()) {
    statusText.textContent = `Player ${currentPlayer} wins!`
    gameActive = False;
  } else if (board.every(cell => cell !== "")) {
    statusText.textContent = "Its a Draw!";
    gameActive = False;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn!`;
  }
}

function checkWin() {
  return winningCombos.some(combo => {
    return combo.every(i => board[i] === currentPlayer);
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = "Player X's turn";
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken");
  });
}

cells.forEach(cell => cell.addEventListener("click", handleClick);
resetBtn.addEventListener("click", resetGame);
 
    
