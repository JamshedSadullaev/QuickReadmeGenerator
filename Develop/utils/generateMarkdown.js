// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  <h align="center"> ${answer.title}</h><br/>
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  ##Table of Content
  -[Project description](#Description)
  -[Usage](#Usage)
  -[Installation](#Installation)
  -[License](#License)

  ## Description
  ${answer.description}

  ## License
  ${answer.license}

  ## Question 
  ${answer.question}

  ## Installation
  ${answer.installation}



  ## Contact <br/>
  Here is my Github name ${answer.github}<br/>
`;
}

module.exports = generateMarkdown;
