{
  let playerResult = 0;
  let computerResult = 0;

  const startGame = function playGame(playerInput) {
    clearMessages();
    const moveName = function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        return "Nieznany ruch";
      }
    };

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = moveName(randomNumber);

    printMessage("Komputer wylosował: " + computerMove);

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = moveName(playerInput);

    const playerWin = function showPlayerWin() {
      playerResult = playerResult + 1;
      printMessage("Ty wygrywasz!");
      printResult(playerResult + ":" + computerResult);
    };

    const computerWin = function showComputerWin() {
      computerResult = computerResult + 1;
      printMessage("Przegrywasz!");
      printResult(playerResult + ":" + computerResult);
    };

    const result = function displayResult(argComputerMove, argPlayerMove) {
      printMessage("Twój ruch to: " + argPlayerMove);
      if (argPlayerMove == "kamień" && computerResult > 1 * playerResult) {
        // randomNumber = 3;
        playerWin();
      } else if (
        argPlayerMove == "papier" &&
        computerResult > 1 * playerResult
      ) {
        // randomNumber = 2;
        playerWin();
      } else if (
        argPlayerMove == "nożyce" &&
        computerResult > 1 * playerResult
      ) {
        // randomNumber = 1;
        playerWin();
      } else if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        playerWin();
      } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        computerWin();
      } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage("Remis!");
      } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage("Remis!");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        playerWin();
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        computerWin();
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        computerWin();
      } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
        printMessage("Remis!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        playerWin();
      }
    };

    result(computerMove, playerMove);
  };

  document.getElementById("rock").addEventListener("click", function () {
    startGame(1);
  });

  document.getElementById("paper").addEventListener("click", function () {
    startGame(2);
  });
  document
    .getElementById("scissors")
    .addEventListener("click", function () {
      startGame(3);
    });
}