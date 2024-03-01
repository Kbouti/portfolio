const body = document.body;

const { create } = require("lodash");
// import headShot1 from "./images/IMG_2391.jpeg";
const headShot1 = require("./images/IMG_2391.jpeg");
const headShot2 = require("./images/IMG_2389.jpeg");

const projectsFile = require("./projects");
const projects = projectsFile.projects;

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
  buildFooter();
  return;
}

function buildHeader() {
  const header = createElement("header", body, "");

  // Created blueWrapper to try and hide overflow of top blue tilted box
  const blueWrapper = createElement("div", header, "", ["blueWrapper"]);
  const topblue = createElement("div", blueWrapper, "", ["topSquare"]);

  const headerPhotoContainer = createElement("div", header, "", [
    "headerPhotoContainer",
  ]);

  const firstPhoto = new Image();
  firstPhoto.classList.add("photo");
  firstPhoto.src = headShot1;
  headerPhotoContainer.appendChild(firstPhoto);
  const mainTitle = createElement("h1", headerPhotoContainer, "", [
    "mainTitle",
    "title",
  ]);
  mainTitle.innerHTML = "Kevin Boutilier";

  const aboutSection = createElement("section", header, "", ["aboutSection"]);
  const aboutTitle = createElement("h2", aboutSection, "", [
    "title",
    "sectionTitle",
  ]);
  aboutTitle.innerHTML = "About me";
  const aboutText = createElement("p", aboutSection, "", ["aboutMeText"]);
  aboutText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const widgetsContainer = createElement("div", header, "", [
    "widgetsContainer",
  ]);

  const githubLogo = createElement("i", widgetsContainer, "", [
    "fa-github",
    "fa",
    "widget",
  ]);
  const linkedinLogo = createElement("i", widgetsContainer, "", [
    "fa-linkedin",
    "fa",
    "widget",
  ]);
}

function buildMain() {
  const main = createElement("main", body, "", ["mainContent"]);
  const contentTitle = createElement("h3", main, "", ["title", "sectionTitle"]);
  contentTitle.innerHTML = "My Work";
  const projectsContainer = createElement("div", main, "", [
    "projectsContainer",
  ]);

  // projects is an array containing project objects.
  // We'll use this to build project cards for each one

  for (let i = 0; i < projects.length; i++) {
    console.log(projects[i].name);

    const projectCard = createElement("div", projectsContainer, "", [
      "projectCard",
    ]);
    const imageContainer = createElement("div", projectCard, "", [
      "cardScreenshot",
    ]);
    // Once we actually start storing the link to the image in the project object we can apply that here

    const projectSubBar = createElement("div", projectCard, "", [
      "projectSubBar",
    ]);
    const projectName = createElement("p", projectSubBar, "", ["projectName"]);
    projectName.innerHTML = projects[i].name;
    const projectWidgetsContainer = createElement("div", projectSubBar, "", [
      "projectWidgetsContainer",
    ]);

    const gitHubIcon = createElement("i", projectWidgetsContainer, "", [
      "fa-github",
      "fa",
      "cardWidget",
    ]);

    const arrowUpRightIcon = createElement(
      "span",
      projectWidgetsContainer,
      "",
      ["material-symbols-outlined", "cardWidget"]
    );
    arrowUpRightIcon.innerHTML = "open_in_new";

    const projectDescription = createElement("p", projectCard, "", [
      "projectDescription",
    ]);
    projectDescription.innerHTML = projects[i].description;
  }
}

function buildFooter() {
  const footer = createElement("footer", body, "");
  const footerTitle = createElement("H4", footer, "", ["footerTitle", "title"]);
  footerTitle.innerHTML = "Contact me";

  const actionStatement = createElement("p", footer, "", [
    "actionStatement",
    "footerText",
  ]);
  actionStatement.innerHTML =
    "Please get in touch if you think our work could be mutually beneficial!";

  const address = createElement("p", footer, "", [
    "footerAddress",
    "footerText",
  ]);
  address.innerHTML = "1223 S. Washington Street Unit B Tacoma, WA 98405";

  const phoneNumber = createElement("p", footer, "", [
    "phoneNumber",
    "footerText",
  ]);
  phoneNumber.innerHTML = "847-915-8749";

  const emailAddress = createElement("p", footer, "", [
    "emailAddress",
    "footerText",
  ]);
  emailAddress.innerHTML = "kevin.f.boutilier@gmail.com";

  const widgetsContainer = createElement("div", footer, "", ["widgetsContainer"]);

  const githubLogo = createElement("i", widgetsContainer, "", [
    "fa-github",
    "fa",
    "widget",
  ]);
  const linkedinLogo = createElement("i", widgetsContainer, "", [
    "fa-linkedin",
    "fa",
    "widget",
  ]);


const footerPhoto = new Image();
footerPhoto.classList.add("footerPhoto");
footerPhoto.src = headShot2;
footer.appendChild(footerPhoto);



}

module.exports = {
  buildPage,
};
