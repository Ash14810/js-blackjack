let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Player",
  chips: 100,
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let cardsRan = Math.floor(Math.random() * 13) + 1;
  if (cardsRan === 1) {
    return 11;
  } else if (cardsRan > 10) {
    return 10;
  }
  return cardsRan;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cards.join(" ");
  if (sum <= 20) {
    message = "Do you want to draw a new card? 😊";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game 😢";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function runnewCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
