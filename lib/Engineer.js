const Employee = require("./Employee");

const engineerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "What is the name of the engineer?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Id of the engineer?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email address of the engineer?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the github user name of the engineer?"
    }

]
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

	getRole() {
		return 'Engineer';
	}
	getGithub() {
		return this.github;
	}

}

module.exports = { Engineer, engineerQuestions };