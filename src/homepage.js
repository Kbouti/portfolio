
const body = document.body;


function createElement(type, parentElement, id, classes) {
  const newElement = document.createElement(type);
  if (id !== "") {
    newElement.setAttribute("id", id);
  }
  if (classes != null) {
    for (let i = 0; i <= classes.length; i++) {
        newElement.classList.add(classes[i]);
    }
  }
  parentElement.appendChild(newElement);
  return newElement;
}

function createBackground() {
  // create style divs and containers
    const mainContain = createElement("div", body, "", ["mainContain"])
    const topblue = createElement("div", mainContain, "", ["blueSquare"])


}




module.exports = {
    createBackground
}