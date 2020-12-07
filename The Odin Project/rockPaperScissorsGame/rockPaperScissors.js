// establishes computer random choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// plays one round of the game - works out who won
function singleRound() {
  // assigns computer and player selection
  const computerSelection = computerPlay();
  const playerSelection = prompt("enter a choice");

  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return "Win!";
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return "Lose!";
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return "Draw!";
  }
}
