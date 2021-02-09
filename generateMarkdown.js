function generateMarkdown(data){
  return`

# **${data.projectName}**

## **${data.description}**

## **Table of Contents**

* [Deployed Application](#deployed-application)

* [Screenshot](#screenshot)

* [Installation](#installation)

* [Features](#features)

* [Usage](#usage)

* [Credits](#credits)

* [License](#license)

* [Badges](#badges)

* [Technology](#technology)

* [Acknowledgements](#acknowledgements)

* [Contact](#contact-information)

## **Deployed Application**
${data.url}

## **Screenshot**
![screenshot](assets/images/screenshot.png)

## **Installation**
${data.installInstructions}

## **Features**
${data.features}

## **Usage**
${data.usage}

## **Credits**
${data.addCredits}

## **License**
${data.license}

## **Badges**

![GitHub top language](https://img.shields.io/github/languages/top/${data.github}/${data.projectName}?style=plastic)

![GitHub language count](https://img.shields.io/github/languages/count/${data.github}/${data.projectName})


## **Technology**
${data.technology}

## **Acknowledgements**
${data.enterAck}

## **Contact Information**
##### For questions or comments, please contact

* Github: ![github logo](/assets/images/GitHub.png)(https://github.com/${data.github})

* LinkedIn: /assets/images/LinkedIn.png(${data.LinkedIn})

* Email: /assets/images/email.png(${data.email})

`

// // TODO: Create a function that returns a license badge based on which license is passed in (https://github.com/${data.github})
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


}

module.exports = generateMarkdown;
