const inquirer = require('inquirer')
const template = require('./src/template')
const writeFile = require('./src/write-file')

// constructor classes and questions for each type of employee
const { Engineer, engineerQuestionsArray } = require('./lib/Engineer');
const { Intern, internQuestionsArray } = require('./lib/Intern');
const { Manager, managerQuestionsArray } = require('./lib/Manager');
// stores all of the team member objects
const employeesArray = []


const init = () => { managerQuestions() }

// prompts engineer questions, creates object based on Engineer class
const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArray)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesArray.push(answers);
        return employeePrompt();
    })
}

// prompts intern questions, creates object based on Intern class
const internQuestions = () => {
    inquirer.prompt(internQuestionsArray)
    .then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeesArray.push(answers);
        return employeePrompt();
    })
}

// prompts manager questions, creates object based on Manager class
const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArray)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArray.push(answers);
        return employeePrompt();
    })
}

// handles prompts for employees
const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        // sends correct prompts based on the employee type
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };
        if (answer.employeeType === 'done') {
            // converts users inputs into HTML
            let html = template(employeesArray)
            console.log('...');
            // creates HTML file
            writeFile(html);
        }
    })
}

init();