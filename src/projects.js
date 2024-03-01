
const projects = [];



class Project {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.Image = null;
    }
}

    const battleShipProject = new Project("Battleship", "The classic board game brought to the web. Sink all your opponent's ships before they sink yours! ");
    battleShipProject.Image = require("./images/projectScreenshots/battleship.png");
    projects.push(battleShipProject)

    const toDoListProject = new Project("To Do List", "Organize your to-do's with this handy task organizer. Sort your tasks into relevant projects and apply different urgency and status levels to keep important info handy at a glance")
    toDoListProject.Image = require("./images/projectScreenshots/toDoList.png");
    projects.push(toDoListProject);

    const ticTacToeProject = new Project("Tic-Tac-Toe", "The classic game we're all familiar with. Play against a friend, a random computer player, or an unbeatable A.I. ")
    ticTacToeProject.Image = require("./images/projectScreenshots/ticTacToe.png");
    projects.push(ticTacToeProject);

    const calculatorProject = new Project("Calculator", "Use your mouse or your keyboard to operate this desktop calulator");
    calculatorProject.Image = require("./images/projectScreenshots/calculator.png");
    projects.push(calculatorProject);


module.exports = {
    projects
}