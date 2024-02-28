const body = document.body;

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

  //  Need photo
  const firstPhoto = new Image();

  firstPhoto.classList.add("photo");
  firstPhoto.src = headShot1;

  header.appendChild(firstPhoto);

  const mainTitle = createElement("h1", header, "", ["mainTitle"]);
  mainTitle.innerHTML = "Kevin Boutilier";

  const aboutSection = createElement("section", header, "");
  const aboutTitle = createElement("h2", aboutSection, "");
  aboutTitle.innerHTML = "About me";

  const aboutText = createElement("p", aboutSection, "", ["aboutMeText"]);
  aboutText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
