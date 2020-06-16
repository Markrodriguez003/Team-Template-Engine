class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        /* console.log(`Employee Name: ${this.name}`); */
        return this.name;
    }

    getId() {
        /* console.log(`Employee Id: ${this.id}`); */
        return this.id;
    }

    getEmail() {
        /* console.log(`Employee Email: ${this.email}`); */
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;


