import { checkGeneration } from "./generation.js";
import { checkEvenOrOdd } from "./evenOdd.js";
import { checkleapYear } from "./leap.js";

const userInput = document.getElementById("year");
const select = document.getElementById("action");
const checkButton = document.getElementById("btn");
const resultElement = document.getElementById("result");
const closeModalButton = document.getElementById("closeModalButton");

//event listener for the button
checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedValue = select.value;
  const inputValue = parseInt(userInput.value);

  if (selectedValue === "leapyear") {
    resultElement.textContent = checkleapYear(inputValue);
  } else if (selectedValue === "evenOrOdd") {
    resultElement.textContent = checkEvenOrOdd(inputValue);
  } else if (selectedValue === "generation") {
    resultElement.textContent = checkGeneration(inputValue);
  } else {
    resultElement.textContent = "Please enter a valid action";
  }
  popup.classList.remove("hidden");
});
closeModalButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});
