const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { Console } = require("console");
const teamMembers = [];

function htmlWriter(htmlF){
    fs.writeFile('./output/team.html', htmlF, function (err) {
        if (err) throw err;
      
      });
}

function generateTeam() {
    console.log("Generating Team . . . ");
    console.log("TEAM: ");
    teamMembers.forEach(member => {
        console.log(member);
        
    })
    
    const renderedHTML = render(teamMembers);
    console.log(renderedHTML);
    htmlWriter(renderedHTML);
}

function choiceLoop() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'loop',
                message: 'What role would you like to create for your team?',
                choices: ['Create another Team Member', `Generate Team`, "Exit"],
            },
        ])
        .then(answers => {
            console.log(answers);
            if (answers.loop === "Create another Team Member") {
                console.log("Creating new member . . . ");
                teamBuilder();

            } else if (answers.loop === "Generate Team") {
                generateTeam();
            } else return "Exiting. . . ";
        })
        .catch(error => {
            if (error) {
                console.log("Loop - Error");
            } else {
                console.log("Loop - Error 2");
            }
        });
}

function teamBuilder() {
    console.log("**************************************************************************");
    console.log("                         TEAM - MEMBER BUILDER");
    console.log("**************************************************************************");
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'userChoice',
                message: 'What role would you like to create for your team?',
                choices: ['Intern', `Engineer`, 'Manager', "Exit"],
            },
        ])
        .then(answers => {
            console.log(answers);
            if (answers.userChoice === "Intern") {
                console.log("Creating new Intern member . . . ");
                createIntern();
            } else if (answers.userChoice === "Engineer") {
                console.log("Creating new Engineer member . . . ");
                createEngineer();
            } else if (answers.userChoice === "Manager") {
                console.log("Creating new Manager member . . . ");
                createManager();
            } else return "Exiting. . . ";
        })
        .catch(error => {
            if (error) {
                console.log("Error");
            } else {
                console.log("Error 2");
            }
        });
}

function createIntern() {
    inquirer
        .prompt([
            {
                name: 'name',
                message: 'Name: ',
            },
            {
                name: 'id',
                message: 'Id: ',
            },
            {
                name: 'email',
                message: 'Email: ',
            },
            {
                name: 'school',
                message: 'School: ',
            },
        ])
        .then(r => {
            const newIntern = new Intern(r.name, r.id, r.email, r.school);
            teamMembers.push(newIntern);
            choiceLoop();
        })
        .catch(error => {
            if (error) {
                console.log("Intern - Error");
            } else {
                console.log("Intern - Error 2");
            }
        });
}

function createEngineer() {
    inquirer
        .prompt([
            {
                name: 'name',
                message: 'Name: ',
            },
            {
                name: 'id',
                message: 'Id: ',
            },
            {
                name: 'email',
                message: 'Email: ',
            },
            {
                name: 'github',
                message: 'Github: ',
            },
        ])
        .then(r => {
            const newEng = new Engineer(r.name, r.id, r.email, r.github);
            teamMembers.push(newEng);
            choiceLoop();
        })
        .catch(error => {
            if (error) {
                console.log("Engineer - Error");
            } else {
                console.log("Engineer - Error 2");
            }
        });
}

function createManager() {
    inquirer
        .prompt([
            {
                name: 'name',
                message: 'Name: ',
            },
            {
                name: 'id',
                message: 'Id: ',
            },
            {
                name: 'email',
                message: 'Email: ',
            },
            {
                name: 'officenum',
                message: 'Office Number: ',
            },
        ])
        .then(r => {
            const newMan = new Manager(r.name, r.id, r.email, r.officenum);
            teamMembers.push(newMan);
            choiceLoop();
        })
        .catch(error => {
            if (error) {
                console.log("Engineer - Error");
            } else {
                console.log("Engineer - Error 2");
            }
        });
}

teamBuilder();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
