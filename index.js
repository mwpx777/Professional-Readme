// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'projectName',
            message: "What is your project's name? (Required)",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            message: "Please enter project description (Required)",
            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                }else{
                    console.log("Please enter the project's description")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'url',
            message: "Please enter url for deployed application (Required)",
            validate: urlInput =>{
                if(urlInput){
                    return true;
                }else{
                    console.log("Please enter the url!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: "Would you like to add any installation instructions?",
            default: true
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: "Please enter installation instructions",
            when: ({confirmInstall}) =>{
                if(confirmInstall){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {   
            type: 'input',
            name: 'usage',
            message: "Please enter usage information (Required)",
            validate: usageInput =>{
                if(usageInput){
                    return true;
                }else{
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: "Would you like to list any credits to this project?",
            default: true
        },
        {
            type: 'input',
            name: 'addCredits',
            message: "Please enter credits for this project",
            when: ({confirmCredits}) =>{
                if(confirmCredits){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: "Please enter a license. Please check one.",
            choices: ['MIT', 'GNU GPLv3', 'Apache-2.0', 'ISC']
        },
        {
            type: 'input',
            name: 'badge',
            message: "Please enter your badge URL here.  (For more info go to https://shields.io)"

        }
        {
            type: 'checkbox',
            name: 'technology',
            message: "What did you build this project with? Please check all that apply",
            choices: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'Node.js']
        },
     
      
        {
            type: 'confirm',
            name: 'acknowledgements',
            message: "Would you like to add any acknowlegements?",
            default: true
        },
        {
            type:'input',
            name: 'enterAck',
            message: "Please enter acknowledgements",
            when: ({acknowledgements}) =>{
                if(acknowledgements){
                    return true;
                }else{
                    console.log("Please enter an acknowledgement!")
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: "Please enter your email address (Required)",
            validate: emailInput =>{
                if(emailInput){
                    return true;
                }else{
                    console.log("Please enter your email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your Github username"
        },
        {
            type: 'input',
            name: 'LinkedIn',
            message: "Please enter your LinkedIn URL"
        },


    ])
};

const addFeatures = (featureData) =>{
    console.log(`
    =================
    Add a new feature
    =================
    `);

    // if there are no 'features' array property, create one

    if(!featureData.features){

    featureData.features = [];
    }

    return inquirer
        .prompt([

            {
                type: 'confirm',
                name: 'confirmFeature',
                message: "Would you like to add a feature?",
                default: true
            },
            {
                type: 'input',
                name: 'enterFeature',
                message: "Please add a feature",
                when: ({confirmFeature}) =>{
                    if(confirmFeature){
                        return true;
                    }else{
                        return false;
                    }
                }
            },
        ])
        .then(featuresData =>{
            featureData.features.push(featuresData);
            if(featuresData.confirmFeature){
                return addFeatures(featureData)
            }else{
                return featureData;
            }
        })
};

//  TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

questions()
.then (addFeatures)

const readmeFile = ' # ${projectName}

## ${description}

## *Table of Contents*

-[Depoloyed Application](#deployed-application)
-[Installation](#installation)
-[Features](#features)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Badge](#badge)
-[Technology](#technology)
-[Acknowledgements](#acknowledgements)
-[Contact](#contact)

## *Deployed Application*
${url}

## *Installation*
${installInstructions}

## *Features*
${enterFeature}

## *Usage*
${usage}



