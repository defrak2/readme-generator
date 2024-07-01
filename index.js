const inquirer = require('inquirer');

//title

inquire
.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  }
]
  .prompt([
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?"
    }
  ])
  .prompt([
    {
      type: "checkbox",
      name: "contents",
      message: "Which table of contents do you want displayed?",
      choices: ["installation", "usage", "credits", "license"]
    }
  ])
  
)

//description

//Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

//Installation

//Usage

//Credits

//License 

//Badges

//Features

//How to Contribute

//Tests