// FIRST TASK

const nameInput = document.getElementById("name");
const groupInput = document.getElementById("group");
const phoneInput = document.getElementById("phone");
const idCardInput = document.getElementById("id-card");
const facultyInput = document.getElementById("faculty");

const submitButton = document.getElementById("first-form-submit-button");
const firstForm = document.getElementById("first-form");

const firstFormInputs = [
  nameInput,
  groupInput,
  phoneInput,
  idCardInput,
  facultyInput,
];

firstFormInputs.forEach((inputElement) => {
  inputElement.addEventListener("blur", () => validateInput(inputElement));
  inputElement.addEventListener("invalid", () =>
    onInvalidInputDetection(inputElement)
  );
});

function validateInput(element) {
  if (element.checkValidity()) element.classList.remove("input-error");
}

function onInvalidInputDetection(element) {
  element.classList.add("input-error");
}

submitButton.addEventListener("click", onFirstFormSubmit);

function onFirstFormSubmit() {
  if (!firstForm.checkValidity()) return;

  const htmlContent = createNewWindowInformation();
  const newWindow = window.open("", "_blank");
  newWindow.document.write(htmlContent);
}

function createNewWindowInformation() {
  const htmlContent = `<h2>Введені дані</h2>
  <p><span style="font-weight: bold;">ПІБ: </span>${nameInput.value}</p>
  <p><span style="font-weight: bold;">Група: </span>${groupInput.value}</p>
  <p><span style="font-weight: bold;">Телефон: </span>${phoneInput.value}</p>
  <p><span style="font-weight: bold;">ID-card: </span>${idCardInput.value}</p>
  <p><span style="font-weight: bold;">Факультет: </span>${facultyInput.value}</p>
  `;

  return htmlContent;
}

// ====================================================================
// SECOND TASK
// ====================================================================

const colorPickerElement = document.getElementById("color-picker");
const tableElement = document.getElementById("6x6-table");

createTableDom(tableElement);

const targetCellElement = document.getElementById("targetCell");
const secondColumnCells = getAllColumnCells(tableElement, 1);

// event listeners

targetCellElement.addEventListener("mouseover", () => {
  targetCellElement.style.backgroundColor = generateRandomColor();
});

targetCellElement.addEventListener("click", () => {
  targetCellElement.style.backgroundColor = colorPickerElement.value;
});

targetCellElement.addEventListener("dblclick", () => {
  secondColumnCells.forEach((cellElement) => {
    cellElement.style.backgroundColor = colorPickerElement.value;
  });
});

// functions

function createTableDom(tableElement) {
  const rowNumber = 6;
  const columnNumber = 6;
  const targetCellNumber = 2;

  let counter = 1;

  for (let i = 0; i < rowNumber; i++) {
    const rowElement = document.createElement("tr");

    for (let j = 0; j < columnNumber; j++) {
      const cellElement = document.createElement("td");
      cellElement.innerText = counter;
      if (counter === targetCellNumber)
        cellElement.setAttribute("id", "targetCell");

      counter++;
      rowElement.appendChild(cellElement);
    }

    tableElement.appendChild(rowElement);
  }
}

function generateRandomColor() {
  const red = generateRandomRGB();
  const green = generateRandomRGB();
  const blue = generateRandomRGB();

  const hexColor = `#${red}${green}${blue}`;

  return hexColor;

  function generateRandomRGB() {
    const randomColor = Math.floor(Math.random() * 256);
    return randomColor.toString(16).padStart(2, "0");
  }
}

function getAllColumnCells(tableElement, columnIndex) {
  const cellElementList = [];

  const rows = [...tableElement.rows];
  rows.forEach((row) => {
    cellElementList.push(row.cells[columnIndex]);
  });

  return cellElementList;
}
