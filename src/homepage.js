const body = document.body;

const { create } = require("lodash");
// import headShot1 from "./images/IMG_2391.jpeg";
const headShot1 = require("./images/IMG_2391.jpeg");

function createElement(type, parentElement, id, classes) {
  const newElement = document.createElement(type);
  if (id !== "") {
    newElement.setAttribute("id", id);
  }
  if (classes != null) {
    for (let i = 0; i < classes.length; i++) {
      newElement.classList.add(classes[i]);
    }
  }
  parentElement.appendChild(newElement);
  return newElement;
}

function buildPage() {
  buildHeader();
  buildMain();
  // buildFooter();
  return;
}

function buildHeader() {
  const header = createElement("header", body, "");
  const topblue = createElement("div", header, "", ["blueSquare", "topSquare"]);

  const headerPhotoContainer = createElement("div", header, "", [
    "headerPhotoContainer",
  ]);

  const firstPhoto = new Image();
  firstPhoto.classList.add("photo");
  firstPhoto.src = headShot1;
  headerPhotoContainer.appendChild(firstPhoto);
  const mainTitle = createElement("h1", headerPhotoContainer, "", [
    "mainTitle",
  ]);
  mainTitle.innerHTML = "Kevin Boutilier";

  const aboutSection = createElement("section", header, "", ["aboutSection"]);
  const aboutTitle = createElement("h2", aboutSection, "");
  aboutTitle.innerHTML = "About me";
  const aboutText = createElement("p", aboutSection, "", ["aboutMeText"]);
  aboutText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const widgetsContainer = createElement("div", header, "", ["widgetsContainer"]);

  const githubLogo = createElement("i", widgetsContainer, "", ["fa-github","fa","widget"]);
  const linkedinLogo = createElement("i", widgetsContainer, "", ["fa-linkedin", "fa", "widget"]);

}

function buildMain() {
  const main = createElement("main", body, "");
}

function buildFooter() {
  const footer = createElement("footer", body, "");
  const bottomBlue = createElement("div", footer, "", [
    "blueSquare",
    "bottomSquare",
  ]);
}

module.exports = {
  buildPage,
};
