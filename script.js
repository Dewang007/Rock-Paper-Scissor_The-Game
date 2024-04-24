let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const cheeringSound = document.getElementById("cheering-sound");

const drawGame = () => {
  console.log("It's a Draw!");
  msg.innerText = "It's a Draw! Play Again Loser!!";
  msg.style.backgroundColor = "rgb(11, 11, 11)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    console.log("You Win!");
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}!!`;
    msg.style.backgroundColor = "Green";
    cheeringSound.play();
    cheeringSound.duration = 2;
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    console.log("You Lose!");
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}!!`;
    msg.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  //  Randomly select an options by Computer
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  // show user choice
  console.log("You clicked", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer chose ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // compChoice  is paper or Scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, paper
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
