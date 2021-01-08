// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license)
  {
    switch (license) {
      case "MIT":
          return "https://img.shields.io/badge/License-MIT-yellow.svg"    
      default:
        break;
    }
  }
  else {
    return "";
  }
}
// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license)
  {
    switch (license) {
      case "MIT":
          return "https://opensource.org/licenses/MIT"    
      default:
        break;
    }
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  var licenseLink = renderLicenseLink(data.license);
  return `# ${data.title}
  # Table of Contents:

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#Tests)
  * [Questions](#questions)
  
  
  
  # Description:
  ${data.description}
  
  
  # Installation:
  ${data.installation}
  
  
  # Usage:
  ${data.usage}
  
  
  # License:
  [![License: ${data.license}](${licenseBadge})](${licenseLink})
  
  # Contributing:
  ${data.contribution}
  
  
  # Tests:
  ${data.tests}
  
  
  # Questions:
  Find me on GitHub at: https://github.com/${data.username}

  Email any questions you have to: ${data.email}
`;
}

module.exports = generateMarkdown;
