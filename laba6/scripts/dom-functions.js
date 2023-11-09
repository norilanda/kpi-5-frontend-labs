const peopleInfoContainer = document.getElementById("people-info-container");

const pulseAnimation = document.getElementById("pulse-animation");
const successIndicator = document.getElementById("success-indicator");
const errorIndicator = document.getElementById("error-indicator");

export function toggleSuccessIndicator(loading) {
  if (loading) {
    errorIndicator.classList.add("hide");
    pulseAnimation.classList.remove("hide");
    successIndicator.classList.add("hide");
  } else {
    pulseAnimation.classList.add("hide");
    successIndicator.classList.remove("hide");
  }
}

export function showErrorIndicator() {
  pulseAnimation.classList.add("hide");
  successIndicator.classList.add("hide");
  errorIndicator.classList.remove("hide");
}

export function addPeopleToContainer(people) {
  const peopleInfoElements = people.map((person) => createPeopleCard(person));

  peopleInfoElements.forEach((element) => {
    peopleInfoContainer.appendChild(element);
  });
}

function createPeopleCard(personInfo) {
  const infoCardDiv = document.createElement("div");
  infoCardDiv.classList.add("people-info-card");

  const imgElement = document.createElement("img");
  imgElement.src = personInfo.picture;
  imgElement.alt = "avatar";
  imgElement.classList.add("avatar");

  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("people-details");

  const cellDetail = createDetailOption("Cell", personInfo.cell);
  const cityDetail = createDetailOption("City", personInfo.city);
  const countryDetail = createDetailOption("Country", personInfo.country);
  const postcodeDetail = createDetailOption("Postcode", personInfo.postcode);

  detailsDiv.appendChild(cellDetail);
  detailsDiv.appendChild(cityDetail);
  detailsDiv.appendChild(countryDetail);
  detailsDiv.appendChild(postcodeDetail);

  infoCardDiv.appendChild(imgElement);
  infoCardDiv.appendChild(detailsDiv);

  return infoCardDiv;
}

function createDetailOption(label, text) {
  const detailOption = document.createElement("p");
  detailOption.classList.add("detail-option");

  const labelSpan = document.createElement("span");
  labelSpan.textContent = label + ": ";

  const textSpan = document.createElement("span");
  textSpan.textContent = text;

  detailOption.appendChild(labelSpan);
  detailOption.appendChild(textSpan);

  return detailOption;
}
