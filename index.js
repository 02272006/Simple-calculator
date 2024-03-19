import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter you second number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform the action.",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//  CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operator === "SUBSTRACTION") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
(answer.operator === "DIVISION");
{
    console.log(answer.firstNumber / answer.SecondNumber);
}
{
    "Please select the correct operator";
}
;
