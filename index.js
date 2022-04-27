const inquirer = require("inquirer");
const fs = require("fs");
const { generateHTML, writeToFile } = require("./src/generateHTML.js");

const setFileName = async () => {
  const fileNameQuestion = {
    type: "input",
    name: "fileName",
    message: "What should the file name be?",
  };

  const data = await inquirer.prompt(fileNameQuestion).catch((error) => {
    console.log(error);
  });

  return data;
};

// Use inquirer to take in user data and sends it to the utils class
const addUser = async () => {
  const employeeQuestions = [
    {
      type: "list",
      name: "role",
      message: "What is this employee's role?",
      choices: ["Employee", "Engineer", "Intern", "Manager"],
    },
    {
      type: "input",
      name: "name",
      message: "What is this employee's name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is this employee's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is this employee's email?",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is this employee's Github username?",
      when(answers) {
        return answers.role === "Engineer";
      },
    },
    {
      type: "input",
      name: "school",
      message: "What is this employee's school?",
      when(answers) {
        return answers.role === "Intern";
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is this employee's office number?",
      when(answers) {
        return answers.role === "Manager";
      },
    },
  ];

  const data = await inquirer.prompt(employeeQuestions).catch((error) => {
    console.log(error);
  });

  return data;
};

const addAnotherUser = async () => {
  const contLoopQuestion = {
    type: "confirm",
    name: "setLoop",
    message: "Would you like to add another user?",
    default: "true",
  };

  const data = await inquirer.prompt(contLoopQuestion).catch((error) => {
    console.log(error);
  });

  return data;
};


const init = async () => {
  let fileName = await setFileName();
  fileName = fileName.fileName;

  const data = [];
  let rerun = true;

  while (rerun) {
    data.push(await addUser());

    rerun = await addAnotherUser();
    rerun = rerun.setLoop;
  }
  generateHTML(fileName, data);
};

// Function call to initialize app
// Starts the function
init();
