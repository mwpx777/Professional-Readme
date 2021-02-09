function generateMarkdown(data){
  return`

# **${data.projectName}**

## **${data.description}**

## **Table of Contents**

* [Deployed Application](#deployed-application)

* [Installation](#installation)

* [Features](#features)

* [Usage](#usage)

* [Credits](#credits)

* [License](#license)

* [Badge](#badge)

* [Technology](#technology)

* [Acknowledgements](#acknowledgements)

* [Contact](#contact)

## **Deployed Application**
${data.url}

## **Installation**
${data.installInstructions}

## **Usage**
${data.usage}

## **Credits**
${data.addCredits}

## **License**
${data.license}

## **Badge**
${data.badge}

## **Technology**
${data.technology}

## **Acknowledgements**
${data.enterAck}

## **Contact Information**
##### For questions or comments, please contact

* Github: https://github.com/${data.github}

* LinkedIn: ${data.LinkedIn}

* Email: ${data.email}
`

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
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
}

module.exports = generateMarkdown;
