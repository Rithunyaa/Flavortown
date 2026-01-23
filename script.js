const flashcards = [
  { question: "Lysosomes", answer: "An organelle that contains destructive enzymes and is used for cell waste cleanup" },
  { question: "Centrioles", answer: "Barrel-shaped organelles that organize the cell’s cytoskeleton and play a key role in mitosis" },
  { question: "Vacuole", answer: "An organelle that acts as the cell’s storage sac and stores nutrients and water" },
  { question: "Plasma (cell) membrane", answer: "A membrane that surrounds the cell and controls intake and release" },
  { question: "Ribosome", answer: "An organelle made of RNA and protein that synthesizes protein" },
  { question: "Nucleus", answer: "An organelle that contains all the genetic information needed for the cell to function" },
  { question: "Nucleolus", answer: "A structure inside the nucleus that makes ribosomal RNA and forms ribosomes" }, 
  { question: "Smooth Endoplasmic Reticulum", answer: "An organelle that synthesizes proteins; lacks ribosomes " },
  { question: "Rough Endoplasmic Reticulum", answer: "An organelle that synthesizes, folds, modifies, and transports proteins to the Golgi Apparatus" },
  { question: "Mitochondria", answer: "An organelle that generates ATP (energy) through cellular respiration" },
  { question: "Golgi Apparatus", answer: "An organelle that modifies, sorts, and packages lipids and proteins from the ER into vesicles" },
  { question: "Vesicles", answer: "Small membrane-bound sacs that transport substances in the cell" },
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

