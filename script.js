const flashcards = [
  { question: "What is HTML?", answer: "A markup language for web pages" },
  { question: "What is CSS?", answer: "Styles the appearance of web pages" },
  { question: "What is JavaScript?", answer: "Adds interactivity to websites" }
];

let currentIndex = 0;
const flashcard = document.getElementById("flashcard");
const front = document.getElementById("front");
const back = document.getElementById("back");

function showCard() {
  front.textContent = flashcards[currentIndex].question;
  back.textContent = flashcards[currentIndex].answer;
  flashcard.classList.remove("flip");
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flip");
});

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showCard();
}

showCard();

