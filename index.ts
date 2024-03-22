#! /usr/bin/env/node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perrform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);


if (answer.operator==="Addition") {
    console.log(answer.firstNumber + answer.secondNumber);

}
else if (answer.operator==="Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);

}
else if (answer.operator==="Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);

}
 else if (answer.operator==="Division") {
    console.log(answer.firstNumber / answer.secondNumber);

}
else{
    console.log("please enter a valid operator");
}