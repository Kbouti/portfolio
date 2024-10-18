const body = document.body;

const { create } = require("lodash");

const headShot1 = require("./images/lifestyle/IMG_2391.jpeg");
// const headShot2 = require("./images/lifestyle/IMG_2389.jpeg");
const blankShot = require("./images/screenshots/blankImage.png");
const ebikeBeach = require("./images/lifestyle/eBikeBeach.jpeg");
// const tigerBikerDark = require("./images/lifestyle/tigerBikerDark.jpeg");
// const tigerBikerLight = require("./images/lifestyle/tigerBikerLight.jpeg");
// const tigerBikerVert = require("./images/lifestyle/tigerBikerVert.jpeg");


const aboutMeMessage =
  "With a Bachelor's degree in Business from the University of Denver and 15 years of experience in the bicycle industry, I set my sights on a new career in web development. Utilizing The Odin Project's self taught curriculum I am now skilled with HTML, CSS, Javascript, React, SQL, and Node.js. I'm passionate about helping people reach their goals, and I can't wait to utilize my technical skills to solve new and exciting problems!";


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
  firstPhoto.alt = "Smiling man in the mountains"
  headerPhotoContainer.appendChild(firstPhoto);
  const mainTitle = createElement("h1", headerPhotoContainer, "", [
    "mainTitle",
    "title",
  ]);
  mainTitle.innerHTML = "Kevin Boutilier";

  const aboutSection = createElement("div", header, "", ["aboutSection"]);
  const aboutTitle = createElement("h2", aboutSection, "", [
    "title",
    "sectionTitle",
  ]);
  aboutTitle.innerHTML = "About me";

  const blankImage = new Image();
  blankImage.src = blankShot;
  blankImage.classList.add("blankImage");
  aboutSection.appendChild(blankImage);

  const aboutText = createElement("p", aboutSection, "", ["aboutMeText"]);
  aboutText.innerHTML = aboutMeMessage;
  const widgetsContainer = createElement("div", aboutSection, "", [
    "widgetsContainer",
  ]);

  const githubLink = createElement("a", widgetsContainer, "", ["widgetLink"]);
  githubLink.setAttribute("href", "https://github.com/Kbouti");
  githubLink.setAttribute("target", "_blank");
  const githubLogo = createElement("i", githubLink, "", [
    "fa-github",
    "fa",
    "widget",
    "widgetLink",
  ]);

  const linkedinLink = createElement("a", widgetsContainer, "", ["widgetLink"]);
  linkedinLink.setAttribute(
    "href",
    "https://www.linkedin.com/in/kevin-boutilier-22702072/"
  );
  linkedinLink.setAttribute("target", "_blank");
  const linkedinLogo = createElement("i", linkedinLink, "", [
    "fa-linkedin",
    "fa",
    "widget",
    "widgetLink",
  ]);

  const emailLink = createElement("a", widgetsContainer, "", []);
  emailLink.setAttribute("href", "mailto:kevin.f.boutilier@gmail.com");
  emailLink.setAttribute("target", "_blank");
  const emailLogo = createElement("i", emailLink, "", [
    "fa",
    "fa-solid",
    "fa-envelope",
    "widget",
    "widgetLink",
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
      "cardImageContainer",
    ]);

    const cardImage = new Image();
    cardImage.classList.add("cardImage");
    cardImage.src = projects[i].Image;
    cardImage.alt = projects[i].alt;
    imageContainer.appendChild(cardImage);

    const projectSubBar = createElement("div", projectCard, "", [
      "projectSubBar",
    ]);
    const projectName = createElement("p", projectSubBar, "", ["projectName"]);
    projectName.innerHTML = projects[i].name;
    const projectWidgetsContainer = createElement("div", projectSubBar, "", [
      "projectWidgetsContainer",
    ]);

    const githubLink = createElement("a", projectWidgetsContainer, "", [
      "projectLink",
      "widgetLink",
    ]);
    githubLink.setAttribute("href", projects[i].repoLink);
    githubLink.setAttribute("target", "_blank");
    const gitHubIcon = createElement("i", githubLink, "", [
      "fa-github",
      "fa",
      "cardWidget",
      "widgetLink",
    ]);

    const projectLink = createElement("a", projectWidgetsContainer, "", [
      "projectLink",
      "widgetLink",
    ]);
    projectLink.setAttribute("href", projects[i].projectLink);
    projectLink.setAttribute("target", "_blank");

    const arrowUpRightIcon = createElement("span", projectLink, "", [
      "material-symbols-outlined",
      "cardWidget",
      "widgetLink",
      "upRight",
    ]);
    arrowUpRightIcon.innerHTML = "open_in_new";

    const projectDescription = createElement("p", projectCard, "", [
      "projectDescription",
    ]);
    projectDescription.innerHTML = projects[i].description;
  }
}

function buildFooter() {
  const footer = createElement("footer", body, "");

  const footerTextContainer = createElement("div", footer, "", [
    "footerTextContainer",
  ]);

  const footerTitle = createElement("H4", footerTextContainer, "", [
    "footerTitle",
    "title",
  ]);
  footerTitle.innerHTML = "Contact me";

  const actionStatement = createElement("p", footerTextContainer, "", [
    "actionStatement",
    "footerText",
  ]);
  actionStatement.innerHTML =
    "Please get in touch if you think our work could be mutually beneficial!";

  const address = createElement("p", footerTextContainer, "", [
    "footerAddress",
    "footerText",
    "contactInfo",
  ]);
  address.innerHTML = "Tacoma WA, 98405";

  const phoneNumber = createElement("div", footerTextContainer, "", [
    "phoneNumber",
    "footerText",
    "contactInfo",
  ]);

  const phoneLogo = createElement("i", phoneNumber, "", [
    "fa-solid",
    "fa",
    "fa-phone",
  ]);

  const phoneNumberText = createElement("p", phoneNumber, "", []);

  phoneNumberText.innerHTML = "847-915-8749";

  const emailAddress = createElement("div", footerTextContainer, "", [
    "emailAddress",
    "footerText",
    "contactInfo",
  ]);

  const emailLogo = createElement("i", emailAddress, "", [
    "fa",
    "fa-solid",
    "fa-envelope",
  ]);

  const emailText = createElement("p", emailAddress, "", []);

  emailText.innerHTML = "kevin.f.boutilier@gmail.com";

  const widgetsContainer = createElement("div", footerTextContainer, "", [
    "widgetsContainer",
  ]);

  const githubLink = createElement("a", widgetsContainer, "", ["widgetLink"]);
  githubLink.setAttribute("href", "https://github.com/Kbouti");
  githubLink.setAttribute("target", "_blank");
  const githubLogo = createElement("i", githubLink, "", [
    "fa-github",
    "fa",
    "widget",
    "widgetLink",
  ]);

  const linkedinLink = createElement("a", widgetsContainer, "", ["widgetLink"]);
  linkedinLink.setAttribute(
    "href",
    "https://www.linkedin.com/in/kevin-boutilier-22702072/"
  );
  linkedinLink.setAttribute("target", "_blank");

  const linkedinLogo = createElement("i", linkedinLink, "", [
    "fa-linkedin",
    "fa",
    "widget",
    "widgetLink",
  ]);

  const emailLink = createElement("a", widgetsContainer, "", []);
  emailLink.setAttribute("href", "mailto:kevin.f.boutilier@gmail.com");
  emailLink.setAttribute("target", "_blank");
  const bigEmailLogo = createElement("i", emailLink, "", [
    "fa",
    "fa-solid",
    "fa-envelope",
    "widget",
    "widgetLink",
  ]);

  const footerPhoto = new Image();
  footerPhoto.classList.add("footerPhoto");
  footerPhoto.src = ebikeBeach;
  footerPhoto.alt = "Man on the beach sitting atop an electric bicycle";
  footer.appendChild(footerPhoto);
}

module.exports = {
  buildPage,
};
