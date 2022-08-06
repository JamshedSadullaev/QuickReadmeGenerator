const fs= require("fs/promises");
const inquirer =require("inquirer");
const generateREADME = require('./Develop/utils/generateMarkdown');
// const util = require('./Develop/utils');

// const templateGenerator = ({title,description,license,question,installation,github}) =>{
//     return `
//     ${title}
//     ![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />
//     ##Table of Content
//     -[Project description](#Description)
//     -[Usage](#Usage)
//     -[Installation](#Installation)
//     -[License](#License)
  
//     ## Description
//     ${description}
  
//     ## License
//     ${license}
  
//     ## Question 
//     ${question}
  
//     ## Installation
//     ${installation}
  
  
  
//     ## Contact <br/>
//     Here is my Github name ${github}<br/>
//   `;
// }
// fs.writeFile("README.md","test") 
// .then(() =>console.log("Success"))
// .catch((e)=>console.log(e));
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
// function init() {

    .then((answer)=>{
    const genREADME = generateREADME(answer);
    fs.writeFile('EXAMPLE.md',genREADME);

} );
// }
// init();
function init() {}

// Function call to initialize app
init();