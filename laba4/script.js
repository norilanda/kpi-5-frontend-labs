// functions

function changeColor(element, elementColor, textColor) {
  element.style.backgroundColor = elementColor;
  element.style.color = textColor;
}

const firstColor = "black";
const secondColor = "#34a212";

function generateNewColor(currentColor) {
  return currentColor === firstColor ? secondColor : firstColor;
}

function changeColorOnClick(element) {
  const newBackgroundColor = generateNewColor(element.style.backgroundColor);
  const newTextColor = generateNewColor(newBackgroundColor);
  changeColor(element, newBackgroundColor, newTextColor);
}

// selecting elements

const firstElement = document.getElementById("first-element");
const secondElement = document.querySelector("#second-element");

// adding event listeners

firstElement.addEventListener("click", () => changeColorOnClick(firstElement));
secondElement.addEventListener("click", () =>
  changeColorOnClick(secondElement)
);
