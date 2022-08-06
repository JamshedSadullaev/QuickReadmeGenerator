const fs= require("fs/promises");
const inquirer =require("inquirer");
const generateREADME = require('./Develop/utils/generateMarkdown');
// question line
inquirer.prompt([
    {
        type:"input",
        message:"What is your project title?",
        name:"title"
    },
    {
        type:"input",
        message:"Write some description about the project?",
        name:"description"
    },

    {
        type:"input",
        message:"What does this project do?",
        name:"operation",
    },
    {
        type:"input",
        message:"How can one install this project?",
        name:"installation"
    },
    {
        type:"list",
        message:"Choose to add the license?",
        choices:["MIT","BSD","Boost","Apache"],
        name:"license",
        
    },
    {
        type:"input",
        message:"What is your github name?",
        name:"github"
    },
])

// it will put answers to generatMarkdown.js file and writes to EXAMPLE.md file
    .then((answer)=>{
    const genREADME = generateREADME(answer);
    fs.writeFile('EXAMPLE.md',genREADME);

} );

function init() {}


init();