const inquirer = require('inquirer');
const fs = require('fs');

//title

inquirer
  .prompt([
    {
      type: "list",
      name: "createReadme",
      message: "Do you want to create a README.md?",
      choices: ["Yes", "No"]
    },
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
      choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
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
  .then((response) => {

    const badge = ''

    const licenseBadge = (license) => {
      switch (license) {
        case "None":
          return "";
        case "Apache License 2.0":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GNU General Public License v3.0":
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "MIT License":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case 'BSD 2-Clause "Simplified" License':
          return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        case 'BSD 3-Clause "New" or "Revised" License':
          return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        case "Boost Software License 1.0":
          return "[![License](https://img.shields.io/badge/License-Boost%201.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        case "Creative Commons Zero v1.0 Universal":
          return "[![License](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)";
        case "Eclipse Public License 2.0":
          return "[![License](https://img.shields.io/badge/License-EPL%202.0-blue.svg)](https://www.eclipse.org/legal/epl-2.0/)";
        case "GNU Affero General Public License v3.0":
          return "[![License](https://img.shields.io/badge/License-AGPLv3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        case "GNU General Public License v2.1":
          return "[![License](https://img.shields.io/badge/License-GPLv2.1-blue.svg)](https://www.gnu.org/licenses/gpl-2.1)";
        case "Mozilla Public License 2.0":
          return "[![License](https://img.shields.io/badge/License-MPL%202.0-orange.svg)](https://www.mozilla.org/en-US/MPL/2.0/)";
        case "The Unlicense":
          return "[![License](https://img.shields.io/badge/License-Unlicense-lightgrey.svg)](https://unlicense.org/)";
        default:
          return "";
      }
    }

    if (response.createReadme) {
      const readmeContent = `# ${response.title} ${licenseBadge(response.license)}

${response.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
Any Questions direct to me at:
* GitHub: (https://github.com/${response.username})
* Email: ${response.email}

`;

      fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    }
  })