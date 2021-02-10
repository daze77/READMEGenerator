// TODO: Include packages needed for this application
const fs = require( 'fs' )
const inquirer = require( 'inquirer' )
const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

  async function questions () {
    const response = await inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Where what is the title of this applicatoin?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief descripton of the application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage inforamtion for this application.',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Please confirm contribution guidelines to be followed.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please confirm the testing instructions for this application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the applicble license applicable for this application.',
        choices: ['y', 'o', 'p']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ])
  console.log( `our reponse is `, response)
}

questions()




/*
ReadMe Questions to Ask:
- Title
- Description
    - Why did we build this appliication?
    - What problem is being solved by this application?
    - What did you learn creating this application?
    - What makes this application stand out?
- TOC
- Installation instructions if any
- Usage - how to use the application
- Licensing of the application 
    - pick from predefined list
    - this will then generate the badge that will appear on top of readme
    - Licensing section will also appear in readme with details about the badge
- Contributing - use OOTB covenant for this if the app is open to contributions
- Tests Code
- Questions
    -what is your github user name? - this will add github to this section
    -what is your email address? - this will add a contact information to this section
    -





- Badges to be used on the page
- Features - for apps with many features



TOC
- Installation
- Usage
    - include screenshots here
- Credits
- Licensing
- Badges
- Features
- Contributing
- Tests
title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions



*/

// const questions = [];

// // TODO: Create a function to write README file


fs.writeFileSync('README.md', markdown, (err) =>
err ? console.log(err): console.log('Successfully created README.md'))

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
