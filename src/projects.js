
const projects = [];



class Project {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.Image = null;
    }
}

const testProject1 = new Project("testProject1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
projects.push(testProject1);


    const battleShipProject = new Project("Battleship", "The classic board game brought to the web. Sink all your opponent's ships before they sink yours! ");
    battleShipProject.Image = require("./images/projectScreenshots/battleship.png");
    projects.push(battleShipProject)

    const toDoListProject = new Project("To Do List", "Organize your to-do's with this handy task organizer. Sort your tasks into relevant projects and apply different urgency and status levels to keep important info handy at a glance")
    toDoListProject.Image = require("./images/projectScreenshots/toDoList.png");
    projects.push(toDoListProject);



module.exports = {
    projects
}