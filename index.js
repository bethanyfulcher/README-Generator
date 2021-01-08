// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
// project title
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Write a description of your project'
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation process?'
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage Information?'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Contribution guidelines?'
},
{
    type: 'input',
    name: 'test',
    message: 'Test Intructions?'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for you application:',
    choices: ['MIT', 'Apache', 'GPL']
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},

];
// console.log(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        writeToFile(response.title, response)
    })
}

// Function call to initialize app
init();
