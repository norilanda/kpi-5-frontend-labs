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
