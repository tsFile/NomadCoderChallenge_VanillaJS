const randomInput = document.querySelector(".randomNumber input");
const guessInput = document.querySelector(".guessNumber input");
const playButton = document.querySelector(".guessNumber button");

function handleClickButton(event) {
  const rangeNumber = parseInt(randomInput.value);
  const guessNumber = parseInt(guessInput.value);
  if (rangeNumber < 0) {
    alert("Please choose a Number more than 0");
  } else if (rangeNumber < guessNumber) {
    alert("Guess number is out of range!! Please select again");
  } else {
    const randomNumber = Math.floor(Math.random() * rangeNumber) + 1;
    const resultInfo = document.querySelector(".gameInfo");
    console.log(typeof randomNumber, typeof guessNumber);
    event.preventDefault();
    document.querySelector(
      ".gameResult"
    ).innerHTML = `<h2>You chose: ${guessNumber}, the machine chose: ${randomNumber}</h2>`;
    if (guessNumber === randomNumber) resultInfo.innerText = "You win!";
    else resultInfo.innerText = "You lost!";
  }
}

playButton.addEventListener("click", handleClickButton);
