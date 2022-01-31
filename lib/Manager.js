const Employee = require("./Employee");

const managerQuestionsArray = [

    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Id of the manager?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email of the manager?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the office number of the manager?"
    }

]

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

	getOfficeNumber() {
		return this.officeNumber;
	}

}

module.exports = { Manager, managerQuestionsArray } ;