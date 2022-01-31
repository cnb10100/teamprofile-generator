const Employee = require("./Employee");

const internQuestionsArray = [

    {
        type: 'input',
        name: 'name',
        message: "What is the name of the intern?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Id of the intern?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email of the intern?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern attend?"
    }

]

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

}

module.exports = { Intern, internQuestionsArray };