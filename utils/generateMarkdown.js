const fs = require('fs')
const { gunzip } = require('zlib')
const index = require ('../index')


console.log("This is in the generateMd file")

// const { makeBadge, ValidationError } = require('badge-maker')

    
function badge(){





}  
    

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README

function generateMarkdown(data) { 
   
    function badgelink(){
        if( data.license === 'MIT'){
            badgeLink = "https://opensource.org/licenses/MIT"
            badgeColor = "yellow"
            badgeCode ="MIT"
            } else if (data.license  === 'GNU GPL v3'){
                badgeLink = "https://www.gnu.org/licenses/gpl-3.0"
                badgeColor = "blue"
                badgeCode ="GPLv3"
            } else if (data.license  === 'Apache'){
                badgeLink = "https://opensource.org/licenses/Apache-2.0"
                badgeColor = "blue"
                badgeCode ="Apache%202.0"
            } else if (data.license  === 'Boost') {
                badgeLink = "https://www.boost.org/LICENSE_1_0.txt"
                badgeColor = "lightblue"
                badgeCode ="Boost%201.0"
    
            } else {badgeLink = ""
                    badgeColor = ""    
                    badgeCode = ""
        }
            
        console.log(badgeLink)
        console.log(badgeColor) 
        console.log(badgeCode)     
    }
    badgelink()


    function licenseLInk(){
        if (badgeLink === ""){
            fullBadgeLink = ""
        }else fullBadgeLink = `![Badges](https://img.shields.io/badge/License-${badgeCode}-${badgeColor})  
        (${badgeLink})`
    }
    licenseLInk()













    return `
# ${data.title} 
    

## Table of Contents 
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Licensing](#licensing)
- [Contributing](#contributing)
- [Tests Code](#tests-code)
- [Questions](#questions)
    
## Description
    ${data.description}
    
## Installation Instructions 
    ${data.installation}

## Usage
    ${data.usage}
    
## Licensing
${fullBadgeLink}      

    
## Contributing
    ${data.contributionguidelines}
    
## Tests Code
    ${data.test}
    
## Questions
    
You can find me here on [GitHub](http://github.com/${data.github}), or contact me via [email](mailto:${data.email})  
    `;

}

module.exports = generateMarkdown;