const fs= require("fs/promises");
const inquirer =require("inquirer");
const generateRADME = require('./Develop/utils/generateMarkdown')

const templateGenerator = ({title,description,license,question,installation,github}) =>{
    return `
    ${title}
    ![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />
    ##Table of Content
    -[Project description](#Description)
    -[Usage](#Usage)
    -[Installation](#Installation)
    -[License](#License)
  
    ## Description
    ${description}
  
    ## License
    ${license}
  
    ## Question 
    ${question}
  
    ## Installation
    ${installation}
  
  
  
    ## Contact <br/>
    Here is my Github name ${github}<br/>
  `;
}
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
        message:"Choose to add the license?",
        name:"license",
        choices:["MIT","ISC","GNUPLv3"],
    },
    {
        type:"input",
        message:"What does this project do?",
        name:"operation",
    },
    {
        type:"input",
        message:"Do you want to add Installation?",
        name:"installation"
    },
    {
        type:"input",
        message:"What is your github name?",
        name:"github"
    },
]).then((answer)=>{
    const generateRADME = templateGenerator(answer);
    fs.writeFile('README.md',generateRADME,(err)=>
    err ? console.log(err):console.log('README created')
    );

} );