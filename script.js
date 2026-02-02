document.addEventListener('DOMContentLoaded', () => {
  // Function to update the icon and its color
  const updateIcon = (theme) => {
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    themeIcon.style.color = theme === 'dark' ? '#fff' : '#000'; // Adjust icon colors
  };

  // Get the preferred color scheme from the OS
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Set initial theme based on system preference
  let currentTheme = prefersDarkScheme.matches ? 'dark' : 'light';
  document.body.setAttribute('data-theme', currentTheme);
  updateIcon(currentTheme); // Call this function after its declaration

  // Function to toggle theme
  const toggleTheme = () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    console.log("Current theme:", currentTheme); // Log current theme
    updateIcon(currentTheme); // Call this function after its declaration
  };

  // Event listener for button click
  themeToggle.addEventListener('click', toggleTheme);

  // Listen for system theme changes
  prefersDarkScheme.addEventListener('change', e => {
    const newTheme = e.matches ? 'dark' : 'light';
    currentTheme = newTheme;
    document.body.setAttribute('data-theme', newTheme);
    updateIcon(newTheme); // Call this function after its declaration
  });
});

let humanScore = 0;
let computerScore = 0;

const getHumanChoice = () => {
  const rps = prompt("Choose your fighter: rock, paper, or scissors:");
  const cleaned = rps.trim().toLowerCase();
  return (cleaned);
}

const getComputerChoice = (min = 0, max = 2) => {
  const rps = Math.floor(Math.random() * (max - min + 1) + min);

  switch (rps) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Takes returns from getHumanChoice and getComputerChoice, compares, and determines winner.

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "paper")
  ) {
    return "It's a tie!";
  } else {
    return "You lose!";
  }
}

// Tracks wins, and runs function playRound until the computer or player reach 3 wins.

function game() {
  while (humanScore < 3 && computerScore < 3) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("You chose " + humanChoice);
    console.log("Computer chose " + computerChoice);

    const roundResult = playRound(humanChoice, computerChoice);

    console.log(roundResult);

    if (roundResult === "You win!") {
      humanScore++;
    } else if (roundResult === "You lose!") {
      computerScore++;
    }
    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }

  if (humanScore === 3) {
    console.log("Gratz! You won!");
  }

  if (computerScore === 3) {
    console.log("Oh no! You got beat by a computer!");
  }
}

game();