const projects = [];

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.Image = null;
    this.alt = null;
    this.projectLink = null;
    this.repoLink = null;
  }
}


const cvProject = new Project(
  "CV-Project",
  "An application to make a personal CV/resume. Input your details to see the result. "
);

cvProject.Image = require("./images/projectScreenshots/cvProject.png");
cvProject.Image.alt = "An application that outputs a professional resume. Built using React. ";
cvProject.projectLink = "https://cv-project-pi-lovat.vercel.app/";
cvProject.repoLink = "https://github.com/Kbouti/CV-Project";
projects.push(cvProject);


const battleShipProject = new Project(
  "Battleship",
  "The classic board game brought to the web. Sink all of your opponent's ships before they sink yours! "
);
// battleShipProject.Image = require("./images/screenshots/battle.png");
battleShipProject.Image = require("./images/projectScreenshots/battleship.png");
battleShipProject.Image.alt = "User interface resembling the classic battleship boardgame"
battleShipProject.projectLink = "https://kbouti.github.io/Battleship/";
battleShipProject.repoLink = "https://github.com/Kbouti/Battleship";
projects.push(battleShipProject);

const toDoListProject = new Project(
  "To Do List",
  "Organize your to-do's with this handy task organizer. Sort your tasks into relevant projects and apply different urgency and status levels to keep important info handy at a glance."
);
// toDoListProject.Image = require("./images/screenshots/toDo.png");
toDoListProject.Image = require("./images/projectScreenshots/toDoList.png");
toDoListProject.alt = "A to-do list applicaton showing various tasks"
toDoListProject.projectLink = "https://kbouti.github.io/toDo/";
toDoListProject.repoLink = "https://github.com/Kbouti/toDo";
projects.push(toDoListProject);

const ticTacToeProject = new Project(
  "Tic-Tac-Toe",
  "Classic Tic-Tac-Toe. Play against a friend, a random computer player, or an unbeatable AI. "
);
// ticTacToeProject.Image = require("./images/screenshots/tic.png");
ticTacToeProject.Image = require("./images/projectScreenshots/ticTacToe.png");
ticTacToeProject.alt = "A game of tic-tac-toe"
ticTacToeProject.projectLink = "https://kbouti.github.io/ticGame/";
ticTacToeProject.repoLink = "https://github.com/Kbouti/ticGame";
projects.push(ticTacToeProject);

const adminDashboardProject = new Project(
  "Admin Dashboard",
  "The goal of this project was to clone a template for a basic social media site. Looks pretty real, right?"
);

adminDashboardProject.Image = require("./images/projectScreenshots/adminDashboard.png");
adminDashboardProject.alt = "A professional looking social media site"
adminDashboardProject.projectLink = "https://kbouti.github.io/adminDashboard/";
adminDashboardProject.repoLink = "https://github.com/Kbouti/adminDashboard";
projects.push(adminDashboardProject);

const calculatorProject = new Project(
  "Calculator",
  "Use your mouse or your keyboard to operate this desktop calulator."
);
// calculatorProject.Image = require("./images/screenshots/calc.png");
calculatorProject.Image = require("./images/projectScreenshots/calculator.png");
calculatorProject.alt = "A calculator"
calculatorProject.projectLink = "https://kbouti.github.io/calculator/";
calculatorProject.repoLink = "https://github.com/Kbouti/calculator";
projects.push(calculatorProject);

const etchASketchProject = new Project(
  "Etch-A-Sketch",
  "Hover your mouse across the tiles to paint a pretty picture! "
);
// etchASketchProject.Image = require("./images/screenshots/etch.png");
etchASketchProject.Image = require("./images/projectScreenshots/etchASketch.png");
etchASketchProject.alt = "A virtual Etch-A-Sketch"
etchASketchProject.projectLink = "https://kbouti.github.io/etchy-sketchy/";
etchASketchProject.repoLink = "https://github.com/Kbouti/etchy-sketchy";

projects.push(etchASketchProject);

const rockPaperScissorsProject = new Project(
  "Rock Paper Scissors",
  "Play a round of Rock Paper Scissors against a computer opponent. First to win two rounds wins the match. "
);
// rockPaperScissorsProject.Image = require("./images/screenshots/rock.png");
rockPaperScissorsProject.Image = require("./images/projectScreenshots/rockPaperScissors.png");
rockPaperScissorsProject.alt = "User interface for a rock paper scissors game"
rockPaperScissorsProject.projectLink =
  "https://kbouti.github.io/rock-paper-scissors/";
rockPaperScissorsProject.repoLink =
  "https://github.com/Kbouti/rock-paper-scissors";
projects.push(rockPaperScissorsProject);

module.exports = {
  projects,
};
