const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);



// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? "
    },
    {
        type: "input",
        name: "description",
        message: "Enter a Project Description: "
    },
    {
        type: "input",
        name: "installation",
        message: "Enter a Project Installation: "
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about the Project?: "
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for the project: ",
        choices: ['GPL 3.0', 'ISC', 'BSD 3', 'GNU v3', 'Apache 2.0', 'MIT License', 'None']
    },
    {
        type: "input",
        name: "contributing",
        message: "Who is/are the contributor(s) of the Project?: "
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any test instructions: "
    },
    {
        type: "input",
        name: "questions",
        message: "Enter any questions or proposals for future work: "
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address: ",
    },
];

// function to initialize program
const promptUser = () => {
    return inquirer
        .prompt(questions);
}

async function init() {
    try {
      const answers = await promptUser();
  
      const generateReadMeContent = generateMarkdown(answers);
  
      await writeFileAsync('README.md', generateReadMeContent);
  
      console.log("Successfully wrote to README.md");
    } catch(error) {
      console.log(error);
    }
  }

// function call to initialize program
init();