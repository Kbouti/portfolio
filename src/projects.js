
const projects = [];

class project {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.image = null;
        // We'll also need a screenshot (image) for each project. 
        // Not sure i can link that here
    }
}

const testProject1 = new project("testProject1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
projects.push(testProject1);

const testProject2 = new project("testProject2", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
projects.push(testProject2);

const testProject3 = new project("testProject3", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
projects.push(testProject3);

const testProject4 = new project("testProject4", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
projects.push(testProject4);


module.exports = {
    projects
}