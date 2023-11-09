import {
  addPeopleToContainer,
  toggleSuccessIndicator,
  showErrorIndicator,
} from "./dom-functions.js";

const downloadBtn = document.getElementById("download-button");

downloadBtn.addEventListener("click", getAndDisplayInformation);

async function getAndDisplayInformation() {
  const numberOfPeopleToFetch = 6;
  toggleSuccessIndicator(true);
  try {
    const peopleInfo = await fetchInformation(numberOfPeopleToFetch);
    addPeopleToContainer(peopleInfo);
    toggleSuccessIndicator(false);
  } catch (error) {
    showErrorIndicator();
  }
}

async function fetchInformation(limit) {
  const resp = await fetch(`https://randomuser.me/api?results=${limit}`);
  if (!resp.ok) {
    throw new Error("Could not get information!");
  }
  const result = await resp.json();

  return result.results.map(({ picture, cell, location }) => ({
    picture: picture.large,
    cell,
    city: location.city,
    country: location.country,
    postcode: location.postcode,
  }));
}
