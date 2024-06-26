#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    JPY: 3.64,
    SAR: 3.75,
    TRY: 32.03,
    PKR: 280, //PAKISTANI RUPEE
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "JPY", "SAR", "TRY", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "JPY", "SAR", "TRY", "PKR"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
//Currency conversion formula
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
