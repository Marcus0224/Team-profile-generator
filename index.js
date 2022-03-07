const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest'); 

// Constructors
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const { default: generate } = require('@babel/generator');

const generateMarkdown = require('./src/generateMarkdown');

let team = [];
let addManager = true;

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'what is the Managers name?',
        validate: blank => {
            if (blank) {
                return true
            } else {
                return 'Enter Managers name.'
            }
        },

    },
    {
        type: 'input',
        name: 'id',
        message: 'What is Manager Employee ID?',
        validate: (blank) => {
            if (blank) {
                return true
            } else {
                return 'Enter Managers Employee Id.'
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is managers Email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message:'What is manager Office number?'
    },
    {
        type: 'confirm',
        name: 'addNew',
        message:'Would you like to add a member?'
    },
];

const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message:'What is Engineer name?',
            validate: (blank) => {
                if (blank) {
                    return true
                } else {
                    return 'Enter Engineer name.'
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is Engineer ID?',
            validate: (blank) => {
                if (blank) {
                    return true
                } else {
                    return 'Enter Engineer name.'
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Engineer Email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is Engineer Github username?',
            validate: (blank) => {
                if (blank) {
                    return true
                } else {
                    return 'Enter Engineer Github username.'
                }
            },
        },
        {
            type: 'confirm',
            name: 'addNew',
            message:'Would you like to add a member?'
        },
            
    ];

    const internQuestions = [
        {
            type: 'input',
            name: 'name',
            message:'What is Intern name?',
            validate: (blank) => {
                if (blank) {
                    return true
                } else {
                    return 'Enter Intern name.'
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is Intern ID?',
            validate: (blank) => {
                if (blank) {
                    return true
                } else {
                    return 'Enter Intern Id.'
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message:'What school did Intern attend?'
        },
        {
            type: 'input',
            name: 'email',
            message:'What is email address of Intern?'
        },
        {
            type: 'confirm',
            name: 'addNew',
            message:'Would you like to add a member?'
        },
    ];

const selectMemberType = [
    {
        type:'list',
        name: 'memberType',
        message: 'Choose role for the Employee',
        choices: ['Manager', 'Engineer', 'Intern'],
    }
];

function addMember() {
    inquirer.prompt(selectMemberType)
    .then(answer => {
        if(answer.memberType === 'Manager') {
            if (addManager) {
                inquirer.prompt(managerQuestions)
                .then(answer => {
                    // employee info
                    const manager = new Manager
                    (
                        answer.name,
                        answer.id,
                        answer.email,
                        answer.officeNumber
                    );
                    team.push(manager);
                    addManager = false;
                    if (answer.addNew) {
                       return addMember();
                    } else {
                        generate();
                    }
                });
            } else {
                // 1 manager
                console.log("There is a manger already!")
                addMember();
            }
        } else if (answer.memberType === 'Engineer') {
            inquirer.prompt(engineerQuestions)
            .then(answer => {
                //save info
                const engineer = new Engineer
                (
                    answer.name,
                    answer.id,
                    answer.email,
                    answer.github
                );
                //info to team array
                team.push(engineer);
                if (answer.addNew) {
                    addMember();
                } else {
                    generate();
                };
            });
        } else if (answer.memberType === 'Intern') {
            inquirer.prompt(internQuestions)
            .then(answer => {
                //save info
                const intern = new Intern
                (
                    answer.name,
                    answer.id,
                    answer.email,
                    answer.school
                );
                //info to team array
                team.push(intern);
                if(answer.addNew) {
                    addMember();
                } else {
                    generate();
                };
            });
        };
    });
};

addMember ();


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

//Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating.... Please wait....");
        writeToFile("./dist/README.md", generateMarkdown({...inquirerAnswers}));
    })
}

init();
