// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        /* console.log(`Office Number: ${this.officeNumber}`); */
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}
/* 
let x = "Githubb@hb.tcom"
const newEng = new Engineer("mark", 1234, "m@m.com",  x);
console.log(newEng.getGithub());
console.log(newEng.gitHub);
 */
module.exports = Engineer;
