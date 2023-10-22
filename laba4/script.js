// FIRST TASK

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

// ==============================================================================
// SECOND TASK

const btnAdd = document.getElementById("btn-add");
const btnIncrease = document.getElementById("btn-increase");
const btnDecrease = document.getElementById("btn-decrease");
const btnDelete = document.getElementById("btn-delete");

const imageContainer = document.getElementById("images-container");

btnAdd.addEventListener("click", () => addImage(imageContainer));
btnIncrease.addEventListener("click", () => IncreaseImage(imageContainer));
btnDecrease.addEventListener("click", () => DecreaseImage(imageContainer));
btnDelete.addEventListener("click", () => DeleteImage(imageContainer));

// functions

function createImage() {
  const newImageElement = document.createElement("img");
  newImageElement.src = "image.jpg";
  newImageElement.width = "512";
  newImageElement.height = "384";
  newImageElement.alt = "Kyiv";
  return newImageElement;
}

function addImage(container) {
  const newImageElement = createImage();
  container.appendChild(newImageElement);
}

function IncreaseImage(container) {
  const lastImageElement = container.lastElementChild;
  const maxSize = 700;

  if (!lastImageElement || lastImageElement.tagName !== "IMG") {
    alert("There is no image to increase!");
  } else if (
    lastImageElement.width > maxSize ||
    lastImageElement.height > maxSize
  ) {
    alert("Cannot increase further, limit reached!");
  } else {
    const ratio = 1.2;
    lastImageElement.width *= ratio;
    lastImageElement.height *= ratio;
  }
}

function DecreaseImage(container) {
  const lastImageElement = container.lastElementChild;
  const minSize = 100;

  if (!lastImageElement || lastImageElement.tagName !== "IMG") {
    alert("There is no image to decrease!");
  } else if (
    lastImageElement.width < minSize ||
    lastImageElement.height < minSize
  ) {
    alert("Cannot decrease further, limit reached!");
  } else {
    const ratio = 1.2;
    lastImageElement.width /= ratio;
    lastImageElement.height /= ratio;
  }
}

function DeleteImage(container) {
  const lastImageElement = container.lastElementChild;
  if (!lastImageElement || lastImageElement.tagName !== "IMG") {
    alert("No images to delete!");
  } else {
    container.removeChild(lastImageElement);
  }
}
