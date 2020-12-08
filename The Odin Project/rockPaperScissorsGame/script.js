// establishes computer random choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

const outcome = {
  win: ["rockscissors", "paperrock", "scissorspaper"],
  lose: ["rockpaper", "paperscissors", "scissorsrock"],
  draw: ["rockrock", "paperpaper", "scissorsscissors"],
};

let playerTotal = 0;
let compTotal = 0;

// plays one round of the game - works out who won

function singleRound() {
  // assigns computer and player selection
  const playerSelection = prompt(
    "Enter your choice.. either paper, rock or scissors:"
  ).toLowerCase();
  console.log("You have chosen " + playerSelection);
  const computerSelection = computerPlay();
  console.log("Computer has chosen " + computerSelection);

  // switch (playerSelection + computerSelection) {
  //   case "rockscissors":
  //   case "paperrock":
  //   case "scissorspaper":
  //     return "Hooray! You Win!";
  //   case "rockpaper":
  //   case "paperscissors":
  //   case "scissorsrock":
  //     return "Oh dear... You Lose!";
  //   case "rockrock":
  //   case "paperpaper":
  //   case "scissorsscissors":
  //     return "It's a Draw!";
  // }

  if (outcome.win.includes(playerSelection + computerSelection)) {
    playerTotal += 1;
    return "Hooray! You Win!";
  } else if (outcome.lose.includes(playerSelection + computerSelection)) {
    compTotal += 1;
    return "Oh dear... You Lose!";
  } else if (outcome.draw.includes(playerSelection + computerSelection)) {
    return "It's a Draw!";
  } else {
    return "Uhoh error...";
  }
}

function game() {
  let i = 1;
  while (i <= 5) {
    console.log(singleRound());
    i++;
  }
}

game();

function totalScore() {
  if (playerTotal > compTotal) {
    return "It is undeniable. You are the champion.";
  } else if (playerTotal === compTotal) {
    return "You drew, fair play.";
  } else if (playerTotal < compTotal) {
    return "Sorry, but you are a loser of THE GAME.";
  }
}

totalScore();
