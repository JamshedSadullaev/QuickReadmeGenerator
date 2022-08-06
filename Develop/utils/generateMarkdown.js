// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    BSD : '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    MIT : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost : '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
}
if (license) {
return badges[license]
} else {
return ''  
}  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    BSD : '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    MIT : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost : '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
}
if (license) {
return licenseLink[license]
} else {
return ''  
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `Licensed under the ${renderLicenseLink(license)} license`
}else{
    return ''
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  <h> ${answer.title}</h><br/>
  ${renderLicenseBadge(answer.license)}<br />
  ##Table of Content
  -[Project description](#Description)
  -[Usage](#Usage)
  -[Installation](#Installation)
  -[License](#License)

  ## Description
  ${answer.description}

  ## License
  ${renderLicenseSection(answer.license)}

  ## Question 
  ${answer.question}

  ## Installation
  ${answer.installation}



  ## Contact <br/>
  In case of any question you can reach out to me to below Github name
  Here is my Github name  https://github.com/${answer.github}<br/>
`;
}

module.exports = generateMarkdown;
