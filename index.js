const inquirer = require('inquirer');

//title

inquirer
.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?"
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your application?"
  },
  {
    type: "checkbox",
    name: "contents",
    message: "Which table of contents do you want displayed?",
    choices: ["installation", "usage", "credits", "license"]
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation process for this application?"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and usage for use."
  },
  {
    type: "list",
    name: "license",
    choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
  },
  {
    type: "input",
    name: "contributing",
    message: "List your collaborators, if any, with links to their GitHub profiles."
  },
  {
    type: "input",
    name: "tests",
    message: "Provide examples on how to run your application"
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What's your email?"
  }
]
)