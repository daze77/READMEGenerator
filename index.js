// TODO: Include packages needed for this application
const fs = require( 'fs' )
const inquirer = require( 'inquirer' )
const generateMarkdown = require ('./utils/generateMarkdown')

// const markdown = require('./utils/generateMarkdown')
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
        name: 'contributionguidelines',
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
        choices: ['MIT', 'GNU GPL v3', 'Apache', 'Boost', 'No License']
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

  const data = generateMarkdown(response)

  

fs.writeFileSync('README.md', data)
console.log('Successfully created README.md')

}



questions()

