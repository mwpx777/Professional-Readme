function generateMarkdown(data) {
  return `

# **${data.projectName}**   ${renderLicenseBadge(data.license)}
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

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## **Badges**

![GitHub top language](https://img.shields.io/github/languages/top/${data.github}/${data.projectName}?style=plastic)

![GitHub language count](https://img.shields.io/github/languages/count/${data.github}/${data.projectName})


## **Technology**
${data.technology}

## **Acknowledgements**
${data.enterAck}

## **Tests**
${data.tests}

## **Contact Information**
##### For questions or comments, please contact

* Github: (https://github.com/${data.github})

* LinkedIn: (${data.LinkedIn})

* Email: (${data.email})

`
}
//  // TODO: Create a function that returns a license badge based on which license is passed in 
//  // If there is no license, return an empty string
function renderLicenseBadge(licenseText) {

  if (!licenseText) {
    return "";
  }
  if (licenseText == 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    
  }

  if (licenseText == 'GPL-3.0') {
    return '![License: GPL - v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    
  }

  if (licenseText == 'Apache - 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    
  }

  if (licenseText == 'ISC') {
    return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
    
  }


}

//  TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseText) {
  if (!licenseText) {
    return "";
  }
  if (licenseText == 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
     
      }

  if (licenseText == "GPL-3.0") {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
      
      }

  if (licenseText == 'Apache-2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
      
      }

  if (licenseText == 'ISC') {
    return '(https://opensource.org/licenses/ISC)'
      
      }
}

// // TODO: Create a function that returns the license section of README
//  // If there is no license, return an empty string
 function renderLicenseSection(licenseText) {
   if (!licenseText){
  return "";
 }else{
   return `## **License**`


 }
 };



module.exports = generateMarkdown;
