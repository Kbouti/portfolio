import _ from "lodash";
import "./style.css";

import headShot1 from "./images/IMG_2391.jpeg";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add(`hello`);
  const myIcon = new Image();
  myIcon.classList.add("photo");
  myIcon.src = headShot1;
  element.appendChild(myIcon);
  return element;
}
// document.body.appendChild(component());

import { buildPage } from "./homepage";

buildPage();







// ************************************************************************************
// npm run watch  (to begin watching project)
// ^+C            (to quit)

// npm run test   (to initiate tests)

// To push changes to gh-pages: 
// git subtree push --prefix dist origin gh-pages
// ************************************************************************************
